import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Test Next.js</title>
        <meta
          name="description"
          content="modèle de site web développé sous Next.js"
        />
      </head>
      <body>
        <Header />
        <main>
          <Sidebar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
