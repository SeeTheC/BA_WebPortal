import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommonHelper from "../common/utils";

const Helper = new CommonHelper();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionListing: [],
    };
  }

  componentDidMount() {}

  // componentWillReceiveProps(nextprops) {

  // }

  handleState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleQuestionListingAPI = () => {
    const { dispatch } = this.props;

    const userDetails = Helper.getLoggedInUserData();
    const HEADER = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        `${
          userDetails &&
          userDetails.data &&
          userDetails.data.token &&
          userDetails.data.token
        }`,
    };
    dispatch({ type: "QUESTION_LISTING", payload: { HEADER } });
  };

  render() {
    const { questionListing } = this.state;
    return (
      <div>
        <div className="header bg-primary pb-6">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center py-4">
                <div className="col-lg-6 col-7">
                  <h6 className="h2 text-white d-inline-block mb-0">
                    ATTENDANCE
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Details</h3>
                    </div>
                    <div className="col">
                      <Link to="/add-new-treatment">
                        <button
                          class="btn btn-primary float-right"
                          type="button"
                        >
                          Add New
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Question</th>
                        <th scope="col">Marks</th>
                        <th scope="col" className="colWidth">
                          Type
                        </th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {questionListing &&
                        questionListing.length >= 1 &&
                        questionListing.map((data, index) => {
                          return (
                            <tr>
                              <th scope="row">{index + 1}</th>

                              <td>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry...
                              </td>
                              <td>
                                <button
                                  className="btn btn-icon btn-primary btn-sm"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  <span className="btn-inner--icon">
                                    <i className="fas fa-edit" />
                                  </span>
                                </button>
                                <button
                                  className="btn btn-icon btn-danger btn-sm"
                                  type="button"
                                  onClick={() => {}}
                                >
                                  <span className="btn-inner--icon">
                                    <i className="fas fa-trash" />
                                  </span>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer pt-0">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="copyright text-center text-lg-left  text-muted mt-4 ml-4">
                  &copy; 2021 Teacher Portal
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Dashboard);
