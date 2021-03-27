import Vue from 'vue';
import VueGlobalVar from 'vue-global-var';

Vue.use(VueGlobalVar, {
    globals: {
        $webSiteName: 'Taste Lovers',
        $itemsItolerences: [
            'Dairy',
            'Egg',
            'Gluten',
            'Grain',
            'Peanut',
            'Seafood',
            'Sesame',
            'Shellfish',
            'Soy',
            'Sulfite',
            'Tree Nut',
            'Wheat'
        ],
        $itemsMealTypes: [
            'main course',
            'side dish',
            'dessert',
            'appetizer',
            'salad',
            'bread',
            'breakfast',
            'soup',
            'beverage',
            'sauce',
            'marinade',
            'fingerfood',
            'snack',
            'drink',
        ],
        $itemsDiets: [
            'Gluten Free',
            'Ketogenic',
            'Vegetarian',
            'Lacto-Vegetarian',
            'Ovo-Vegetarian',
            'Vegan',
            'Pescetarian',
            'Paleo',
            'Primal',
            'Whole30'
        ],
        $favoriteRecipes: []
    },

});

export default null;