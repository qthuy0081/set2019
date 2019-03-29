function sum (a, b) {
  if (!b) return a
  if (!a) return b
  return a + b
}

module.exports = sum
