module.exports = encode;
function encode(input) {
  return new Buffer(input).toString('base64')
}