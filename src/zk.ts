import { ethers } from 'ethers';
import { type BigNumberish } from 'ethers';
//@ts-ignore
import { poseidon } from 'xcircomlib';

const { BigNumber } = ethers;

export const poseidonHash = (...inputs: BigNumberish[]): string => {
  const hexInputs = inputs.map((input) => BigNumber.from(input).toHexString());
  return BigNumber.from(poseidon([...hexInputs])).toHexString();
};
