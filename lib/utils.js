module.exports = {
  identity: value => value,

  isNumber: num => typeof num === 'number' && !Number.isNaN(num),

  isNonEmptyString: str => typeof str === 'string' && str.length > 0,

  // encodeURIComponent ignores !, ', (, ), and *
  // cf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#Description
  fixedEncodeURIComponent: str => {
    return encodeURIComponent(str).replace(/[!'()*]/g, encodeCharacter)
  },

  replaceSpacesByUnderscores: str => str.replace(/\s/g, '_'),
  replaceUnderscoresBySpaces: str => str.replace(/_/g, ' '),

  flatten: values => {
    const array = []
    for (let value of values) {
      if (value instanceof Array) array.push(...value)
      else array.push(value)
    }
    return array
  }
}

const encodeCharacter = char => '%' + char.charCodeAt(0).toString(16)
