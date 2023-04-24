const nxPreset = require("@nrwl/jest/preset").default;
nxPreset.testRunner = 'jasmine2';

module.exports = { ...nxPreset };
