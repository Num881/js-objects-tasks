// BEGIN
const objectToObject = (obj, keys) => {
    return keys.reduce((acc, key) => {
        if (key in obj) {
            acc[key] = obj[key];
        }
    return acc;
 }, {})
}
export default objectToObject;
// END
