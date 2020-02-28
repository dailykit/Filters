const known_unknown_filters = require('../../sub_functions/generic_known_unknown');
const {
    expect
} = require('chai');

const data = require('../data/seed.data.json');

describe("Known and Unknown Filters", () => {

    it("should check for known key", (done) => {

        let result = known_unknown_filters.known({
            key: "hobby"
        }, data);

        expect(result).to.exist;
        expect(result.length).to.be.equal(9);
        done();
    });

    it("should check for unknown key", (done) => {

        let result = known_unknown_filters.unknown({
            key: "hobby"
        }, data);
        expect(result).to.exist;
        expect(result.length).to.be.equal(1);
        done();
    });
});