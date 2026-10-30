import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";

export const metadata: Metadata = {
  title: "Redbay Group | Building places. Shaping futures.",
  description:
    "Redbay Group builds homes, schools and the infrastructure that supports better living and learning in Kenya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
