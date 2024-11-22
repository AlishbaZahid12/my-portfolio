import Navbar from "./components/Navbar"; // Adjust the path if necessary
import "./globals.css";
import Footer from './components/footer';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Alishba Zahid | Portfolio</title>
        {/* Add any additional head elements like favicon, meta tags here */}
      </head>
      <body>
        {/* Navbar */}
        <Navbar />
        
        {/* Content of each page */}
        {children}

        {/* Footer component */}
        <Footer />

        {/* Add additional global footer, scripts, etc. */}
      </body>
    </html>
  );
}