const {
    number_filters,
    string_filters,
    date_filters
} = require('../../check');

const {
    expect
} = require('chai');
const data = require('../data/seed.data.json');

describe("Check operation", () => {

    context("Number Filter", () => {

        it("should check for equality", (done) => {

            let result = number_filters({
                key: 'age',
                value: 21
            }, 'eq', data);
            expect(result).to.exist;
            done();
        });

        it("should check for less than", (done) => {

            let result = number_filters({
                key: "age",
                value: 24
            }, 'lt', data);
            expect(result).to.exist;
            done();
        });

        it("should check for less than or equal", (done) => {

            let result = number_filters({
                key: "age",
                value: 24
            }, 'lte', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(6);
            done();
        });

        it("should check for greater than", (done) => {

            let result = number_filters({
                key: "age",
                value: 24
            }, 'gt', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(4);
            done();
        });

        it("should check for greater than or equal", (done) => {

            let result = number_filters({
                key: "age",
                value: 24
            }, 'gte', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(6);
            done();
        });

        it("should check for between", (done) => {

            let result = number_filters({
                key: "age",
                min: 24,
                max: 29
            }, 'between', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(2);
            done();
        });

        it("should check for known key", (done) => {

            let result = number_filters({
                key: "age"
            }, 'known', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(10);
            done();
        });

        it("should check for unknown key", (done) => {

            let result = number_filters({
                key: "age"
            }, 'unknown', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(0);
            done();
        });

        it("should return error for invalid operation", (done) => {

            let result = number_filters({
                key: "age"
            }, 'xyz', data);

            expect(result).to.be.equal('Error: Operation type invalid.');
            done();
        });
    });

    context("String Filter", () => {

        it("should check for equality", (done) => {

            let result = string_filters({
                key: "email",
                value: "spamment9@phpbb.com"
            }, 'eq', data);

            expect(result).to.have.length(1);
            done();
        });

        it("should check for contain exactly", (done) => {

            let result = string_filters({
                key: "email",
                value: "@jimdo.com"
            }, 'ce', data);

            expect(result).to.have.length(2);
            done();
        });

        it("should check for not contain exactly", (done) => {

            let result = string_filters({
                key: "email",
                value: "@jimdo.com"
            }, 'nce', data);

            expect(result).to.have.length(8);
            done();
        });

        it("should check for known", (done) => {

            let result = string_filters({
                key: "hobby"
            }, 'known', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(9);
            done();
        });

        it("should check for unknown", (done) => {

            let result = string_filters({
                key: "hobby"
            }, 'unknown', data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            done();
        });

        it("should check for any of", (done) => {

            let result = string_filters({
                key: "hobby",
                value: ["Painting", "Sketching"]
            }, 'anyof', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(5);
            done();
        });

        it("should check for none of", (done) => {

            let result = string_filters({
                key: "hobby",
                value: ["Painting", "Sketching"]
            }, 'noneof', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(4);
            done();
        });

        it("should return error for invalid operation", (done) => {

            let result = string_filters({
                key: "first_name"
            }, 'xyz', data);

            expect(result).to.be.equal('Error: Operation type invalid.');
            done();
        });
    });

    context("Date Filter", () => {

        it("should check for equality", (done) => {

            let result = date_filters({
                key: "date",
                value: "2020-10-21T07:45:44.661+00:00"
            }, 'eq', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            done();
        });

        it("should check for before", (done) => {

            let result = date_filters({
                key: "date",
                value: "2020-04-21T07:45:44.661+00:00"
            }, 'before', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(3);
            done();
        });

        it("should check for after", (done) => {

            let result = date_filters({
                key: "date",
                value: "2020-08-21T07:45:44.661+00:00"
            }, 'after', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(2);
            done();
        });

        it("should check for known", (done) => {

            let result = date_filters({
                key: "date"
            }, 'known', data);

            expect(result).to.exist;
            expect(result).to.have.length(10);
            done();
        });

        it("should check for unknown", (done) => {

            let result = date_filters({
                key: "date"
            }, 'unknown', data);

            expect(result).to.exist;
            expect(result).to.have.length(0);
            done();
        });

        it("should check for between", (done) => {

            let result = date_filters({
                key: "date",
                min: "2020-01-21T07:45:44.661+00:00",
                max: "2020-03-21T07:45:44.661+00:00"
            }, 'between', data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            done();
        });

        it("should return error for invalid operation", (done) => {

            let result = date_filters({
                key: "date"
            }, 'xyz', data);

            expect(result).to.be.equal('Error: Operation type invalid.');
            done();
        });
    });
});