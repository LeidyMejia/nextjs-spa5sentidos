export function translatableProperties(object = {}, lang, properties = []) {
  const entries = properties.map(property => [property, object[property + '_' + lang]])

  return Object.fromEntries(entries);
}