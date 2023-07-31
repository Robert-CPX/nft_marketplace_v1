import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Welcome to Next.js',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="text-3xl font-bold underline">
      {children}
    </body>
  </html>
);

export default RootLayout;
