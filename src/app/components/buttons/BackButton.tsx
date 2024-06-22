'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button type='button' onClick={handleBack}>
      ❌
    </button>
  );
};

export default BackButton;