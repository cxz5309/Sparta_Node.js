module.exports = {
  isEmail: (value) => {
    const [localPart, domain, ...etc] = value.split('@');

    if(!localPart || !domain || etc.length)
      return false;
    if(value.includes(' '))
      return false;
    if(value[0] === '-')
      return false;
    if(/[^\w+_-]+/g.test(localPart)){
      return false;
    }
    if(/[^\w.-]+/g.test(domain)){
      return false;
    }
    return true;
  },
};