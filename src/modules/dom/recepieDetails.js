const recepieDetails = ()=> {
    const details = JSON.parse(localStorage.getItem('details'));
    const ingridientsCount = JSON.parse(localStorage.getItem('ingridientsNumber'));
    let tableRows = "";
        for(let i = 1; i <= ingridientsCount; i++){
            const ingridient = details[`strIngredient${i}`]
            const measure = details[`strMeasure${i}`]

            tableRows += `<tr><td>${ingridient}</td><td>${measure}</td></tr>`;
        }



    return `
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">${details.strMeal}</h3>
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-6">
                    <img class="img-fluid img-responsive rounded" src="${details.strMealThumb}" class="img-responsive">
                </div>
                <div class="col-lg-7 col-md-7 col-sm-6">
                    <h4 class="box-title mt-1">Instructions</h4>
                    <p>${details.strInstructions}</p>
                    <h4 class="box-title mt-3">Country</h4>
                    <p>${details.strArea}</p>
                    <h4 class="box-title mt-3">Category</h4>
                    <p>${details.strCategory}</p>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h3 class="box-title mt-5">Ingridients</h3>
                    <div class="table-responsive">
                        <table class="table table-striped table-product">
                            <tbody>
                                ${tableRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

export default recepieDetails;