import LoginForm from './LoginForm';

const login = () => {


  return (
    <main className='w-screen h-screen bg-red-400'>
      <section className='w-1/3 m-auto'>
        <h1 className='mb-4 mx-auto text-xl text-center font-bold'>
          Login
        </h1>
        <LoginForm />
      </section>
    </main>
  );
};

export default login;