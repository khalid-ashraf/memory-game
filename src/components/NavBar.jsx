const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-8'>
      <h1 className='font-bold text-2xl text-primary'>memory</h1>
      <div className='flex justify-center items-center gap-4 pt-4'>
        <button className='bg-yellow-500 text-white font-bold text-sm px-5 py-1.5 rounded-full'>
          Restart
        </button>
        <button className='bg-slate-300 text-primary font-bold text-sm px-5 py-1.5 rounded-full'>
          New Game
        </button>
      </div>
    </div>
  );
};
export default NavBar;
