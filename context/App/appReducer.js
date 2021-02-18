export const defaultAppState = {
  siteInformation: {
    name: '',
    title: '',
    owners: [],
    baseUrl: '',
    description: '',
  },
  socialMenu: {
    id: null,
    items: []
  }
};

export const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_SITE_INFORMATION':
      return {
        ...state,
        siteInformation: {...state.siteInformation, ...payload}
      };
    case 'SET_SOCIAL_INFORMATION':
      return {
        ...state,
        socialMenu: {...state.socialMenu, ...payload}
      };
    default:
      throw new Error(`Unhandled type ${type}`);
  }
}