export const pathImagesApi = (relativePathImage = '') => {
  return process.env.IMAGES_URL + relativePathImage;
}