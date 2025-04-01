import _ from 'lodash';

// BEGIN
const countWords = (sentence) =>{
    if (!sentence)
        return {};

    return _.words(sentence).reduce((acc, word) => {
        const wordsToLower = word.toLowerCase();
        acc[wordsToLower] = (acc[wordsToLower] || 0) + 1;
        return acc;
    }, {})
}
export default countWords
// END