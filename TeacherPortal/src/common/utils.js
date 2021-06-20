// @flow
// export re-usable methods
import moment from 'moment';
import { authProp, USER } from './types';

class CommonHelper {
  GoogleApiKey = 'AIzaSyD1HLEvbzZQQrcQ-sXPHQjyXuCXNek1vKs';

  login = async (history: Object, fakeAuth: authProp, data: USER) => {
    if (fakeAuth) {
      await localStorage.setItem('loggedInUserData', JSON.stringify(data));
      fakeAuth.authenticate(() => {
        history.push('/dashboard');
      });
    } else history.push('/login');
  };

  logout = async (history: Object, fakeAuth: authProp) => {
    await localStorage.removeItem('loggedInUserData');
    if (history && fakeAuth) {
      fakeAuth.signout(() => {
        history.push('/');
      });
    } else {
      window.location.reload();
    }
  };

  getLoggedInUserData = () => {
    const data = localStorage.getItem('loggedInUserData');
    if (data) return JSON.parse(data);
    return null;
  };

  getValidExp = (experiences: any) => {
    return experiences.filter(
      data => data.title && data.joiningDate && data.relievingDate
    );
  };

  changeDatesFormateDayToYear = (data: Object) => {
    const DATA = data;
    const { dateOfBirth, expiryDate, joiningDate, workExperience } = DATA;
    if (dateOfBirth) {
      DATA.dateOfBirth = moment(dateOfBirth, 'YYYY-MM-DD').format('DD-MM-YYYY');
    }
    if (expiryDate) {
      DATA.expiryDate = moment(expiryDate, 'YYYY-MM-DD').format('DD-MM-YYYY');
    }
    if (joiningDate) {
      DATA.joiningDate = moment(joiningDate, 'YYYY-MM-DD').format('DD-MM-YYYY');
    }
    if (workExperience) {
      workExperience.map((value, i) => {
        if (value.joiningDate) {
          DATA.workExperience[i].joiningDate = moment(
            value.joiningDate,
            'YYYY-MM-DD'
          ).format('DD-MM-YYYY');
        }
        if (value.joiningDate) {
          DATA.workExperience[i].relievingDate = moment(
            value.relievingDate,
            'YYYY-MM-DD'
          ).format('DD-MM-YYYY');
        }
        return null;
      });
    }
    return DATA;
  };

