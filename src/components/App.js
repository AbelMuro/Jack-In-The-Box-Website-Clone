import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import FoodPage from './FoodPage';
import BreakfastMenu from './BreakfastMenu';
import BurgersMenu from './BurgersMenu';
import ChickenAndSaladMenu from './ChickenAndSaladMenu';
import DrinksMenu from './DrinksMenu';
import LateNightMenu from './LateNightMenu';
import ShakesAndDessertsMenu from './ShakesAndDessertsMenu';
import TacosFriesSidesMenu from './TacosFriesSidesMenu';
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
                        <Route index element={<BurgersPage />}/>
                        <Route path="/food/ChickenAndSalad" element={<ChickenAndSaladPage/>}/>
                        <Route path="/food/TacosFriesSides" element={<TacosFriesSidesPage/>}/>
                        <Route path="/food/Breakfast" element={<BreakfastMenu/>}/>
                        <Route path="/food/LateNight" element={<LateNightPage/>}/>
                        <Route path="/food/ShakesAndDesserts" element={<ShakesAndDessertsPage/>}/>
                        <Route path="/food/Drinks" element={<DrinksPage/>}/>
                    </Route> 
                    <Route path="/food/::choosenItem" element={""}/>
                </Routes>
                <FooterNavigationBar/> 
            </BrowserRouter>
        </FlexBox>

    )
}
export default App;