// BEGIN
const getObject = (obj, keys) => {
    return keys.reduce((acc, key) => {
        if (acc == null || !Object.hasOwn(acc, key)) {
            return null;
        }
        return acc[key];
    }, obj)
}
export default getObject
// END