export const delimited = ({ split = ',', serializeMap = x => x, deserializeMap = x => x }) => ({
  serialize: arr => Array.isArray(arr)
    ? array.map(serializeMap).join(split)
    : null,
  deserialize: str => string
    ? str.split(split).map(deserializeMap)
    : [],
});