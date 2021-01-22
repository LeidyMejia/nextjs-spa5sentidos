export const queryHeaderData = `
query header{
  menus (where: {
    machine_name: "main-navigation"
  }) {
    id
    title
    machine_name
    items {
      id
      label_es
      label_en
      url_es
      url_en
    }
  }
   siteInformation {
    id
    name
    slogan
  }
}
`