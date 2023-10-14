import "./globals.css";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/notifications/styles.css";
import Script from "next/script";
import { CheckUser } from "./components/CheckUser";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  title: "Tarang'23 ",
  description:
    "Premier Cultural fest of IIIT Jabalpur organized for the students by the students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vH4kpPkgNkgfthIW8BTVQKuSutW2pyH26eK1JsXLmdI"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500&display=swap"
          rel="stylesheet"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RVLBWQNHRQ" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RVLBWQNHRQ');
        `}
        </Script>
        <ColorSchemeScript />
      </head>
      <body>
        <Suspense fallback={<Loading />}>
          <CheckUser />
          <MantineProvider>
            <Notifications position="bottom-right" />
            {children}
          </MantineProvider>
        </Suspense>
      </body>
    </html>
  );
}
