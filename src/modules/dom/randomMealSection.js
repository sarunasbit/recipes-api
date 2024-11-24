import card from "./card"
const randomMealSection = ()=> {
    const storedRecepies = JSON.parse(localStorage.getItem('randomRecepies'));
        const mealCards = storedRecepies.slice(0,6).map(recepie => {
            return card(recepie.strMeal, recepie.idMeal, recepie.strMealThumb);
        }).join('');

    return `
        <div class="row popular__intro">
            <div class="col popular__text">
                <h1>Discover, Create, Share</h1>
                <p>Check our most popular recipes of this week</p>
            </div>
        <div class="col popular__button">
            <button type="button" class="no-style-btn" id="see-all-button">See All</button>
        </div>
            </div>
                <div class="row most__popular__cards">
                ${mealCards}
            </div>
    `
}

export default randomMealSection;