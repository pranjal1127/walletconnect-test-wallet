import walletconnectLogo from "./assets/walletconnect-logo.png";
import { SUPPORTED_CHAINS, ERASWAP_CHAIN_ID, ETH_STANDARD_PATH } from "../constants";
import { IAppConfig } from "../helpers/types";
import { getRpcEngine } from "../engines";
import { getLocal } from "@walletconnect/utils";

const appConfig: IAppConfig = {
  name: "WalletConnect",
  logo: walletconnectLogo,
  chainId: ERASWAP_CHAIN_ID,
  derivationPath: ETH_STANDARD_PATH,
  numberOfAccounts: getLocal("PRIVATE_KEY")?.length,
  colors: {
    defaultColor: "12, 12, 13",
    backgroundColor: "40, 44, 52",
  },
  chains: SUPPORTED_CHAINS,
  styleOpts: {
    showPasteUri: true,
    showVersion: true,
  },
  rpcEngine: getRpcEngine(),
  events: {
    init: (state, setState) => Promise.resolve(),
    update: (state, setState) => Promise.resolve(),
  },
};

export function getAppConfig(): IAppConfig {
  return appConfig;
}
