import { Wallet } from "zksync-ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for a Zksync contract`);

  // Initialize the wallet.
  const wallet = new Wallet("YOUR_PRIVATE_KEY");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("TestZK"); //Change the name of the contract

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  const zkContract = await deployer.deploy(artifact);

  const contractAddress = zkContract.target;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
