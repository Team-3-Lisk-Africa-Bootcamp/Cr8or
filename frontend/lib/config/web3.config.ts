import { liskSepolia } from "viem/chains";
import { getDefaultConfig } from "connectkit";
import { cookieStorage, createConfig, createStorage, http, injected } from "wagmi";

import { siteConfig } from "./site.config";

export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

if (!projectId) {
  console.error("NEXT_PUBLIC_REOWN_PROJECT_ID is not defined in .env.local");
  throw new Error("Web3 configuration failed: Missing project ID");
}

export const rpcUrl = "https://rpc.sepolia-api.lisk.com";

// Create a custom storage implementation that prevents auto-connection
const noAutoConnectStorage = createStorage({
  storage: cookieStorage,
  key: "wagmi.manual-connect-only",
});

export const web3Config = createConfig(
  getDefaultConfig({
    chains: [liskSepolia],
    connectors: [injected()],
    transports: {
      [liskSepolia.id]: http(rpcUrl),
    },
    walletConnectProjectId: projectId,
    appName: siteConfig.name,
    appDescription: siteConfig.description,
    appUrl: siteConfig.url,
    appIcon: siteConfig.icon,
    ssr: true,
    storage: noAutoConnectStorage,
  })
);