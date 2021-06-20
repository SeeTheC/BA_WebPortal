import React from 'react'

export default function Header () {
  return (
    <nav className='navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <form className='navbar-search navbar-search-light form-inline mr-sm-3' id='navbar-search-main'>
            <div className='form-group mb-0'>
              <div className='input-group input-group-alternative input-group-merge'>
                {/* <div className='input-group-prepend'>
                  <span className='input-group-text'><i className='fas fa-search' /></span>
                </div> */}
                {/* <input className='form-control' placeholder='Search' type='text' /> */}
              </div>
            </div>
            <button type='button' className='close' data-action='search-close' data-target='#navbar-search-main' aria-label='Close'>
              <span aria-hidden='true'>×</span>
            </button>
          </form>
          <ul className='navbar-nav align-items-center  ml-md-auto '>
            <li className='nav-item d-xl-none'>
              <div className='pr-3 sidenav-toggler sidenav-toggler-dark' data-action='sidenav-pin' data-target='#sidenav-main'>
                <div className='sidenav-toggler-inner'>
                  <i className='sidenav-toggler-line' />
                  <i className='sidenav-toggler-line' />
                  <i className='sidenav-toggler-line' />
                </div>
              </div>
            </li>
          </ul>
          <ul className='navbar-nav align-items-center  ml-auto ml-md-0 '>
            <li className='nav-item dropdown'>
              <a className='nav-link pr-0' href='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <div className='media align-items-center'>
                  <span className='avatar avatar-sm rounded-circle'>
                    <img alt='Image placeholder' src='../assets/img/team-4.jpg' />
                  </span>
                  <div className='media-body  ml-2  d-none d-lg-block'>
                    <span className='mb-0 text-sm  font-weight-bold'>John Snow</span>
                  </div>
                </div>
              </a>
              <div className='dropdown-menu  dropdown-menu-right '>
                <a href='#!' className='dropdown-item'>
                  <i className='ni ni-button-power' />
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
