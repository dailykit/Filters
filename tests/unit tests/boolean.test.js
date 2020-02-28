const boolean_filter = require('../../sub_functions/boolean');
const data = require('../data/seed.data.json');

const {
    expect,
    assert
} = require('chai');

describe("Boolean Filter Tests", () => {

    context("Equality", () => {

        it("should check for equality: boolean true", (done) => {

            let result = boolean_filter.eq({
                key: "valid",
                value: true
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(4);
            result.forEach(obj => assert.deepNestedPropertyVal(obj, 'others.extra.valid', true));
            done();
        });

        it("should check for equality: boolean false", (done) => {

            let result = boolean_filter.eq({
                key: "valid",
                value: false
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(5);
            result.forEach(obj => assert.deepNestedPropertyVal(obj, 'others.extra.valid', false));
            done();
        });

        it("should return empty when no value sent.", (done) => {

            let result = boolean_filter.eq({
                key: "valid"
            }, data);

            expect(result).to.exist;
            expect(result.length).to.be.equal(0);
            done();
        });
    });
});