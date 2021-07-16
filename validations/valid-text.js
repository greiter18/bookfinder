const validText = str => {// making sure it a string and not containing jsut spaces
  return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;