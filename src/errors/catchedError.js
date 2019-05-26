export default (() => {
  try {
    throw new Error('Catched error')
  } catch (error) {
    console.error(error)

    Sentry.withScope(scope => {
      scope.setUser({
        id: 1,
        email: "user_1_mail@example.com",
      })

      Sentry.captureException(error)
    })
  }
})
