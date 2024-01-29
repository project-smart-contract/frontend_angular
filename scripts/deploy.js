const hre = require("hardhat");

async function main() {
  // Get the ContractFactory for your contract
  const WalletFactory = await hre.ethers.getContractFactory("Wallet");

  // Deploy the contract
  const Wallet = await WalletFactory.deploy();

  // Wait for the deployment to be mined
  await Wallet.deployed();

  console.log(`Wallet deployed to: ${Wallet.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });