function User(name) {
    this.name = name;
  }
  
  let user = new User('SSSS');
  let user2 = new user.constructor('PFFF');
  