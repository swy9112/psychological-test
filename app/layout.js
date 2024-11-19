import ClientRouter from "@/components/ClientRouter";
import "./globals.css";

export default function RootLayout({ children }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  return (
    <html lang="en">
      <body>
        <ClientRouter />
        {children}
      </body>
    </html>
  );
}
