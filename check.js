const num_filter = require('./sub_functions/number');
const string_filter = require('./sub_functions/string');
const date_filter = require('./sub_functions/date');
const boolean_filter = require('./sub_functions/boolean');
const generic_known_unknown = require('./sub_functions/generic_known_unknown');

//--------------------- Number filters --------------------------->

const number_filters = (input, operation, data) => {

    switch (operation) {

        case 'eq':
            return num_filter.eq(input, data);
        case 'lt':
            return num_filter.lt(input, data);
        case 'lte':
            return num_filter.lte(input, data);
        case 'gt':
            return num_filter.gt(input, data);
        case 'gte':
            return num_filter.gte(input, data);
        case 'between':
            return num_filter.between(input, data);
        default:
            return "Error: Operation type invalid."
    }
}

//--------------------- String filters --------------------------->

const string_filters = (input, operation, data) => {

    switch (operation) {

        case 'eq':
            return string_filter.eq(input, data);
        case 'ce':
            return string_filter.contain_exactly(input, data);
        case 'nce':
            return string_filter.not_contain_exactly(input, data);
        case 'anyof':
            return string_filter.is_any_of(input, data);
        case 'noneof':
            return string_filter.is_none_of(input, data);
        default:
            return "Error: Operation type invalid."
    }
}


//--------------------- Date filters --------------------------->

const date_filters = (input, operation, data) => {

    switch (operation) {

        case 'eq':
            return date_filter.eq(input, data);
        case 'before':
            return date_filter.before(input, data);
        case 'after':
            return date_filter.after(input, data);
        case 'between':
            return date_filter.between(input, data);
        default:
            return "Error: Operation type invalid."
    }
}

//--------------------- Boolean filters --------------------------->

const boolean_filters = (input, operation, data) => {

    switch (operation) {
        case 'eq':
            return boolean_filter.eq(input, data);
        default:
            return "Error: Operation type invalid."
    }
}

//--------------------- Generic known and unknown filters --------------------------->

const known_unknown_filters = (input, operation, data) => {

    switch (operation) {
        case 'known':
            return generic_known_unknown.known(input, data);
        case 'unknown':
            return generic_known_unknown.unknown(input, data);
        default:
            return "Error: Operation type invalid."
    }
}

module.exports = {
    number_filters,
    string_filters,
    date_filters,
    boolean_filters,
    known_unknown_filters
}