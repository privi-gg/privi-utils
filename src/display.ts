import { BigNumberish } from 'ethers';
import { formatUnits } from './eth';

export const formatUnitsRounded = (value: BigNumberish, decimals: number, roundTo: number = 4) => {
  const formatted = formatUnits(value, decimals);
  return Number(formatted).toFixed(roundTo);
};

export const formatEtherRounded = (value: BigNumberish, roundTo: number = 4) => {
  return formatUnitsRounded(value, 18, roundTo);
};

export const abbreviateHex = (hex: string, length: number = 9) => {
  if (!hex) return '';
  const startLen = Math.ceil(length / 2) + 1;
  const endLen = Math.floor(length / 2) - 1;

  return hex.slice(0, startLen) + '...' + hex.slice(-endLen);
};

export const displayBalance = (value: BigNumberish, decimals: number) => {
  return formatUnitsRounded(value, decimals, 3);
};

export const displayAddress = (address: string) => {
  return address.slice(0, 6) + '...' + address.slice(-4);
};
