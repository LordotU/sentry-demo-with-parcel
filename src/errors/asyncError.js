export default (() => {
  setTimeout(() => {
    throw new Error('Async error')
  }, 1000)
})
