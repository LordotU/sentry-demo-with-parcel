export default () => {
  fetch('https://financialmodelingprep.com/api/company/profile/AAPL?datatype=json')
    .then(response => response.json())
    .then(data => {
      console.log(data)

      return Promise.reject()
    })
}
