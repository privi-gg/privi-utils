import { ethers } from 'ethers';
import { type BigNumberish } from 'ethers';
//@ts-ignore
import { poseidon } from 'xcircomlib';

const { BigNumber } = ethers;

export const poseidonHash = (...inputs: BigNumberish[]) => {
  const hexInputs = inputs.map((input) => BigNumber.from(input).toHexString());
  BigNumber.from(poseidon([...hexInputs])).toHexString();
};
