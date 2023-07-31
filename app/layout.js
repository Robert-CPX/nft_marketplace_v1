import Script from 'next/script';
import '../styles/globals.css';
import { Navbar, Footer } from './components';
import { Providers } from './providers';

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Providers>
        <div className="dark:bg-nft-dark bg-white min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Script src="https://kit.fontawesome.com/7d23f8c160.js" crossOrigin="anonymous" />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
