//function cleanPhoneNumber(phone) { return phone.replace(/-/g, '') }

const cleanPhoneNumber = phone => phone.replace(/-/g, '') 


/*function anythingToLowerCase(anything) {
  if (!anything) {
    return ''
  }

  return String(anything).toLowerCase()
}*/

const anythingToLowerCase = anything=> {
  if (!anything) {
    return ''
  }

  return String(anything).toLowerCase()
}