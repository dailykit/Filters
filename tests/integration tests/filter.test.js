const {
    filter
} = require('../../index');

const {
    expect,
    assert
} = require('chai');

const data = require('../data/seed.data.json');

describe("Filter", () => {

    context("Number", () => {

        it("should type check for number filters", (done) => {
            let result = filter({
                key: 'age',
                value: 18
            }, 'eq', data);

            expect(result).to.exist;
            assert.deepNestedPropertyVal(result[0], "others.age", 18);
            done();
        });
    });

    context("String", () => {

        it("should type check for string filters", (done) => {
            let result = filter({
                key: 'first_name',
                value: "Selestina"
            }, 'eq', data);

            expect(result).to.exist;
            assert.deepNestedPropertyVal(result[0], "first_name", "Selestina");
            done();
        });
    });

    context("Date", () => {

        it("should type check for string filters", (done) => {
            let result = filter({
                key: 'date',
                value: "2020-02-11T07:45:44.661+00:00"
            }, 'eq', data);

            expect(result).to.exist;
            assert.deepNestedPropertyVal(result[0], "date", "2020-02-11T07:45:44.661+00:00");
            done();
        });
    });

    context("Boolean", () => {

        it("should type check for boolean filters", (done) => {
            let result = filter({
                key: 'valid',
                value: true
            }, 'eq', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(4);
            done();
        });
    });

    context("Generic Known Unknown", () => {

        it("should type check for generic filters", (done) => {
            let result = filter({
                key: 'valid'
            }, 'unknown', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            done();
        });
    });
});