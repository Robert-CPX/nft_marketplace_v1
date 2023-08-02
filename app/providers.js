import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }) => (
  <ThemeProvider attribute="class">
    {children}
  </ThemeProvider>
);
