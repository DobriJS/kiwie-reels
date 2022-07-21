import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useAuthStore from '../store/authStore';
import { UserProps } from '../types';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/logo.png';
import { NextPage } from 'next/types';
import { createOrGetUser } from '../utils';

const Navbar: NextPage = () => {
  const [user, setUser] = useState<UserProps | null>();
  const { userProfile, addUser, removeUser } = useAuthStore();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  return (
    <div className='flex w-full items-center justify-between border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/' rel='preload'>
        <div className='h-[38px] w-[100px] md:h-[30px] md:w-[130px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            layout='responsive'
            alt='Kiwie Reels'
            priority
          />
        </div>
      </Link>
      <div>SEARCH</div>
      <div>
        {user ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className='text-md flex items-center gap-2 border-2 px-2 font-semibold md:px-4'>
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block'>Upload</span>
              </button>
            </Link>
            {user.image && (
              <Link href='/'>
                <>
                  <Image
                    width={40}
                    height={40}
                    className='cursor-pointer rounded-full'
                    src={user.image}
                    alt='user-photo'
                  />
                </>
              </Link>
            )}
            <button
              type='button'
              className='px-2'
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color='red' fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('Error')}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
