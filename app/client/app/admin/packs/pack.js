app.admin.packs.pack = (router) => (a, x) => a.div([
//   app.closeOld(() => router.open('/admin/packs')),
  app.close(router),
  a.h1(`${router.params.resolutionIdentifier} pack`),
  router.mount({
    routes: {
      "/?": app.admin.packs.show,
      "/artifact": app.admin.packs.artifact,
      "/commit": app.admin.packs.commit,
      "/delete": app.admin.packs.delete,
    }
  }),
]);
