import { ReactNode } from "react";

export const metadata = {
  title: "Param Measurer",
  description: "Param Measurer Project",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
