const { Resolver } = require('dns');

const fakeEmails = require('../constants/fakeEmailConstants')

const resolver = new Resolver();
resolver.setServers(['8.8.8.8', '4.4.4.4']);

const validateEmailAddress = emailAddress => {
  return new Promise((resolve, reject) => {

    const splitEmail = emailAddress.split('@')[1];
    if(undefined === splitEmail) {
        reject(new Error("Invalid email format"))
    }
    
    resolver.resolveMx(splitEmail, (err, mx) => {
      if(err) {
        reject(err)
      }
      resolve(mx)
    });
  });
};

const randomEmailAddress = () => {
  const randomIndex = Math.floor(Math.random() * 29);
  return fakeEmails[randomIndex];
}

module.exports = {
  validateEmailAddress,
  randomEmailAddress,
};