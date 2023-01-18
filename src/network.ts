import { blockExplorers } from './chains';

export const getBlockExplorerUrl = (
  data: string,
  chainId: number,
  type: string = 'tx',
  explorerUrl?: string,
) => {
  const baseUrl = explorerUrl || blockExplorers[chainId];
  return `${baseUrl}/${type}/${data}`;
};

export const getBlockExplorerTxUrl = (txHash: string, chainId: number, explorerUrl?: string) =>
  getBlockExplorerUrl(txHash, chainId, 'tx', explorerUrl);

export const getBlockExplorerAddressUrl = (
  address: string,
  chainId: number,
  explorerUrl?: string,
) => getBlockExplorerUrl(address, chainId, 'address', explorerUrl);

export const getBlockExplorerBlockUrl = (
  blockNumber: number,
  chainId: number,
  explorerUrl?: string,
) => getBlockExplorerUrl(blockNumber.toString(), chainId, 'block', explorerUrl);
