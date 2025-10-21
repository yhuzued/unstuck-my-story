import "@mantine/core/styles.css";

import {
  MantineProvider,
  ColorSchemeScript,
  LoadingOverlay,
  Container,
} from "@mantine/core";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useDisclosure } from "@mantine/hooks";
import Tab from "./components/tab";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body style={{ backgroundColor: "#C1D5BF" }}>
        <MantineProvider>
          <Container size="sm" mt="md">
            <Tab />
            {children}
          </Container>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  const [visible] = useDisclosure(true);

  return (
    <LoadingOverlay
      visible={visible}
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
      loaderProps={{ color: "blue", type: "oval" }}
    />
  );
}
