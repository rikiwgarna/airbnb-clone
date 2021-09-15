import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button className='text-xs bg-white text-purple-500 py-3 px-6 mt-3 rounded-full shadow-md font-bold sm:text-lg sm:py-4 sm:px-10 hover:shadow-lg duration-150 ease-in-out active:scale-90'>
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

export default Hero;
