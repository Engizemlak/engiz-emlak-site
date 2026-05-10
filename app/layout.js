export const metadata = {
  title: "Engiz Emlak",
  description: "Engiz Emlak Gayrimenkul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
