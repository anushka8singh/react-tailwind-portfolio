import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App(){
  return(
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-3xl font-bold text-blue-600">
  Hello Tailwind 👋
</h1>

      <h1>
        My Portfolio
      </h1>
    </div>
  )
}

export default App;