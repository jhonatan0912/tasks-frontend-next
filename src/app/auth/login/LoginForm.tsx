'use client';

import { AuthProxy } from '@/app/proxies/auth.proxies';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import SubmitButton from '../../components/SubmitButton';

const LoginForm = () => {
  const authProxy = new AuthProxy();
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [busy, setBusy] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    setBusy(true);
    try {
      const res = await authProxy.login(email, password);
      router.push('/tasks');
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={e => handleSubmit(e)}>
      <input
        className='p-2 rounded-md'
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email} />
      <input
        className='p-2 rounded-md'
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password} />

      <SubmitButton busy={busy} />
    </form>
  );
};

export default LoginForm;
