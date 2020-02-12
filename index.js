const filters = require('./check');
const {
    data
} = require('./data/data');

const filter = (obj, operation, data) => {

    if (typeof obj.value === 'number' || (typeof obj.min === "number" && typeof obj.max === "number")) {
        return filters.number_filters(obj, operation, data);
    } else if (typeof obj.value === "string" && new Date(obj.value) == 'Invalid Date') {
        return filters.string_filters(obj, operation, data);
    } else if ((typeof obj.value === "string" || (typeof obj.min === "string" && typeof obj.max === "string")) &&
        (new Date(obj.value) != "Invalid Date" || new Date(obj.min) != "Invalid Date")) {
        return filters.date_filters(obj, operation, data);
    } else {
        return "Error: Unknown type.";
    }
}

console.log(filter({
    key: 'date',
    min: "2020-01-21T07:45:44.661+00:00",
    max: "2020-03-21T07:45:44.661+00:00"
}, 'between', [{
    age: 27,
    name: 'Mark',
    date: "2020-01-21T07:45:44.661+00:00"
}, {
    age: 25,
    name: 'Henry',
    date: "2020-02-21T07:45:44.661+00:00"
}, {
    age: 20,
    name: 'John',
    date: "2020-03-21T07:45:44.661+00:00"
}]));