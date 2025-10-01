require("@nomicfoundation/hardhat-toolbox");
const {vars} = require("hardhat/config")

const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");
const u2u = vars.get("u2u_PRIVATE_KEY")


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork : "nebulas",
  networks: {
    nebulas: {
      type : 'http',
      url: 'https://rpc-nebulas-testnet.uniultra.xyz/',
      accounts: [u2u],
    }
  },
  etherscan: {
    apiKey: {
      nebulas: ETHERSCAN_API_KEY, 
    },
    customChains: [
      {
        network: "nebulas",
        chainId: 2484,
        urls: {
          apiURL: "https://testnet.u2uscan.xyz/api",
          browserURL: "https://testnet.u2uscan.xyz"
        }
      },
    ]
  }
  
};
