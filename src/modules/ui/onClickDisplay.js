import randomMealSection from "../dom/randomMealSection";
import randomMealList from "../dom/randomMealList";
import searchResult from "../dom/searchresult";
import countIngridients from "../components/countIngridients";
import recepieDetails from "../dom/recepieDetails";
import filterValue from "../components/filterValue";

class onClickDisplay{

    static displayRandomMeals(){
            const mealSectionHTML = randomMealSection();
            const mealSectionCards = document.querySelector(".most__popular");
            mealSectionCards.innerHTML = mealSectionHTML;
    }

    static onClickMealList() {
        const mostPopular = document.querySelector(".most__popular");
        if (!mostPopular.dataset.listenerAdded) {
            mostPopular.addEventListener("click", (event) => {
                if (event.target && event.target.id === "see-all-button") {
                    console.log("Veikia click");
                    const mealSectionHTML = randomMealList();
                    const mealSectionCards = document.querySelector(".most__popular");
                    mealSectionCards.innerHTML = mealSectionHTML;
                }
            });
            mostPopular.dataset.listenerAdded = true;
        }
    }

    static onClickNavHome(){
        document.querySelector('#home-button').addEventListener('click', ()=>{
            onClickDisplay.displayRandomMeals()
        })
    }

    static onClickdisplaySearch(input){
        document.querySelector('#search-button').addEventListener('click',async (e)=> {
            e.preventDefault();
            const searchValue = document.querySelector('#search-value').value;
            await input.getBySearch(searchValue).then(result => {
                const mealSearchHTML = searchResult(result);
                const mealSectionCards = document.querySelector(".most__popular");
                mealSectionCards.innerHTML = mealSearchHTML;

                onClickDisplay.onClickFilter();
            })
        })
    }
    static onClickDispalyRecepie(input) {
        const mostPopular = document.querySelector('.most__popular');
        
        if (!mostPopular.dataset.listenerAddedRecepie) {
            mostPopular.addEventListener('click',async (e) => {
                if (e.target && e.target.classList.contains("recepie-id-link")) {
                    const recepieId = e.target.id;
                    await countIngridients(recepieId, input)
                    const mealSectionCards = document.querySelector(".most__popular");
                    const mealSearchHTML = recepieDetails();
                    mealSectionCards.innerHTML = mealSearchHTML;
                }
            });
            mostPopular.dataset.listenerAddedRecepie = true;
        }
    }

    static onClickFilter(){

        document.querySelector('#filterButton').addEventListener('click', () => {
            const areaInput = document.querySelector('#countryDatalist').value;
            const categoryInput = document.querySelector('#categoryDatalist').value;
            const ingInput = document.querySelector('#ingredientDatalist').value;

            if(areaInput){ filterValue(areaInput)}
            if(categoryInput){filterValue(categoryInput)}
            if(ingInput){filterValue(ingInput)}
            
            const searchRecepies = JSON.parse(localStorage.getItem('searchRecepies'));
            const mealSearchHTML = searchResult(searchRecepies);
            const mealSectionCards = document.querySelector(".most__popular");
            mealSectionCards.innerHTML = mealSearchHTML;
            onClickDisplay.onClickFilter();
        })
    }
}
export default onClickDisplay;