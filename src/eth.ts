import { ethers } from 'ethers';
import { type BigNumberish } from 'ethers';
import { NestedArrayOf, NestedObjectOf } from './types';
const { BigNumber, utils } = ethers;

export const BN = BigNumber.from;
export const parseUnits = utils.parseUnits;
export const parseEther = utils.parseEther;
export const formatUnits = utils.formatUnits;
export const formatEther = utils.formatEther;
export const toChecksumAddress = utils.getAddress;

export const equals = (value: BigNumberish, otherValue: BigNumberish) => {
  return BN(value).eq(otherValue);
};

export const toFixedHex = (n: BigNumberish, nBytes: number = 32) => {
  const hex = BN(n).toHexString();

  // Handle negative numbers
  if (hex[0] === '-') {
    return '-' + utils.hexZeroPad(hex.slice(1), nBytes);
  }

  return utils.hexZeroPad(hex, nBytes);
};

export const randomBN = (nBytes: number = 32) => BN(utils.randomBytes(nBytes));

export const randomHex = (nBytes: number = 32) => {
  return utils.hexlify(utils.randomBytes(nBytes));
};

export const stringifyBNs = (
  v: BigNumberish | NestedArrayOf<BigNumberish> | NestedObjectOf<BigNumberish>,
): string | NestedArrayOf<string> | NestedObjectOf<string> => {
  if (BigNumber.isBigNumber(v)) {
    return v.toString();
  } else if (Array.isArray(v)) {
    return v.map(stringifyBNs);
  } else if (typeof v === 'object') {
    const res: NestedObjectOf<string> = {};
    for (let key in v) {
      res[key] = stringifyBNs(v[key]);
    }
    return res;
  }
  return BN(v).toString();
};

export const hexifyBNs = (
  v: BigNumberish | NestedArrayOf<BigNumberish> | NestedObjectOf<BigNumberish>,
): string | NestedArrayOf<string> | NestedObjectOf<string> => {
  if (BigNumber.isBigNumber(v)) {
    return v.toHexString();
  } else if (Array.isArray(v)) {
    return v.map(hexifyBNs);
  } else if (typeof v === 'object') {
    const res: NestedObjectOf<string> = {};
    for (let key in v) {
      res[key] = hexifyBNs(v[key]);
    }
    return res;
  }
  return BN(v).toHexString();
};

export const isValidAddress = (address?: string) => {
  if (!address) return false;
  return utils.isAddress(address);
};
