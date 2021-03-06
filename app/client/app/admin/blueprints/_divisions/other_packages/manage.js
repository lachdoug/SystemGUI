app.admin.blueprints.other_packages.manage = (router, blueprint) => (a, x) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'other_packages',
      as: 'nest',
      form: (ff) => [
        ff.items({
          collection: true,
          singular: 'other package',
          form: (fff) => [
            fff.field({
              key: 'target',
              as: 'hidden',
            }),
            fff.field({
              key: 'extraction',
              as: 'hidden',
            }),
            fff.field({
              key: 'extracted_path',
              as: 'hidden',
            }),
            fff.field({
              key: 'destination',
              as: 'hidden',
            }),
            a['div.float-right']([
              fff.up({buttonTag: {class: 'btn'}}),
              fff.down({buttonTag: {class: 'btn'}}),
              fff.remove({buttonTag: {class: 'btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              fff.object.target ? a.div([
                fff.object.target.identifier || a._, ' ',
                fff.object.target.repository || a['.error']('No repository'), ' ',
                fff.object.target.branch ? a.small(`${fff.object.target.branch}`) : a._,
              ]) : a._,
            ]),
          ]
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.other_packages.length) {
      blueprint.other_packages = form.other_packages
    } else {
      delete blueprint.other_packages
    };
    return blueprint;
  },
})
