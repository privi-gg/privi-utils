export const getBlockExplorerUrl = (data: string, type: string = 'tx', explorerUrl: string) => {
  return `${explorerUrl}/${type}/${data}`;
};

export const getBlockExplorerTxUrl = (txHash: string, explorerUrl: string) =>
  getBlockExplorerUrl(txHash, 'tx', explorerUrl);

export const getBlockExplorerAddressUrl = (address: string, explorerUrl: string) =>
  getBlockExplorerUrl(address, 'address', explorerUrl);

export const getBlockExplorerBlockUrl = (blockNumber: number, explorerUrl: string) =>
  getBlockExplorerUrl(blockNumber.toString(), 'block', explorerUrl);
