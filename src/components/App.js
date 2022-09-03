import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import FoodPage from './FoodPage';
import BreakfastPage from './BreakfastPage';
import BurgersPage from './BurgersPage';
import ChickenAndSaladPage from './ChickenAndSaladPage';
import DrinksPage from './DrinksPage';
import LateNightPage from './LateNightPage';
import ShakesAndDessertsPage from './ShakesAndDessertsPage';
import TacosFriesSidesPage from './TacosFriesSidesPage';
import FooterNavigationBar from './FooterNavigationBar';
import FlexBox from './FlexBox';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App() {
    return(
        <FlexBox>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/food" element={<FoodPage/>}> 
                        <Route path="/food/Burgers" element={<BurgersPage />}/>
                        <Route path="/food/ChickenAndSalad" element={<ChickenAndSaladPage/>}/>
                        <Route path="/food/TacosFriesSides" element={<TacosFriesSidesPage/>}/>
                        <Route path="/food/Breakfast" element={<BreakfastPage/>}/>
                        <Route path="/food/LateNight" element={<LateNightPage/>}/>
                        <Route path="/food/ShakesAndDesserts" element={<ShakesAndDessertsPage/>}/>
                    </Route> 
                </Routes>
                <FooterNavigationBar/> 
            </BrowserRouter>
        </FlexBox>

    )
}
export default App;