import Hero from "../components/modules/Hero";
import ProductGrid from "../components/modules/ProductGrid";
import { products } from "../data/fakeStore.data";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid data={products} />
    </>
  );
};

export default Home;