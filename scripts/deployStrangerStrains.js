
const hre = require("hardhat");
const tokenName = "StrangerStrains";
const tokenSymbol = "STRN";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const StrangerStrains = await hre.ethers.getContractFactory("StrangerStrains");
  const strangerStrains = await StrangerStrains.deploy(tokenName, tokenSymbol);


  await strangerStrains.deployed();

  console.log(
    `StrangerStrains with 1 ETH and unlock timestamp ${unlockTime} deployed to ${strangerStrains.address}`
  );
  console.log("Transaction hash:", strangerStrains.deployTransaction.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
