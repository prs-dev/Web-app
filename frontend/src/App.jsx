import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"

const App = () => {
  return (
    <div className="font-roboto w-full h-screen">
      <nav>
        <Navbar />
      </nav>
      {/* <header>

      </header> */}
      <main>
        <Home />
      </main>
      {/* <footer>

      </footer> */}
    </div>
  )
}

export default App