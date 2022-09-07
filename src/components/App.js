import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import FoodPage from './FoodPage';
import OffersAndStuffPage from './OffersAndStuffPage'
import ItemDescriptionPage from './ItemDescriptionPage';
import LocationsPage from './LocationsPage';
import CountryPage from './CountryPage';
import StatePage from './StatePage';
import CityPage from './CityPage';
import RestaurantInfoPage from './RestaurantInfoPage';
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
                        <Route index element={<BurgersMenu />}/>
                        <Route path="/food/ChickenAndSalad" element={<ChickenAndSaladMenu/>}/>
                        <Route path="/food/TacosFriesSides" element={<TacosFriesSidesMenu/>}/>
                        <Route path="/food/Breakfast" element={<BreakfastMenu/>}/>
                        <Route path="/food/LateNight" element={<LateNightMenu/>}/>
                        <Route path="/food/ShakesAndDesserts" element={<ShakesAndDessertsMenu/>}/>
                        <Route path="/food/Drinks" element={<DrinksMenu/>}/>
                    </Route> 
                    <Route path="/food/:choosenItem" element={<ItemDescriptionPage/>}/>
                    <Route path="/OffersAndStuff" element={<OffersAndStuffPage/>}/>
                    <Route path="/Locations" element={<LocationsPage />}>
                        <Route path="/Locations/select-country" element={<CountryPage/>}/>
                        <Route path="/Locations/select-country/:country" element={<StatePage/>}/>
                        <Route path="/Locations/select-country/:country/:state" element={<CityPage/>}/>
                        <Route path="/Locations/select-country/:country/:state/:city" element={<RestaurantInfoPage/>}/>
                    </Route>

                </Routes>
                <FooterNavigationBar/> 
            </BrowserRouter>
        </FlexBox>

    )
}
export default App;