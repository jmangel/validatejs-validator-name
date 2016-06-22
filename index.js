module.exports = function(value, options, key, attributes) {
	
	var validName = /^[A-Za-z]+([\-'][A-Za-z]*)?\s[A-Za-z]+([\-'][A-Za-z]*)?[A-Za-z\s\-']*$/
      if (!validName.test(value)){
        return "Please enter full name.";
      }

  return null;
};