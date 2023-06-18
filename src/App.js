import "./styles.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./Page/Home";
import Archived from "./Page/Archived";
export default function App() {
  return (
  <div className="App">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/archived-habbits" element={<Archived/>}/>
    </Routes>
  </div>
);
}