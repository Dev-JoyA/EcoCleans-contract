const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports =  buildModule("PicknGetModule", (m) => {

  const picknget = m.contract("PicknGet");

  return { picknget };
});
