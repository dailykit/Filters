const num_filter = require('./sub_functions/number');
const string_filter = require('./sub_functions/string');
const date_filter = require('./sub_functions/date');

const {
    data
} = require('./data/data');

//--------------------- Number filters --------------------------->

const equal = num_filter.eq({
    key: 'age',
    value: "21"
}, data);

const less_than = num_filter.lt({
    key: "age",
    value: 30
}, data);

const less_than_equal = num_filter.lte({
    key: "age",
    value: 20
}, data);

const greater_than = num_filter.gt({
    key: "age",
    value: 20
}, data);

const greater_than_equal = num_filter.gte({
    key: "age",
    value: 25
}, data);

const between = num_filter.btw({
    key: 'age',
    min: 16,
    max: 21
}, data);

const known = num_filter.known({
    key: 'age'
}, data);

const unknown = num_filter.unknown({
    key: 'age'
}, data);

//--------------------- String filters --------------------------->

const str_eq = string_filter.eq({
    key: "h1",
    value: "Developing"
}, data);

const str_contain_exactly = string_filter.contain_exactly({
    key: "location",
    value: "Mia"
}, data);

const not_str_contain_exactly = string_filter.not_contain_exactly({
    key: "location",
    value: "Mia"
}, data);

const is_known = string_filter.is_known({
    key: "coding"
}, data);

const is_unknown = string_filter.is_unknown({
    key: "coding"
}, data);

const is_any_of = string_filter.is_any_of({
    key: "language",
    value: ["Spanish", "English"]
}, data);

const is_none_of = string_filter.is_none_of({
    key: "h1",
    value: ["Coding", "Developing"]
}, data);


//--------------------- Date filters --------------------------->

const date_is_equal = date_filter.eq({
    key: "date",
    value: "2020-02-21T07:45:44.661+00:00"
}, data);

const date_is_before = date_filter.before({
    key: "date",
    value: "2020-02-27T07:45:44.661+00:00"
}, data);

const date_is_after = date_filter.after({
    key: "date",
    value: "2020-02-20T07:45:44.661+00:00"
}, data);

const date_is_between = date_filter.between({
    key: "date",
    min: "2020-02-17T07:45:44.661+00:00",
    max: "2020-02-27T07:45:44.661+00:00"
}, data);

const date_is_known = date_filter.known({
    key: "date"
}, data);

const date_is_unknown = date_filter.unknown({
    key: "date"
}, data);

console.log(date_is_equal);