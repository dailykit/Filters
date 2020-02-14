const number_filters = require('../../sub_functions/number');
const data = require('../data/seed.data.json');
const {
    expect,
    assert
} = require('chai');

describe("number filters testing", () => {

    context("Equality", () => {

        it("should successfully check for equality", (done) => {

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

        it("should successfully check for less than", (done) => {

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

        it("should successfully check for less than or equal", (done) => {

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

        it("should successfully check for greater than", (done) => {

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

        it("should successfully check for greater than or equal", (done) => {

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

        it("should successfully check for between", (done) => {

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

        it("should successfully check for known key", (done) => {

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

        it("should successfully check for unknown key", (done) => {

            let result = number_filters.unknown({
                key: "age"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(0);
            done();
        });
    });
});