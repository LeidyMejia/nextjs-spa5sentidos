export const queryAppData = `
query appInformation {
   siteInformation {
    id
    name
    slogan
  }
  menus(where: {
    machine_name: "social-navigation"
  }) {
    id
    items {
      label_es
      label_en
      url_es
      url_en
    }
  }
}
`