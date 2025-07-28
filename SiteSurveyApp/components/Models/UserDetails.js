class UserDetails {
  constructor(
    userId,
    userName,
    password,
    firstName,
    middleName,
    lastName,
    mobileNumber,
    adharNumber,
    emailId,
    address,
    profilePicture,
    language,
    theme,
  ) {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.mobileNumber = mobileNumber;
    this.adharNumber = adharNumber;
    this.emailId = emailId;
    this.address = address;
    this.profilePicture = profilePicture;
    this.language = language;
    this.theme = theme;
  }
  setUserId = userId => {
    this.userId = userId;
  };

  setUserName = userName => {
    this.userName = userName;
  };

  setPassword = password => {
    this.password = password;
  };

  setFirstName = firstName => {
    this.firstName = firstName;
  };

  setMiddleName = middleName => {
    this.middleName = middleName;
  };

  setlastName = lastName => {
    this.lastName = lastName;
  };

  setMobileNumber = mobileNumber => {
    this.mobileNumber = mobileNumber;
  };

  setAdharNumber = adharNumber => {
    this.adharNumber = adharNumber;
  };

  setEmailId = emailId => {
    this.emailId = emailId;
  };

  setAddress = address => {
    this.address = address;
  };

  setProfilePicture = profilePicture => {
    this.profilePicture = profilePicture;
  };

  getUserName() {
    return this.userName;
  }

  getUserId() {
    return this.userId;
  }

  getFirstName() {
    return this.firstName;
  }

  getMiddleName() {
    return this.middleName;
  }
  getLastName(){
    return this.lastName;
  }
  getMobileNumber(){
    return this.mobileNumber;
  }
  getEmailId(){
    return this.emailId;
  }
  getaddress(){
    return this.address;
  }
  getProfilePicture(){
    return this.profilePicture;
  }
}
