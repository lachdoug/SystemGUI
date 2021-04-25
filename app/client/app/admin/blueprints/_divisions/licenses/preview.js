app.admin.blueprints.licenses.preview = (router, blueprint) => (a,x) =>
blueprint.licenses ? [
  'Licenses',
  a.ul(
    blueprint.licenses.map(license => a.li(
      [license.label, ' ', a.small(license.url)]
    ))
  ),
] : a._
