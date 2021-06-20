import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CommonHelper from '../common/utils';
import logo from "../../src/logo.svg";

const Helper = new CommonHelper();

class Login extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  async componentWillReceiveProps(nextprops: Props) {
    const { loginResult } = nextprops;
    const { fakeAuth, history } = this.props;
    const { props } = this;
    if (loginResult !== props.loginResult) {
      const {status, message} = loginResult;
      if(status === 200)
      {
        Helper.login(history, fakeAuth, loginResult);
      }
      else if(status === false)
      {
        alert("Not Valid User");
        this.setState({username: '', password: ''});
      }
    }
  }

  login = () => {
    const { dispatch } = this.props;
    const { username, password } = this.state;
    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: { "username": username, "password": password },
      });
      return;
    }
    if (password) {
      alert("Username not provided!");
      return;
    }
    if (username) {
      alert("Password not provided!");
      return;
    }
    alert("Username and Password not provided!");
  };

  handleState = (key, e) => {
    this.setState({
      [key]: e.target.value
    })

  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="main-content">
        <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9" />
        <div className="container mt--8 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary border-0 mb-0">
                <div className="card-header bg-transparent text-center">
                  <img src={logo}
                    style={{ height: 65 }}
                  />
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Sign in with credentials</small>
                  </div>
                  <form role="form">
                    <div className="form-group mb-3">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Username"
                          type="username"
                          value={username}
                          onChange={e => this.handleState('username',e)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-lock-circle-open" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={e => this.handleState('password',e)}
                        />
                      </div>
                    </div>
                    <div className="row align-middle">
                      <div className="col text-center">
                        {/* <Link to="dashboard"> */}
                        <button
                          type="button"
                          className="btn btn-primary my-4"
                          onClick={() => {
                            this.login();
                          }}
                        >
                          Sign in
                        </button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loginResult: state.login.result,
});

export default connect(mapStateToProps)(Login);
