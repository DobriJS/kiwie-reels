import axios from 'axios';
import NoResults from '../components/NoResults';
import VideoCard from '../components/VideoCard';
import { VideoProps, VideoResponseProps } from '../types';
import { BASE_URL } from '../utils';

const Home = ({ videos }: VideoResponseProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: VideoProps) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (
        <NoResults text={'No results found'} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);

  return {
    props: {
      videos: data
    }
  };
};

export default Home;
