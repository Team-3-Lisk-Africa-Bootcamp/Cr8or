// 'use client';

// import { WagmiProvider } from "wagmi";
// import type { PropsWithChildren } from "react";
// import { ConnectKitProvider } from "connectkit";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { projectId, web3Config } from "@/lib/config/web3.config";
// import { Toaster } from "@/components/ui/toaster";

// if (!projectId) throw new Error("NEXT_PUBLIC_REOWN_PROJECT_ID is not defined");

// const queryClient = new QueryClient();

// export default function Web3Provider({ children }: PropsWithChildren<{}>) {
//   return (
//     <WagmiProvider config={web3Config}>
//       <QueryClientProvider client={queryClient}>
//         <ConnectKitProvider
//           theme="auto"
//           mode="dark"
//           options={{
//             embedGoogleFonts: true,
//             disclaimer: (
//               <>
//                 By connecting your wallet you agree to the{" "}
//                 <a
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   href="https://en.wikipedia.org/wiki/Terms_of_service"
//                 >
//                   Terms of Service
//                 </a>{" "}
//                 and{" "}
//                 <a
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   href="https://en.wikipedia.org/wiki/Privacy_policy"
//                 >
//                   Privacy Policy
//                 </a>
//               </>
//             ),
//           }}
//           customTheme={{
//             "--ck-font-family": '"Noto Sans", serif',
//             "--ck-overlay-background": "rgba(0, 0, 0, 0.8)",
//             "--ck-border-radius": "24px",
//           }}
//         >
//           <Toaster />
//           {children}
//         </ConnectKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// }
















"use client";

import { WagmiProvider } from "wagmi";
import type { PropsWithChildren } from "react";
import { ConnectKitProvider } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { projectId, web3Config } from "@/lib/config/web3.config";

if (!projectId) {
  console.error("NEXT_PUBLIC_REOWN_PROJECT_ID is not defined");
  throw new Error("NEXT_PUBLIC_REOWN_PROJECT_ID is not defined");
}

const queryClient = new QueryClient();

export default function Web3Provider({ children }: PropsWithChildren<{}>) {
  return (
    <WagmiProvider config={web3Config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          theme="auto"
          mode="dark"
          options={{
            embedGoogleFonts: true,
            disclaimer: (
              <>
                By connecting your wallet you agree to the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Terms_of_service"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Privacy_policy"
                >
                  Privacy Policy
                </a>
              </>
            ),
          }}
          customTheme={{
            "--ck-font-family": '"Noto Sans", serif',
            "--ck-overlay-background": "rgba(0, 0, 0, 0.8)",
            "--ck-border-radius": "24px",
          }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}