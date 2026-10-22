import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lava Room — Find your flow",
  description: "A little motion. A quieter mind. Set your color and unwind with an animated lava lamp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
