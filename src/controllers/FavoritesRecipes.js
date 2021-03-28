function addToFavorites(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favoritesRecipes'));
    if (favorites == null) {
        favorites = new Array()
    }
    favorites.push(recipe);
    localStorage.setItem('favoritesRecipes', JSON.stringify(favorites));
}

function getFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favoritesRecipes'));
    if (favorites) {
        return favorites;
    } else  {
        return new Array();
    }
}

export { addToFavorites, getFavorites }