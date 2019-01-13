[
  'spinner',
  'log'
].forEach((m) => {
  Object.assign(exports, require(`./${m}`))
})
