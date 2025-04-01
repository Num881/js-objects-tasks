import _ from 'lodash';

// BEGIN
const normalize = (lesson) => {
    lesson.name = _.capitalize(lesson.name);
    lesson.description = lesson.description.toLowerCase();

}

export default normalize;

// END