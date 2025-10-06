const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports =  buildModule("EcoCleansModule", (m) => {

  const ecocleans = m.contract("EcoCleans");

  return { ecocleans };
});
