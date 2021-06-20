export type authProp = {
  isAuthenticated: boolean,
  authenticate: Function,
  signout: Function
};

export type countryCodeDetails = {
  dialCode: string,
  format: string,
  iso2: string,
  name: string,
  priority: number
};

export type formModes = 'add' | 'view' | 'update';

export type postResponse = {
  status?: boolean,
  message?: editMessage | createMessage | deleteMessage
};

export type USER = {
  access_token: string,
  email: string,
  phone: string,
  refresh_token: string,
  username: string
};
