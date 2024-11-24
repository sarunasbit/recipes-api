import card from "./card";
import datalistOptions from "./datalistOptions";
const searchResult = (result)=> {
    const searchRecepies = result;
    if (!searchRecepies || searchRecepies.length === 0) {
        console.log("No recipes found in search.");
        const mealSectionCards = document.querySelector(".most__popular");
        mealSectionCards.innerHTML = '';
        return '<h1>No recipes found.</h1>';
    }
        //card creation
        const mealCards = searchRecepies.map(recepie => {
            return card(recepie.strMeal, recepie.idMeal, recepie.strMealThumb);
        }).join('');
        //country datalist
        const recepieArea = searchRecepies.map(country => country.strArea);
        const area = [... new Set(recepieArea)];
        const countrySelect = area.map( c => datalistOptions(c)).join('');
        //recepie datalist
        const recepieCategory = searchRecepies.map(country => country.strCategory);
        const category = [... new Set(recepieCategory)];
        const categorySelect = category.map( c => datalistOptions(c)).join('');
        //Ingridients datalist
        const recepieIngridients = searchRecepies
        .flatMap(recipe => {
            return Object.keys(recipe)
            .filter(key => key.startsWith("strIngredient") && recipe[key] !== null && recipe[key].trim() !== "")
            .map(key => recipe[key])
        })
        const ingr = [... new Set(recepieIngridients)];
        const ingrCategory = ingr.map(ing => datalistOptions(ing)).join("");

        
    return `
            <div class="row g-3">
                <div class="col-12 col-md-3">
                    <div class="mb-1">
                        <input class="form-control form-control-lg" list="countryOptions" id="countryDatalist" placeholder="Country">
                        <datalist id="countryOptions">
                            ${countrySelect}
                        </datalist>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="mb-1">
                        <input class="form-control form-control-lg" list="categoryOptions" id="categoryDatalist" placeholder="Category">
                        <datalist id="categoryOptions">
                            ${categorySelect}
                        </datalist>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="mb-1">
                        <input class="form-control form-control-lg" list="ingredientOptions" id="ingredientDatalist" placeholder="Ingredients">
                        <datalist id="ingredientOptions">
                            ${ingrCategory}
                        </datalist>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <button class="btn btn-outline-success btn-lg w-100" id="filterButton">Filter</button>
                </div>
            </div>
        <div class="row most__popular__cards">
            ${mealCards}
        </div>
    `
}

export default searchResult;