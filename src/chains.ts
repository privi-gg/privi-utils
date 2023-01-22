import { mainnet, goerli, polygon, polygonMumbai, gnosis, gnosisChiado } from '@wagmi/chains';

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
