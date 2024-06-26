import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <main className='w-screen h-screen flex justify-center items-center'>
      <section className='w-1/3 m-auto border p-4 max-w-[350px] shadow-md'>
        <h1 className='mb-4 mx-auto text-xl text-center font-bold'>
          Login
        </h1>
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;