  changeDatesFormateYearToDate = (data: Object) => {
    const DATA = data;
    const { dateOfBirth, expiryDate, joiningDate, workExperience } = DATA;
    if (dateOfBirth) {
      DATA.dateOfBirth = moment(dateOfBirth, 'DD-MM-YYYY').format('YYYY-MM-DD');
    }
    if (expiryDate) {
      DATA.expiryDate = moment(expiryDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
    }
    if (joiningDate) {
      DATA.joiningDate = moment(joiningDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
    }
    if (workExperience) {
      workExperience.map((value, i) => {
        if (value.joiningDate) {
          DATA.workExperience[i].joiningDate = moment(
            value.joiningDate,
            'DD-MM-YYYY'
          ).format('YYYY-MM-DD');
        }
        if (value.joiningDate) {
          DATA.workExperience[i].relievingDate = moment(
            value.relievingDate,
            'DD-MM-YYYY'
          ).format('YYYY-MM-DD');
        }
        return null;
      });
    }
    return DATA;
  };

  checkDataLength = (data: Object) => {
    let field = Object.keys(data).map(values => {
      if (
        values !== 'error' &&
        values !== 'success' &&
        values !== 'seats' &&
        data[values] &&
        (typeof data[values] === 'string' ||
          typeof data[values] === 'number') &&
        data[values].toString().length > 40
      ) {
        return values;
      }
      return null;
    });
    field = field.filter(dataValue => dataValue);
    return field.join();
  };

  validateCharterSearch = (data: Object) => {
    if (data && typeof data === 'object') {
      const {
        sourceId,
        saleFor,
        destinationId,
        hireType,
        adults,
        children,
        vesselType,
        date,
        weight,
        time
      } = data;
      if (!sourceId || !date || !time || !vesselType) {
        return { status: false, error: 'Please fill all required field' };
      }
      if (
        !(
          (saleFor === 'destination' && destinationId) ||
          (saleFor === 'hire' && hireType)
        )
      ) {
        return {
          status: false,
          error: 'Please select either destination or hire type'
        };
      }
      if (vesselType === 'LANDING_CRAFT' || vesselType === 'CARGO_BOAT') {
        if (!this.positiveInteger(weight)) {
          return {
            status: false,
            error: 'Weight should be in positive integer'
          };
        }
      } else if (
        !(children && Number(children)) &&
        !(adults && Number(adults))
      ) {
        return {
          status: false,
          error: 'At least one of adult or children required'
        };
      } else if (
        !this.positiveInteger(children) &&
        !this.positiveInteger(adults)
      ) {
        return {
          status: false,
          error: 'Adult and children should be in positive integer'
        };
      } else if (
        children.toString().includes('.') ||
        adults.toString().includes('.')
      ) {
        return {
          status: false,
          error: 'Adult and children should be in positive integer'
        };
      }
    }
    return { status: true, error: '' };
  };

  positiveInteger = (data: any) => {
    if (
      !data ||
      !Number(data) ||
      data.toString().includes('.') ||
      !this.validateInteger(data)
    ) {
      return false;
    }
    return true;
  };

  validateCharterConfirmation = (data: Object) => {
    if (data && typeof data === 'object') {
      const { phoneNumber, name } = data;
      if (!this.validateInteger(phoneNumber)) {
        return { status: false, key: 'Phone number is not valid' };
      }
      if (!this.validateCharacters(name)) {
        return { status: false, key: 'Name is not valid' };
      }
    }
    return { status: true, key: '' };
  };

  validateTicketingData = (data: Object) => {
    if (data && typeof data === 'object') {
      const {
        children,
        infants,
        adults,
        phoneCode,
        phoneNumber,
        name,
        sourceId,
        destinationId
      } = data;
      if (!sourceId || !destinationId || !phoneCode || !phoneNumber || !name) {
        return { status: false, key: 'Please fill all required field' };
      }
      if (sourceId === destinationId) {
        return { status: false, key: "Source and destination can't be same" };
      }
      if (!this.validateInteger(phoneNumber)) {
        return { status: false, key: 'Phone number is not valid' };
      }
      if (
        (infants && infants.toString().includes('.')) ||
        (adults && adults.toString().includes('.')) ||
        (children && children.toString().includes('.'))
      ) {
        return {
          status: false,
          key: 'adult, children, infants can contain only positive number'
        };
      }
      if (
        (Number(infants) && !this.validateInteger(infants)) ||
        (Number(adults) && !this.validateInteger(adults)) ||
        (Number(children) && !this.validateInteger(children))
      ) {
        return {
          status: false,
          key: 'adult, children, infants can contain only positive number'
        };
      }
      if (!(children && Number(children)) && !(adults && Number(adults))) {
        return {
          status: false,
          key: 'At least one of adult or children required'
        };
      }
      if (!this.validateCharacters(name)) {
        return { status: false, key: 'Fullname is not valid' };
      }
    }
    return { status: true, key: '' };
  };

  validatedata = (data: Object) => {
    if (data && typeof data === 'object') {
      const {
        email,
        phone,
        pinCode,
        fullName,
        name,
        city,
        state,
        topUpCommission,
        ticketingCommission,
        cardCommission,
        goloPayCommission,
        agentSaleCommission,
        medicalLeaves,
        casualLeaves,
        privilegedLeaves,
        workExperience,
        creditLimit,
        bankTransferNumber,
        accountNumber,
        hotelSaleCommission
      } = data;
      if (
        bankTransferNumber &&
        (bankTransferNumber.toString().length > 40 ||
          bankTransferNumber.toString().length < 10)
      ) {
        return {
          status: false,
          key: 'Bank transfer number should contain 10 to 40 characters'
        };
      }
      if (
        accountNumber &&
        (!this.validateInteger(accountNumber) ||
          accountNumber.length > 31 ||
          accountNumber.length < 7)
      ) {
        return {
          status: false,
          key:
            'Account number, A valid account number should contain 7 to 31 positive numbers'
        };
      }
      if (fullName && !this.validateCharacters(fullName)) {
        return { status: false, key: 'FullName' };
      }
      if (name && !this.validateCharacters(name)) {
        return { status: false, key: 'Name' };
      }
      if (email && !this.validateEmail(email)) {
        return { status: false, key: 'Email' };
      }
      if (city && !this.validateCharacters(city)) {
        return { status: false, key: 'City' };
      }
      if (state && !this.validateCharacters(state)) {
        return { status: false, key: 'State' };
      }
      if (
        pinCode &&
        (!this.validateOnlyNumber(pinCode) || pinCode.toString().length !== 6)
      ) {
        return { status: false, key: 'PinCode' };
      }
      if (
        creditLimit &&
        (!this.validateInteger(creditLimit) ||
          creditLimit < 0 ||
          creditLimit > 1000000)
      ) {
        return { status: false, key: 'Credit Limit' };
      }
      if (phone && !this.validateOnlyNumber(phone) || phone.toString().length > 15) {
        return { status: false, key: 'Phone' };
      }
      if (
        medicalLeaves &&
        (!this.validateOnlyNumber(medicalLeaves) || medicalLeaves > 25)
      ) {
        return { status: false, key: 'Medical Leaves' };
      }
      if (
        casualLeaves &&
        (!this.validateOnlyNumber(casualLeaves) || casualLeaves > 25)
      ) {
        return { status: false, key: 'Casual Leaves' };
      }
      if (
        privilegedLeaves &&
        (!this.validateOnlyNumber(privilegedLeaves) || privilegedLeaves > 25)
      ) {
        return { status: false, key: 'Privileged Leaves' };
      }
      if (
        topUpCommission &&
        (!this.validateDecimal(topUpCommission) || topUpCommission > 99)
      ) {
        return { status: false, key: 'topup commission' };
      }
      if (
        ticketingCommission &&
        (!this.validateDecimal(ticketingCommission) || ticketingCommission > 99)
      ) {
        return { status: false, key: 'ticketing commission' };
      }
      if (
        hotelSaleCommission &&
        (!this.validateDecimal(hotelSaleCommission) || hotelSaleCommission > 99)
      ) {
        return { status: false, key: 'hotel sale commission' };
      }
      if (
        cardCommission &&
        (!this.validateDecimal(cardCommission) || cardCommission > 99)
      ) {
        return { status: false, key: 'card commission' };
      }
      if (
        goloPayCommission &&
        (!this.validateDecimal(goloPayCommission) || goloPayCommission > 99)
      ) {
        return { status: false, key: 'golo pay commission' };
      }
      if (
        agentSaleCommission &&
        (!this.validateDecimal(agentSaleCommission) || agentSaleCommission > 99)
      ) {
        return { status: false, key: 'agent sale commission' };
      }
      if (workExperience) {
        const DATA = this.getValidExp(workExperience);
        let status = true;
        DATA.map(value => {
          if (
            status &&
            moment(value.joiningDate, 'YYYY-MM-DD').unix() >
              moment(value.relievingDate, 'YYYY-MM-DD').unix()
          ) {
            status = false;
          }
          return null;
        });
        if (!status) {
          return {
            status: false,
            key:
              'Work Experience, Joining date should be lesser then Releaving Date'
          };
        }
      }
    }
    return { status: true, key: '' };
  };

  validateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validateMobile = (phone: number) => {
    const re = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
    return re.test(String(phone).toLowerCase());
  };

  validateCharacters = (data: string) => {
    const letters = /^[a-zA-Z ]+$/;
    if (data.match(letters)) {
      return true;
    }
    return false;
  };

  validateInteger = (data: number) => {
    // if (Number.isNaN(parseInt(data, 10))) {
    //   return false;
    // }
    // return true;
    if (Number.isInteger(parseInt(data, 10))) {
      if (data > 0) {
        return true;
      }
    }
    return false;
  };

  validateOnlyNumber = (data: number) => {
    const numberRegex = /^[0-9]*$/;
    if (numberRegex.test(data)) {
      if (data > 0) {
        return true;
      }
    }
    return false;
  };

  validateDecimal = (data: string) => {
    const pattern = /^\d+(\.\d{1,2})?$/;
    if (pattern.test(data)) {
      return true;
    }
    return false;
  };

  titleCase = str => {
    if (str) {
      str = str.toLowerCase();
      str = str.charAt(0).toUpperCase() + str.slice(1);
      return str;
    }
    return str;
  };

  removeUnderscoreMakeTitleCase = str => {
    if (str) {
      str = str.toLowerCase();
      str = str.split('_');
      for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    }
    return str;
  };

  breakOnCapital = (value: string) => value.replace(/([A-Z])/g, ' $1').trim();

  keysInObj: Object = (obj: Object) => Object.keys(obj);

  joinArrayValues = (dataArray: []) => dataArray.join();

  validateAddEditImageSubmit = (data, type) => {
    const {
      position,
      selectedImage,
      dashboardImageType,
      description,
      title,
    } = data;
    if(type==='add'){
      if(!position || !selectedImage.length || !dashboardImageType){
        return({isError: true, message: "Image Type, Position of Image and Image is Required."})
      }
      if(title && title.length > 100){
        return({isError: true, message: "Maximum limit of title is 100 character"})
      }
      if(description && description.length > 250){
        return({isError: true, message: "Maximum limit of description is 250 character"})
      }
      else {
        return({isError: false, message: ""})
      }
    }
    else {
      if(!position || !dashboardImageType){
        return({isError: true, message: "Image Type and Position of Image is Required."})
      }
      if(title && title.length > 100){
        return({isError: true, message: "Maximum limit of title is 100 character"})
      }
      if(description && description.length > 250){
        return({isError: true, message: "Maximum limit of description is 250 character"})
      }
      else {
        return({isError: false, message: ""})
      }
    }
};

validateDealForm = (data, type) => {
  const {
    selectedImage,
    description,
    name,
    code,
    dealType,
    dealValue,
  } = data;

  if(type==='add'){
    if(!dealType){
      return({isError: true, message: "Deal Type is required"})
    }
    if(!selectedImage.length){
      return({isError: true, message: "Image is required"})
    }
    if(!name){
      return({isError: true, message: "Name is required"})
    }
    if(name && name.length > 30){
      return({isError: true, message: "Deal name length can not have more than 30 character"})
    }
    if(!dealValue){
      return({isError: true, message: "Deal value is required"})
    }
    if(!code){
      return({isError: true, message: "Deal code is required"})
    }
    if(code && code.length > 10){
      return({isError: true, message: "Deal code length can not have more than 10 character"})
    }
    if(!description){
      return({isError: true, message: "Description is required"})
    }
    if(description && description.length > 100){
      return({isError: true, message: "Maximum limit of description is 250 character"})
    }
    else {
      return({isError: false, message: ""})
    }
  }
  else {
    if(!dealType){
      return({isError: true, message: "Deal Type is required"})
    }
    if(!name){
      return({isError: true, message: "Name is required"})
    }
    if(name && name.length > 30){
      return({isError: true, message: "Deal name length can not have more than 30 character"})
    }
    if(!dealValue){
      return({isError: true, message: "Deal value is required"})
    }
    if(!code){
      return({isError: true, message: "Deal code is required"})
    }
    if(code && code.length > 10){
      return({isError: true, message: "Deal code length can not have more than 10 character"})
    }
    if(!description){
      return({isError: true, message: "Description is required"})
    }
    if(description && description.length > 100){
      return({isError: true, message: "Maximum limit of description is 100 character"})
    }
    else {
      return({isError: false, message: ""})
    }
  }
};
}

export default CommonHelper;
