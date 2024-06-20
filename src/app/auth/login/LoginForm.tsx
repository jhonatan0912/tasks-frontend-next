'use client';

import { AuthProxy } from '@/app/proxies/auth.proxies';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import SubmitButton from '../../components/buttons/SubmitButton';

const LoginForm = () => {
  const authProxy = new AuthProxy();
  const router = useRouter();

  const [email, setEmail] = useState<string>('jhonatan@gmail.com');
  const [password, setPassword] = useState<string>('Jhonatan123@.');
  const [busy, setBusy] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    setBusy(true);
    try {
      const res = await authProxy.login(email, password);
      console.log(res);
      router.push('/tasks');
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className='flex flex-col gap-5' onSubmit={e => handleSubmit(e)}>
      <input
        className='p-2 rounded-md border '
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email} />
      <input
        className='p-2 rounded-md border '
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password} />

      <SubmitButton busy={busy} />
    </form>
  );
};

export default LoginForm;
