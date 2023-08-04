require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: '.env' });
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.19',
  networks: {
    // The name `sepolia` has no relevance here - you can name it whatever you want
    sepolia: {
      url: process.env.QUICKNODE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
