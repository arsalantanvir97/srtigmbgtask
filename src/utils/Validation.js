export const isValidInput = (value, type) => {
  switch (type) {
    case 'age':
      const ageRegex = /^(?:[1-9]|[1-9][0-9]|1[01][0-0])$/
      return {
        isValid: ageRegex.test(value),
        message: 'Age should be between 1 and 110.',
      }

    case 'name':
      const nameRegex = /^[a-zA-Z]+$/
      return {
        isValid: nameRegex.test(value),
        message: 'Please enter a valid name.',
      }
    case 'city':
      const cityRegex = /^[a-zA-Z]+$/
      return {
        isValid: cityRegex.test(value),
        message: 'Please enter a valid city name.',
      }
    case 'zipcode':
      const zipcodeRegex = /^\d{5}$/
      return {
        isValid: zipcodeRegex.test(value),
        message: 'Please enter a valid zipcode.',
      }
  }
}
