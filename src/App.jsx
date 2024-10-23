import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className='min-h-screen flex flex-col md:container mx-auto'>
      <NavBar />
      <Hero />
    </div>
  );
};
export default App;

