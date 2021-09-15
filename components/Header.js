import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 grid grid-cols-3 items-center bg-white shadow-md p-5 z-10 md:px-10'>
      {/* left */}
      <div className='relative flex item-center h-10 my-auto cursor-pointer'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* center */}
      <div className='flex items-center py-2 md:border-2 rounded-full md:shadow-sm'>
        <input
          type='text'
          placeholder='Start your serach'
          className='flex-grow bg-transparent pl-5 outline-none text-sm text-gray-600 placeholder-gray-400 md:text-base'
        />
        <SearchIcon className='hidden h-8 p-2 bg-red-400 text-white rounded-full cursor-pointer md:inline-flex md:mx-2' />
      </div>

      {/* right */}
      <div className='flex items-center justify-end space-x-4 text-gray-500 cursor-pointer'>
        <p className='hidden md:inline-flex'>Became a host</p>
        <GlobeAltIcon className='h-6 ' />

        <div className='flex items-center space-x-2 p-2 border-2 rounded-full'>
          <MenuIcon className='h-6 ' />
          <UserCircleIcon className='h-6 ' />
        </div>
      </div>
    </header>
  );
}

export default Header;
