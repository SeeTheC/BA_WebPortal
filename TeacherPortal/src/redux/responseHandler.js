// @flow

export const checkStatus = (response: Object) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 500) {
    return response.json().then(errorData => {
      const message = (errorData || {}).error;
      const error = new TypeError(message || 'Server error');
      return error;
    });
  }
  if (response.status === 401) {
    const error = {
      status: response.status,
      message: 'Unathorized'
    };
    return error;
  }
  return response.json().then(errorData => {
    const error = {
      status: response.status,
      message: errorData
    };
    return error;
  });
};

export const parseJSON = (response: Object) => {
  if (response.status === 204 || response.status === 205) {
    return {};
  }
  if (response.status === 401 || response.status === 500) {
    return response;
  }
  if (response.headers) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json();
    }
  }
  return {};
};
