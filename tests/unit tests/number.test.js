const number_filters = require('../../sub_functions/number');
const data = require('../data/seed.data.json');
const {
    expect,
    assert
} = require('chai');

describe("Number Filters", () => {

    context("Equality", () => {

        it("should successfully check for equality - main level", (done) => {

            let result = number_filters.eq({
                key: 'id',
                value: 1
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            result.forEach(obj => {
                assert.deepNestedPropertyVal(obj, "id", 1);
            });
            done();
        });

        it("should successfully check for equality - deep level", (done) => {

            let result = number_filters.eq({
                key: 'age',
                value: 21
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(2);
            result.forEach(obj => {
                assert.deepNestedPropertyVal(obj, "others.age", 21);
            });
            done();
        });
    });

    context("Less Than", () => {

        it("should successfully check for less than - main level", (done) => {

            let result = number_filters.lt({
                key: 'id',
                value: 5
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(4);
            done();
        });

        it("should successfully check for less than - deep level", (done) => {

            let result = number_filters.lt({
                key: "age",
                value: 24
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(4);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('age').to.be.lessThan(24);
            });
            done();
        });
    });

    context("Less Than or Equal", () => {

        it("should successfully check for less than or equal - main level", (done) => {

            let result = number_filters.lte({
                key: 'id',
                value: 5
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(5);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('id').to.be.lte(5);
            });
            done();
        });

        it("should successfully check for less than or equal - deep level", (done) => {

            let result = number_filters.lte({
                key: "age",
                value: 24
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(6);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('age').to.be.lte(24);
            });
            done();
        });
    });

    context("Greater Than", () => {

        it("should successfully check for greater than - main level", (done) => {

            let result = number_filters.gt({
                key: 'id',
                value: 5
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(5);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('id').to.be.gt(5);
            });
            done();
        });

        it("should successfully check for greater than - deep level", (done) => {

            let result = number_filters.gt({
                key: "age",
                value: 24
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(4);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('age').to.be.greaterThan(24);
            });
            done();
        });
    });

    context("Greater Than or equal", () => {

        it("should successfully check for greater than or equal - main level", (done) => {

            let result = number_filters.gte({
                key: 'id',
                value: 5
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(6);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('id').to.be.gte(5);
            });
            done();
        });

        it("should successfully check for greater than or equal - deep level", (done) => {

            let result = number_filters.gte({
                key: "age",
                value: 24
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(6);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('age').to.be.gte(24);
            });
            done();
        });
    });

    context("Between", () => {

        it("should successfully check for between - main level", (done) => {

            let result = number_filters.between({
                key: 'id',
                min: 5,
                max: 7
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('id').to.be.gt(5).to.be.lt(7);
            });
            done();
        });

        it("should successfully check for between - deep level", (done) => {

            let result = number_filters.between({
                key: "age",
                min: 24,
                max: 29
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(2);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('age').to.be.gt(24).to.be.lessThan(29);
            });
            done();
        });
    });

    context("Known", () => {

        it("should successfully check for known key - main level", (done) => {

            let result = number_filters.known({
                key: 'id'
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(10);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('id');
            });
            done();
        });

        it("should successfully check for known key - deep level", (done) => {

            let result = number_filters.known({
                key: "age"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(10);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('age');
            });
            done();
        });
    });

    context("Unknown", () => {

        it("should successfully check for unknown key - main level", (done) => {

            let result = number_filters.unknown({
                key: 'id'
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(0);
            done();
        });

        it("should successfully check for unknown key - deep level", (done) => {

            let result = number_filters.unknown({
                key: "age"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(0);
            done();
        });
    });
});