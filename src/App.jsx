import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="mt-5">
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App
