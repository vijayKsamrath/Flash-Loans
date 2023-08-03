// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.

// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const flashLoanExample = await hre.ethers.deployContract("FlashLoanExample",["0xa97684ead0e402dc232d5a977953df7ecbab3cdb"]);

  await flashLoanExample.waitForDeployment();

  console.log("FlashLoanExample deployed to:", flashLoanExample.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});