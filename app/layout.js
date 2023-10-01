import "./globals.css";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/notifications/styles.css";

export const metadata = {
  title: "Tarang'23 ",
  description:
    "This is the Premier Cultural fest of IIIT Jabalpur organized for the students by the students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Notifications position="bottom-right" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
