import "./globals.css";

export const metadata = {
  title: "Rug & Tile | Plettenberg Bay Flooring",
  description: "Flooring, awnings, shutters and blinds in Plettenberg Bay. Call Rug & Tile for laminate, vinyl, wood and bamboo flooring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}