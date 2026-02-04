import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/pages/frontend/home/Home";
import { StoreProvider } from "./components/store/storeContext";
import ProductInfo from "./components/pages/frontend/product-info/ProductInfo";
import WhoWeArePage from "./components/pages/frontend/landing-page/WhoWeArePage";

const App = () => {


  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/products" element={<OurProductsPage />} />
             <Route path="/product/:slug" element={<ProductInfo />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;