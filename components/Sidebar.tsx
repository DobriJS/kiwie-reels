import React, { useState } from 'react';
import { NextPage } from 'next/types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';

const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const normalLink =
    'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#8ee53f] rounded';

  return (
    <div>
      <div
        className='m-2 ml-4 mt-3 block text-xl xl:hidden'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className='mb-10 flex w-20 flex-col justify-start border-r-2 border-gray-100 p-3 xl:w-400 xl:border-0'>
          <div className='border-gray-200 xl:border-b-2 xl:pb-4'>
            <Link href='/'>
              <div className={normalLink}>
                <p className='text-2xl'>
                  {' '}
                  <AiFillHome />
                </p>
                <span className='hidden text-xl xl:block'>For You</span>
              </div>
            </Link>
          </div>
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
