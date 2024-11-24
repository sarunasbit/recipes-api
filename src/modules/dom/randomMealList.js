import card from "./card"
const randomMealList = ()=> {
    const storedRecepies = JSON.parse(localStorage.getItem('randomRecepies'));
        const mealCards = storedRecepies.map(recepie => {
            return card(recepie.strMeal, recepie.idMeal, recepie.strMealThumb);
        }).join('');

    return `
        <div class="row most__popular__cards">
            ${mealCards}
        </div>
    `
}

export default randomMealList;