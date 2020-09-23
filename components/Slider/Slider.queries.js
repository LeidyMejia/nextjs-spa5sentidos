export const querySlidersData = `
query slidersData {
  sliders {
    id
    title {
      es
      en
    }
    subtitle {
      es
      en
    }
    images {
      desktop {
        id
        url
        ext
        previewUrl
        alternativeText
      }
      mobile {
        id
        url
        ext
        previewUrl
        alternativeText
      }
    }
  }
}`