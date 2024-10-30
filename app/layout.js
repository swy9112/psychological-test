import ClientRouter from "@/components/ClientRouter";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientRouter />
        {children}
      </body>
    </html>
  );
}
