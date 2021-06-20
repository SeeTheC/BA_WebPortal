// @flow
import fetch from 'cross-fetch';
import { checkStatus, parseJSON } from './responseHandler';
import axios from 'axios';


// const API_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'http://13.232.16.136:5000/api'
//     : 'http://13.232.16.136:5000/api';

const API = "http://13.232.16.136:5000";

export default (
  endpoint: string,
  method: string,
  formData: Object,
  header: Object,
  hostName: string = 'http://13.232.16.136:5000/api'
) => {
  return (
    axios.post(`${API}${endpoint}`, formData, {
      headers: header
    }).then(res => res)
      .catch((error) => {
        return {
          status: false,
          message: 'Ooops network error! Check your net connection'
        }
      })


  )
}
