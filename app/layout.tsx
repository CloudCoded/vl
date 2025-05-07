import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { ReduxProvider } from "./providers/ReduxProvider";
import { ReactQueryClientProvider } from "@/services/react-query/queryProvider";
import { Providers as HeroProvider } from "./providers/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo-white.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <span className="hidden bg-fliteBlue border-fliteBlue text-fliteBlue">
          <span className="bg-fliteGreen border-fliteGreen text-fliteGreen">
            <span className="bg-fliteYellow border-fliteYellow">
              <span className="bg-fliteOrange border-fliteOrange text-fliteOrange"/>
            </span>
          </span>
        </span>
        <ReduxProvider>
          <HeroProvider
            themeProps={{ attribute: "class", defaultTheme: "light" }}
          >
            <ReactQueryClientProvider>
              <ReactQueryDevtools initialIsOpen={false} />
              <div className="relative flex flex-col h-screen">
                <main className="flex-grow ">{children}</main>
              </div>
            </ReactQueryClientProvider>
          </HeroProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
