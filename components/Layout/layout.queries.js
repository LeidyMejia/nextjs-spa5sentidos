export const queryLayoutData = `
  query layoutData {
     siteInformation {
      id
      name
      slogan
    }
    socialMenu: menus(where: {
      machine_name: "social-navigation"
    }) {
      id
      items {
        id
        label_es
        label_en
        url_es
        url_en
        icon {
          name
          ext
          url
        }
      }
    }
  }
`