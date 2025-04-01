// BEGIN
const cloneShallow = (obj) =>{
    let result = {};

    for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
            result[key] = obj[key]
        }
    }
    return result;
}
export default cloneShallow;
// END
