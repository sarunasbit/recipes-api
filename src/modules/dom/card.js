const card = (strMeal, idMeal, strMealThumb)=> {
    return `
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="card">
                <img src="${strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${strMeal}</h5>
                        <a href="#" class="recepie-id-link" id="${idMeal}">More</a>
                    </div>
             </div>
        </div>
    `
}

export default card;