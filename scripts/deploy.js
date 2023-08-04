const hre = require('hardhat');

async function main() {
  const NFTMarketplace = await hre.ethers.deployContract('NFTMarketplace');

  await NFTMarketplace.waitForDeployment();

  console.log(`NFTMarketplace contract deployed to ${NFTMarketplace.target}`);

  await sleep(45000);

  await hre.run('verfiy:verify', {
    address: NFTMarketplace.target,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
