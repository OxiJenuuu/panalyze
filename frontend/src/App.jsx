import { PageRouter } from "vite-dynamic-pages-router";
import { BrowserRouter } from "react-router-dom";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

function App() {
  return (
    <BrowserRouter>
      <PageRouter pages={pages} />
    </BrowserRouter>
  );
}

export default App;