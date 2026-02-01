"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically import App with SSR disabled.
 * BrowserRouter requires browser APIs (document, window) that don't exist on the server.
 */
const App = dynamic(() => import("@/App"), { ssr: false });

/**
 * Single route that renders your React Router App.
 * All screens are defined in App.tsx; Next.js just serves this shell.
 */
export default function RootPage() {
  return <App />;
}
