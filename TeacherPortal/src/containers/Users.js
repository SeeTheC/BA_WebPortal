import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default function Users () {
  return (
    <div>
      <div className='header bg-primary pb-6'>
        <div className='container-fluid'>
          <div className='header-body'>
            <div className='row align-items-center py-4'>
              <div className='col-lg-6 col-7'>
                <h6 className='h2 text-white d-inline-block mb-0'>Users</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid mt--6'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-header border-0'>
                &nbsp;
              </div>
              <div className='table-responsive'>
                <table className='table align-items-center table-flush'>
                  <thead className='thead-light'>
                    <tr>
                      <th scope='col'>Sr.No</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Contact No</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Type</th>
                      <th scope='col'>Block</th>
                      <th scope='col'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='list'>
                    <tr>
                      <td>1</td>
                      <td>Mikayla Ervin</td>
                      <td>+16183209941</td>
                      <td>hello@gmail.com</td>
                      <td>User</td>
                      <td>
                        <label className='custom-toggle' htmlFor='hello'>
                          <input type='checkbox' id='hello' checked />
                          <span className='custom-toggle-slider rounded-circle' />
                        </label>
                      </td>
                      <td>
                        <button className='btn btn-icon btn-success btn-sm' type='button'>
                          <span className='btn-inner--icon'><i className='ni ni-check-bold' /></span>
                        </button>
                        <button className='btn btn-icon btn-primary btn-sm' type='button' data-toggle='modal' data-target='#exampleModal'>
                          <span className='btn-inner--icon'><i className='fas fa-edit' /></span>
                        </button>
                        <button className='btn btn-icon btn-danger btn-sm' type='button'>
                          <span className='btn-inner--icon'><i className='fas fa-trash' /></span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mikayla Ervin</td>
                      <td>+16183209941</td>
                      <td>hello@gmail.com</td>
                      <td>Lawyer</td>
                      <td>
                        <label className='custom-toggle' htmlFor='hello'>
                          <input type='checkbox' id='hello' checked />
                          <span className='custom-toggle-slider rounded-circle' />
                        </label>
                      </td>
                      <td>
                        <button className='btn btn-icon btn-success btn-sm' type='button'>
                          <span className='btn-inner--icon'><i className='ni ni-check-bold' /></span>
                        </button>
                        <button className='btn btn-icon btn-primary btn-sm' type='button' data-toggle='modal' data-target='#exampleModal'>
                          <span className='btn-inner--icon'><i className='fas fa-edit' /></span>
                        </button>
                        <button className='btn btn-icon btn-danger btn-sm' type='button'>
                          <span className='btn-inner--icon'><i className='fas fa-trash' /></span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Mikayla Ervin</td>
                      <td>+16183209941</td>
                      <td>hello@gmail.com</td>
                      <td>User</td>
                      <td>
                        <label className='custom-toggle' htmlFor='hello'>
                          <input type='checkbox' id='hello' checked />
                          <span className='custom-toggle-slider rounded-circle' />
                        </label>
                      </td>
                      <td>
                        <button className='btn btn-icon btn-success btn-sm' type='button'>
                          <span className='btn-inner--icon'><i className='ni ni-check-bold' /></span>
                        </button>
                        <button className='btn btn-icon btn-primary btn-sm' type='button' data-toggle='modal' data-target='#exampleModal'>
                          <span className='btn-inner--icon'><i className='fas fa-edit' /></span>
                        </button>
                        <button className='btn btn-icon btn-danger btn-sm' type='button'>
                          <span className='btn-inner--icon'><i className='fas fa-trash' /></span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Mikayla Ervin</td>
                      <td>+16183209941</td>
                      <td>hello@gmail.com</td>
                      <td>Lawyer</td>
                      <td>
                        <label className='custom-toggle' htmlFor='hello'>
                          <input type='checkbox' id='hello' checked />
                          <span className='custom-toggle-slider rounded-circle' />
                        </label>
                      </td>
                      <td>
                        <button className='btn btn-icon btn-success btn-sm' type='button'>
                          <span className='btn-inner--icon'><i className='ni ni-check-bold' /></span>
                        </button>
                        <button className='btn btn-icon btn-primary btn-sm' type='button' data-toggle='modal' data-target='#exampleModal'>
                          <span className='btn-inner--icon'><i className='fas fa-edit' /></span>
                        </button>
                        <button className='btn btn-icon btn-danger btn-sm' type='button'>
                          <span className='btn-inner--icon'><i className='fas fa-trash' /></span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='card-footer py-4'>
                <nav aria-label='...'>
                  <ul className='pagination justify-content-end mb-0'>
                    <li className='page-item disabled'>
                      <a className='page-link' href='#' tabindex='-1'>
                        <i className='fas fa-angle-left' />
                        <span className='sr-only'>Previous</span>
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a className='page-link' href='#'>1</a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>2 <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        <i className='fas fa-angle-right' />
                        <span className='sr-only'>Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>Edit User</h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <div className='row'>
                  <div className='col'>
                    <div class='form-group'>
                      <label for='example-text-input' class='form-control-label'>Name</label>
                      <input class='form-control' type='text' value='John Snow' id='example-text-input' />
                    </div>
                  </div>
                  <div className='col'>
                    <div class='form-group'>
                      <label for='example-text-input2' class='form-control-label'>Contact no</label>
                      <input class='form-control' type='text' value='John Snow' id='example-text-input2' />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='form-group'>
                      <label for='example-text-input3' className='form-control-label'>Email</label>
                      <input class='form-control' type='text' value='John Snow' id='example-text-input3' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='form-group'>
                      <label for='example-text-input4' class='form-control-label'>User Type</label>
                      <select className='form-control' id='example-text-input4'>
                        <option>User</option>
                        <option>Lawyer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='form-group'>
                      <label className='form-control-label float-left mr-2'>Blocked/Unblocked</label>
                      <label className='custom-toggle' htmlFor='hello'>
                        <input type='checkbox' id='hello' checked />
                        <span className='custom-toggle-slider rounded-circle' />
                      </label>
                    </div>

                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
                <button type='button' className='btn btn-primary'>Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <footer className='footer pt-0'>
          <div className='row align-items-center justify-content-lg-between'>
            <div className='col-lg-6'>
              <div className='copyright text-center text-lg-left  text-muted mt-4 ml-4'>
                &copy; 2020  LawRoom
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
