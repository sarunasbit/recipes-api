

const countIngridients = async (recepieId, input) => {
    try {
        const result = await input.getRecepieById(recepieId);
        if (result.length > 0) {
            for (const item of result) {
                const details = {};
                let ingridients = 0;
                for (const key in item) {
                    if(item[key] !== null && item[key].trim() !== ""){
                        if(key.startsWith("strIngredient")){ ingridients+=1;}
                        details[key] = item[key];
                    }
                }
                localStorage.setItem('ingridientsNumber', JSON.stringify(ingridients));
                localStorage.setItem('details', JSON.stringify(details));
            }
        } else {
            console.log("No recipes found for the given ID.");
        }
    } catch (error) {
        console.error("Error displaying recipe:", error);
    }
    
}
export default countIngridients;