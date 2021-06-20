import React from "react";

const Header = (props) => {
  return (
    <header className="header">
        {/* <div className="logo">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img className="navbar-logo" src="static/images/logo.png" alt="Assignmentroo" /></a>
            </div>
        </div> */}
		<nav className="navbar navbar-default">
			<div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
            			<li><a href="">Service</a></li>
                        <li><a href="">About US</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Review</a></li>
                        <li><a href="">Order</a></li>
                    </ul>
                </div>
        	</div>
		</nav>
	</header>

  );
};

export default Header;
