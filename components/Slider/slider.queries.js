export const querySlidersData = `
query slidersData {
  sliders {
    id
    title_es
    title_en
    subtitle_es
    subtitle_en
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