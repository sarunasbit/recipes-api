// If selected datalist value, changes localStorage
const filterValue = (input) => {
    const searchRecepies = JSON.parse(localStorage.getItem('searchRecepies'));
    
    const recepies = searchRecepies.filter(item => {
        return Object.values(item).includes(input)
    })
    localStorage.setItem('searchRecepies', JSON.stringify(recepies));
}

export default filterValue;