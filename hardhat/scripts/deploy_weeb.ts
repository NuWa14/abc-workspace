import { ethers } from "hardhat";

async function main() {
  const Weeb = await ethers.getContractFactory("Weeb");
  const contract = await Weeb.deploy(1000000);
  await contract.waitForDeployment();
  console.log(
    `deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});