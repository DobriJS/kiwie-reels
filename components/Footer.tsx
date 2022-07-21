import { NextPage } from 'next/types';

import { footerList1, footerList2, footerList3 } from '../utils/constants';

const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item) => (
      <p
        key={item}
        className='cursor-pointer text-sm text-gray-400 hover:underline'
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer: NextPage = () => {
  return (
    <div className='mt-6 hidden xl:block'>
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />
      <p className='mt-5 text-sm text-gray-400'>KIWIE REELS 2022</p>
    </div>
  );
};

export default Footer;
