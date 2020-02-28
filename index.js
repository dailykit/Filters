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
    } else if (typeof obj.value === "boolean") {
        return filters.boolean_filters(obj, operation, data);
    } else if (obj.key && !obj.value) {
        return filters.known_unknown_filters(obj, operation, data);
    } else {
        return "Error: Unknown type.";
    }
}

module.exports = {
    filter
}