import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import logo from "../../src/logo.svg";

export default function Sidebar () {
  return (
    <nav className='sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white' id='sidenav-main'>
      <div className='scrollbar-inner'>
        <div className='sidenav-header  align-items-center'>
          <a className='navbar-brand' href='javascript:void(0)'>
            <img sr={logo} className='navbar-brand-img' alt='Logo' />
          </a>
        </div>
        <div className='navbar-inner'>
          <div className='collapse navbar-collapse' id='sidenav-collapse-main'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <i className='ni ni-tv-2 text-primary' />
                  <span className='nav-link-text'>ATTENDANCE</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/syallbus'>
                  <i className='ni ni-tv-2 text-primary' />
                  <span className='nav-link-text'>SYALLBUS</span>
                </Link>
              </li>              
              <li className='nav-item'>
                <Link className='nav-link' to='/assessment'>
                  <i className='ni ni-tv-2 text-primary' />
                  <span className='nav-link-text'>ASSESSMENT</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/result'>
                  <i className='ni ni-tv-2 text-primary' />
                  <span className='nav-link-text'>RESULT</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/question-bank'>
                  <i className='ni ni-tv-2 text-primary' />
                  <span className='nav-link-text'>QUESTION BANK</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
