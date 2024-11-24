class RecepiesApi{
    constructor(url) {
        this.url = url;
    }

    //https://www.themealdb.com/api/json/v1/1/
    async fetchData(filterBy, id = ''){
        
        const apiUrl = `${this.url}${filterBy}${id}`
        return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    async getRandomRecepies(){
        const storedRecepies = localStorage.getItem('randomRecepies');
        if(storedRecepies){
            return storedRecepies
        }
        const randomRecepies = [];
        for(let i = 0; i < 15; i++){
            const data = await this.fetchData('random.php');
            randomRecepies.push(data.meals[0])
        }
        return localStorage.setItem('randomRecepies', JSON.stringify(randomRecepies))
    }

    async getBySearch(input){
        localStorage.removeItem('searchRecepies');
        const data = await this.fetchData('search.php?s=', input);

        if(data &&  data.meals){
            localStorage.setItem('searchRecepies', JSON.stringify(data.meals))
            return data.meals
        } else {
            console.log("No Result")
            return []
        }
    }

    async getRecepieById(input){
        const data = await this.fetchData('lookup.php?i=', input.toString());

        if(data &&  data.meals){
            return data.meals;
        } else {
            console.log("No Result")
            return []
        }
    }
}

export default RecepiesApi;
