app.admin.provisioning = (router) => router.mount({
  routes: {
    '/?': app.admin.provisioning.index,
    // '/~new': app.admin.provisioning.new,
    '/:resolutionIdentifier*': app.admin.provisioning.provisions,
  }
})
