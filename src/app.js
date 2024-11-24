import './scss/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSearchIcon from './modules/components/NavbarSearchIcon';
import RecepiesApi from './modules/RecepiesApi/RecepiesApi';
import onClickDisplay from './modules/ui/onClickDisplay';

NavbarSearchIcon()
let url = "https://www.themealdb.com/api/json/v1/1/";
const recipie = new RecepiesApi(url);


document.addEventListener("DOMContentLoaded",async () => {
    await recipie.getRandomRecepies()

    
    onClickDisplay.displayRandomMeals();
    onClickDisplay.onClickMealList();
    onClickDisplay.onClickNavHome();
    onClickDisplay.onClickDispalyRecepie(recipie);
    onClickDisplay.onClickdisplaySearch(recipie);

});






