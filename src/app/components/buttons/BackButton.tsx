'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/tasks');
  };

  return (
    <button
      className='absolute right-3 top-3 p-2 rounded-md text-white hover:bg-gray-200 transition-all duration-100'
      type='button'
      onClick={handleBack}>
      ❌
    </button>
  );
};

export default BackButton;