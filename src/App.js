import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
   
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

  );
};

export default App;
