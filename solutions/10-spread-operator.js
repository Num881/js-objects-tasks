// BEGIN
const returnedCreatedObj = (name, { state = 'moderating', createdAt = Date.now(), ...rest } = {}) => {
    return {
        name, state, createdAt, ...rest,
    };
};
export default returnedCreatedObj;
// END