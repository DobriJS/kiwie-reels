import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { NextPage } from 'next/types';
import { VideoCardProps } from '../types';

const VideoCard: NextPage<VideoCardProps> = ({ post }) => {
  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef?.current?.pause();
      setPlaying(false);
    } else {
      videoRef?.current?.play();
      setPlaying(true);
    }
  };

  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
      <div>
        <div className='flex cursor-pointer gap-3 rounded p-2 font-semibold'>
          <div className='h-10 w-10 md:h-16 md:w-16'>
            <Link href={'/'}>
              <>
                <Image
                  width={62}
                  height={62}
                  className=' rounded-full'
                  src={post.postedBy.image}
                  alt='user-profile'
                  layout='responsive'
                />
              </>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <div className='flex-items-center gap-2'>
                <p className='md:text-md flex items-center gap-2 font-bold text-primary'>
                  {post.postedBy.userName}
                  {` `}
                  <GoVerified className='text-md text-blue-400' />
                </p>
                <p className='hidden text-xs font-medium capitalize text-gray-500 md:block'>
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='relative flex gap-4 lg:ml-20'>
        <div
          className='rounded-3xl'
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link href={'/'}>
            <video
              loop
              ref={videoRef}
              className='h-[300px] w-[200px] cursor-pointer rounded-2xl bg-gray-100 md:h-[400px] lg:h-[530px] lg:w-[600px]'
              src={post.video.asset.url}
            ></video>
          </Link>
          {isHover && (
            <div className='absolute bottom-6 left-8 flex w-[100px] cursor-pointer gap-10 p-3 md:left-14 md:w-[50px] lg:left-0 lg:w-[600px] lg:justify-between'>
              {playing ? (
                <button onClick={onVideoPress}>
                  <BsFillPauseFill className='text-2xl text-black lg:text-4xl' />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                  {' '}
                  <BsFillPlayFill className='text-2xl text-black lg:text-4xl' />
                </button>
              )}
              {isVideoMuted ? (
                <button onClick={() => setIsVideoMuted(false)}>
                  <HiVolumeOff className='text-2xl text-black lg:text-4xl' />
                </button>
              ) : (
                <button onClick={() => setIsVideoMuted(true)}>
                  <HiVolumeUp className='text-2xl text-black lg:text-4xl' />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
