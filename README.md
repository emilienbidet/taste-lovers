![University of Nantes logo](/docs/assets/logo.png)

# Taste Lovers

Taste Lovers is a project of the IUT of Nantes. Here to help to find recipes based on intolerences and diets.

This project was carried out by second year student.

![Demo](/docs/assets/demo.gif)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* npm (NodeJS's official package manager)
* WebBrowser

### Installing

First of all, clone the repository
```
git clone https://gitlab.com/emilienbidet/taste-lovers
```

Then install all necessary modules, this can take few minutes
```
npm install
```

Finally compiles and hot-reloads for development
```
npm run serve
```

After few secondes, the console's output should be like this, now go to [localhost](localhost:8080) to check the output.

![npm run serve output](/docs/assets/npm-run-serve-output.png)

## Usage

### Find recipes

Several search possibilities are available:

- Go to the main page and see random recipes
- Search by recipe name with auto-complete of recipe name suggestion
- Search by intolerance, type of meal and diet

### Add to favorites

Add to favorite recipes by clicking on the little heart (too cute 😍) as well as to view the recipes from the favorites list by clicking on the dedicated tab.

### Let yourself be surprised

Go on an adventure by clicking on the “Suprise me” section and let the app provide you a random recipe.

### See the details

Interested in a recipe? So let's go ! Click on the "Details" tab for a list of the recipe's ingredients and its preparation instructions.

## Deployment

Compiles and minifies for production
```
npm run build
```

## Built With

* [VueJS](https://vuejs.org/) - Javascript Framework
* [Vuetify](https://vuetifyjs.com) - Material Design Framework

## Roadmap

- [ ] Load more button
- [ ] Taste on recipe details
- [ ] Similar recipes on recipe details
- [ ] Wine pairing on recipes details
- [ ] Explore page (get recipes by country)
- [ ] Remove from favorites
- [ ] Filter favorites

## Authors

- [Emilien Bidet](https://emilienbidet.fr) - main developer

## Special thanks

- JF. Berdjugin - IUT teacher
- M. Hafizou - IUT teacher