import "./globals.css";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/notifications/styles.css";
import Script from "next/script";
import { CheckUser } from "./components/CheckUser";
import Loading from "./loading";
import { Suspense } from "react";
import PreLoader from "./components/uiComponents/PreLoader";

export const metadata = {
  title: {
    default: "Tarang 2023 | The Annual Cultural Fest of IIITDM Jabalpur",
    template: "%s | Tarang 2023 | The Annual Cultural Fest of IIITDM Jabalpur",
  },
  description:
    "Tarang is the annual cultural fest of IIITDM Jabalpur. It is a three-day long extravaganza of fun, frolic, and festivity, where students from all over the country participate in a plethora of events and competitions.",

  keywords: [
    "tarang",
    "tarang 2023",
    "tarang iiitdm",
    "tarang iiitdm jabalpur",
    "tarang jabalpur",
    "tarang iiitdm 2023",
    "tarang iiitdm jabalpur 2023",
    "tarang jabalpur 2023",
    "tarang 2023 iiitdm",
    "tarang cultural fest",
    "cultural fest iiitdm jabalpur",
    "tarang cultural fest iiitdm jabalpur",
    "tarang cultural fest 2023",
    "tarang cultural fest iiitdm jabalpur 2023",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Tarang 2023 | The Annual Cultural Fest of IIITDM Jabalpur",
    description:
      "Tarang is the annual cultural fest of IIITDM Jabalpur. It is a three-day long extravaganza of fun, frolic, and festivity, where students from all over the country participate in a plethora of events and competitions.",
    url: "https://tarang2023.com",
    siteName: "Tarang 2023 | The Annual Cultural Fest of IIITDM Jabalpur",
    images: [
      {
        url: "/opengraph-image.jpg",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
            <PreLoader />
            {children}
          </MantineProvider>
        </Suspense>
      </body>
    </html>
  );
}
