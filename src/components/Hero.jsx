import Dot from "./Dot";

const Hero = () => {
  const arr = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div className='flex justify-center items-start pt-10 mx-8 flex-1'>
      <div className='grid grid-cols-4 gap-7 pt-10 h-auto'>
        {arr.map((dot) => (
          <Dot key={dot} />
        ))}
      </div>
    </div>
  );
};
export default Hero;
