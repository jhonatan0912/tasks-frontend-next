import LogoutButton from '../buttons/LogoutButton';

const Header = () => {
  return (
    <header className='py-3 bg-gray-600 text-white'>
      <section className='max-w-[1200px] mx-auto flex justify-between items-center px-4'>
        <h1 className='font-bold text-xl'>Tasks App</h1>

        <LogoutButton />
      </section>
    </header>
  );
};

export default Header;