import _ from 'lodash';

// BEGIN
const mergeObj = (obj, keys, source) =>{
    if (keys.length === 0){
        for (const key in source){
            if (Object.hasOwn(source, key)){
                obj[key] = source[key];
            }
        }
    }else {
        const picked = _.pick(source, keys);
        for (const key in picked) {
            if (Object.hasOwn(picked, key)) {
                obj[key] = picked[key];
            }
        }
    }
    return obj;
}
export default mergeObj
// END