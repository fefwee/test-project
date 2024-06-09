import {FC} from "react";
import Cars from "./components/cars/Cars";
import './styles/style.scss'
import Header from "./components/header/Header";
import SortCar from "./components/sortCar/SortCar";
import {Route, Routes} from "react-router-dom";
import Search from "./components/search/Search";
import Favorites from "./pages/favorites/Favorites";

const App: FC = () => {
    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route path="/" element={<Cars/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
        </div>
    );
};

export default App;
