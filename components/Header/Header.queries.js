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
      label {
        es
        en
      }
      url {
        es
        en
      }
    }
  }
   siteInformation {
    id
    name
    slogan
  }
}
`