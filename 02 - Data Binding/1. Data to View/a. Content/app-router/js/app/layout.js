import "./globals.css";

export const metadata = {
  title: "Demo",
  description: "Demo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}