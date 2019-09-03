const { Resolver } = require('dns');
const fakeEmails = require('../constants/fakeEmailConstants')

const resolver = new Resolver();
resolver.setServers(['8.8.8.8', '4.4.4.4']);

const validateEmailAddress = emailAddress => {
  const splitEmail = emailAddress.split('@')[1];
  if(undefined === splitEmail) throw(new Error("Invalid email format"));
  resolver.resolveMx(splitEmail, (err, mx) => {
    if(err) throw(err);
    return mx;
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