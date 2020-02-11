const num_filter = require('./sub_functions/number');
const string_filter = require('./sub_functions/string');
const date_filter = require('./sub_functions/date');

//--------------------- Number filters --------------------------->

const number_filters = (input, operation, data) => {

    var result;

    switch (operation) {

        case 'eq':
            result = num_filter.eq(input, data);
            break;
        case 'lt':
            result = num_filter.lt(input, data);
            break;
        case 'lte':
            result = num_filter.lte(input, data);
            break;
        case 'gt':
            result = num_filter.gt(input, data);
            break;
        case 'gte':
            result = num_filter.gte(input, data);
            break;
        case 'known':
            result = num_filter.known(input, data);
            break;
        case 'unknown':
            result = num_filter.unknown(input, data);
            break;
        default:
            result = "Error: Operation type invalid."
    }

    return result;
}

//--------------------- String filters --------------------------->

const string_filters = (input, operation, data) => {

    var result;

    switch (operation) {

        case 'eq':
            result = string_filter.eq(input, data);
            break;
        case 'ce':
            result = string_filter.contain_exactly(input, data);
            break;
        case 'nce':
            result = string_filter.not_contain_exactly(input, data);
            break;
        case 'known':
            result = string_filter.is_known(input, data);
            break;
        case 'unknown':
            result = string_filter.is_unknown(input, data);
            break;
        case 'anyof':
            result = string_filter.is_any_of(input, data);
            break;
        case 'noneof':
            result = string_filter.is_none_of(input, data);
            break;
        default:
            result = "Error: Operation type invalid."
    }

    return result;
}


//--------------------- Date filters --------------------------->

const date_filters = (input, operation, data) => {

    var result;

    switch (operation) {

        case 'eq':
            result = date_filter.eq(input, data);
            break;
        case 'before':
            result = date_filter.before(input, data);
            break;
        case 'after':
            result = date_filter.after(input, data);
            break;
        case 'known':
            result = date_filter.known(input, data);
            break;
        case 'unknown':
            result = date_filter.unknown(input, data);
            break;
        case 'between':
            result = date_filter.between(input, data);
            break;
        default:
            result = "Error: Operation type invalid."
    }

    return result;
}

module.exports = {
    number_filters,
    string_filters,
    date_filters
}