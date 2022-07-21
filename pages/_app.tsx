import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
      <Navbar />
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          <Sidebar />
        </div>
        <div className='videos mt-4 flex h-[88vh] flex-1 flex-col gap-10 overflow-auto'>
          <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
