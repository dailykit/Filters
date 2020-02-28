const date_filter = require('../../sub_functions/date');
const data = require('../data/seed.data.json');
const {
    expect
} = require('chai');

describe("Date Filters", () => {

    context("Equality", () => {

        it("should check for keys having values equal to the specified value", (done) => {

            let result = date_filter.eq({
                key: "date",
                value: "2020-10-21T07:45:44.661+00:00"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            expect(result[0]).to.haveOwnProperty('date').to.be.equal('2020-10-21T07:45:44.661+00:00');
            done();
        });
    });

    context("Before", () => {

        it("should find all dates falling before the specified date", (done) => {

            let result = date_filter.before({
                key: "date",
                value: "2020-04-21T07:45:44.661+00:00"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(3);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('date');
            });
            done();
        });
    });

    context("After", () => {

        it("should find all dates falling after the specified date", (done) => {

            let result = date_filter.after({
                key: "date",
                value: "2020-08-21T07:45:44.661+00:00"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(2);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('date');
            });
            done();
        });
    });

    context("Between", () => {

        it("should find all dates falling between the specified dates", (done) => {

            let result = date_filter.between({
                key: "date",
                min: "2020-01-21T07:45:44.661+00:00",
                max: "2020-03-21T07:45:44.661+00:00"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('date').to.be.equal('2020-02-11T07:45:44.661+00:00');
            });
            done();
        });
    });
});