const prefixAll = (prefix) => (word => console.log(`${prefix}${word}`))

const prefixRe = prefixAll("re")
const prefixIn = prefixAll("in")
prefixRe("bueno")
prefixIn("creíble")
