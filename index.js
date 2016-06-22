module.exports = function(value, options, key, attributes) {
	
	var validName = /^[a-z- \xC0-\xFF]+([\-'][a-z- \xC0-\xFF]*)?\s[[a-z- \xC0-\xFF]+([\-'][a-z- \xC0-\xFF]*)?[a-z- \xC0-\xFF\s\-']*$/i
      if (!validName.test(value)){
        return "Please enter full name.";
      }

  return null;
};