app.applications.delete = (router) => (a, x) => [
  a.h3(`Delete?`),
  app.form({
    url: `/api/applications/${router.params.application_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open(`../..`),
  }),
];