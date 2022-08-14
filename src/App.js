
import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
const  App = () => {

const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
]
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>   //index is checking for the parent path, "path="/"" and it returns true or false
        <Route path="shop" element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
      
      
    </Routes>
    );
};

export default App;
