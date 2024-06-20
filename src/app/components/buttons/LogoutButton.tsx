'use client';

import { useRouter } from 'next/navigation';
import { AuthProxy } from '../../proxies/auth.proxies';

const LogoutButton = () => {
  const authProxy = new AuthProxy();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await authProxy.logout();
      if (res.data.success) router.push('/auth/login');
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <button
      className='text-sm'
      type='button'
      onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;