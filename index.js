const filters = require('./check');
const {
    data
} = require('./data/data');

const filter = (obj, operation, data) => {

    if (typeof obj.value === 'number') {
        return filters.number_filters(obj, operation, data);
    } else if (typeof obj.value === "string" && new Date(obj.value) == 'Invalid Date') {
        return filters.string_filters(obj, operation, data);
    } else if (typeof obj.value === "string" && new Date(obj.value) != 'Invalid Date') {
        return filters.date_filters(obj, operation, data);
    } else {
        return [];
    }
}

console.log(filter({
    key: 'date',
    value: '2020-02-21T07:45:44.661+00:00'
}, 'before', data));