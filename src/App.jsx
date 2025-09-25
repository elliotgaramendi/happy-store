import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="mt-5">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
