import { BytesLike, ethers, type BigNumberish } from 'ethers';
//@ts-ignore
import { poseidon } from 'xcircomlib';
//@ts-ignore
import genContract from 'xcircomlib/src/poseidon_gencontract.js';

const { BigNumber } = ethers;

export const poseidonHash = (...inputs: BigNumberish[]): string => {
  const hexInputs = inputs.map((input) => BigNumber.from(input).toHexString());
  return BigNumber.from(poseidon([...hexInputs])).toHexString();
};

export const poseidonArtifact = {
  abi: genContract.generateABI(2) as any[],
  bytecode: genContract.createCode(2) as BytesLike,
};
