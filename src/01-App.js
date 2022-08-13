//This version does not implement Contexts.
//branced at video #105
import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'

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
const Shop = () => {
  return <h1>shop</h1>
}
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>   //index is checking for the parent path, "path="/"" and it returns true or false
        <Route path="shop" element={<h1>hello</h1>}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
      
      
    </Routes>
    );
};

export default App;
