import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GroceryList from "./pages/GroceryList/GroceryList.jsx";
import GroceryListView from "./pages/GroceryListView/GroceryListView.jsx";
import GroceryListEdit from "./pages/GroceryListEdit/GroceryListEdit.jsx";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import StoreSetup from "./pages/StoreSetup/StoreSetup.jsx";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/grocery-lists" element={<GroceryList />} />
        <Route path="/grocery-lists/:id" element={<GroceryListView />} />
        <Route path="/grocery-lists/update/:id" element={<GroceryListEdit />} />
        <Route path="/store-setup" element={<StoreSetup />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
