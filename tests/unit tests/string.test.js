const string_filters = require('../../sub_functions/string');
const data = require('../data/seed.data.json');
const {
    expect
} = require('chai');

describe("String Filters", () => {

    context("Equality", () => {

        it("should check for equality", (done) => {

            let result = string_filters.eq({
                key: "email",
                value: "spamment9@phpbb.com"
            }, data);

            expect(result).to.have.length(1);
            expect(result[0]).to.haveOwnProperty('email').to.be.equal('spamment9@phpbb.com');
            done();
        });
    });

    context("Contain Exactly", () => {

        it("should find all values containing specified value", (done) => {

            let result = string_filters.contain_exactly({
                key: "email",
                value: "@jimdo.com"
            }, data);

            expect(result).to.have.length(2);
            expect(result[0]).to.haveOwnProperty('email').to.contain('@jimdo.com');
            done();
        });
    });

    context("Not Contain Exactly", () => {

        it("should find all values not containing specified value", (done) => {

            let result = string_filters.not_contain_exactly({
                key: "email",
                value: "@jimdo.com"
            }, data);

            expect(result).to.have.length(8);
            expect(result[0]).to.haveOwnProperty('email').to.not.contain('@jimdo.com');
            done();
        });
    });

    context("Known", () => {

        it("should successfully check for known key", (done) => {

            let result = string_filters.known({
                key: "hobby"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(9);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('extra').to.haveOwnProperty('hobby');
            });
            done();
        });
    });

    context("Unknown", () => {

        it("should successfully check for unknown key", (done) => {

            let result = string_filters.unknown({
                key: "hobby"
            }, data);
            expect(result).to.exist;
            expect(result.length).to.be.equal(1);
            done();
        });
    });

    context("Is Any Of", () => {

        it("should successfully check for key having a value present in an array of values", (done) => {

            let result = string_filters.is_any_of({
                key: "hobby",
                value: ["Painting", "Sketching"]
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(5);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('extra').to.haveOwnProperty('hobby').to.be.oneOf(["Painting", "Sketching"]);
            });
            done();
        });
    });

    context("Is None Of", () => {

        it("should successfully check for key having a value not present in an array of values", (done) => {

            let result = string_filters.is_none_of({
                key: "hobby",
                value: ["Painting", "Sketching"]
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(4);
            result.forEach(obj => {
                expect(obj).to.haveOwnProperty('others').to.haveOwnProperty('extra').to.haveOwnProperty('hobby').to.be.oneOf(["Coding", "Cooking", "Reading"]);
            });
            done();
        });
    });
});