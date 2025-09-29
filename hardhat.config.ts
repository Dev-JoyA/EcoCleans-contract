import type { HardhatUserConfig} from "hardhat/config";
import hardhatVerify from "@nomicfoundation/hardhat-verify";
import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { configVariable } from "hardhat/config";


const config: HardhatUserConfig = {
  plugins: [hardhatToolboxMochaEthersPlugin,
  hardhatVerify,
  ],
    solidity: {
    profiles: {
      default: {
        version: "0.8.28"
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    }
  },
  
  networks: {
    
  }
};

export default config;
