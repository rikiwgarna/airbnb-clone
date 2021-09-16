import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css f
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelectedDate = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetSearchInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };

  return (
    <header className='sticky top-0 grid grid-cols-3 items-center bg-white shadow-md p-5 z-10 md:px-10'>
      {/* left */}
      <div
        className='relative flex item-center h-10 my-auto cursor-pointer'
        onClick={() => router.push('/')}
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          placeholder={placeholder || 'Start your serach'}
          className='flex-grow bg-transparent pl-5 outline-none text-sm text-gray-600 placeholder-gray-400'
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

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelectedDate}
          />

          <div className='flex items-center border-b mb-4'>
            <h2 className='flex-grow text-2xl font-semibold'>
              Number of Guest
            </h2>

            <UsersIcon className='h-5' />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              type='number'
              min={1}
              className='w-12 pl-2 text-lg text-red-400 outline-none'
            />
          </div>

          <div className='flex'>
            <button
              onClick={resetSearchInput}
              className='flex-grow text-gray-400'
            >
              Cancel
            </button>
            <button className='flex-grow text-red-400' onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
