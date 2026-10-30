import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { MotionProvider } from "@/components/motion-provider";
import { organizationLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Redbay Group | Building Contractors for Homes and Schools in Kenya",
    template: `%s | ${site.name}`,
  },
  description:
    "Redbay Group builds homes, schools and the infrastructure that supports better living and learning in Kenya. NCA Category 7 licensed, based in Ruaraka, Nairobi.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.legal,
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-KE" className="h-full">
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationLd()} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
