import styles from "./App.module.css";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className={styles.Container}>
      <ProductCard />
    </div>
  );
}

export default App;
