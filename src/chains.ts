import { mainnet, goerli, polygon, polygonMumbai, gnosis, Chain } from '@wagmi/core/chains';

export const gnosisChiado: Chain = {
  id: 10200,
  network: 'chiado',
  name: 'Chiado',
  nativeCurrency: { name: 'Chiado xDai', symbol: 'xDAI', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.chiadochain.net'],
    },
    public: {
      http: ['https://rpc.chiadochain.net'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Blockscout',
      url: 'https://blockscout.chiadochain.net',
    },
    default: {
      name: 'Blockscout',
      url: 'https://blockscout.chiadochain.net',
    },
  },
  testnet: true,
};

export const chains = {
  MAINNET: mainnet.id,
  GOERLI: goerli.id,
  POLYGON_MAINNET: polygon.id,
  POLYGON_MUMBAI: polygonMumbai.id,
  GNOSIS_MAINNET: gnosis.id,
  GNOSIS_CHIADO: gnosisChiado.id,
};

export const blockExplorers = {
  [chains.MAINNET]: mainnet.blockExplorers?.default.url,
  [chains.GOERLI]: goerli.blockExplorers?.default.url,
  [chains.POLYGON_MAINNET]: polygon.blockExplorers?.default.url,
  [chains.POLYGON_MUMBAI]: polygonMumbai.blockExplorers?.default.url,
  [chains.GNOSIS_MAINNET]: gnosis.blockExplorers?.default.url,
  [chains.GNOSIS_CHIADO]: gnosisChiado.blockExplorers?.default.url,
};
