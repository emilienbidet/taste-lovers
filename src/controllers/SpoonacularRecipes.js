const spoonacularUrl = 'https://api.spoonacular.com/recipes/';
const apiKey = '454f05438c534518998e1e8b638110f9';
// const apiKey = 'badApiKey'
const authentification = 'apiKey=' + apiKey;

function getAutocompleteRecipes(number, query) {
  const path = 'autocomplete?' + authentification;
  const url = spoonacularUrl + path + '&number=' + number + '&query=' + encodeURI(query);
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        res
          .json()
          .then((res) => {
            resolve(
              res
                .map((v) => v.title)
                .filter((e) => {
                  return (
                    (e || "").toLowerCase().indexOf((query || "").toLowerCase()) >
                    -1
                  );
                }))
          })
          .catch((error) => {
            console.log(error);
            reject()
          });
      })
      .catch((error) => {
        console.log(error);
        reject()
      });
  });
}

function getFilteredRecipes(number, query, intolerences, mealTypes, diets) {
  const path = 'complexSearch?' + authentification;
  let url = spoonacularUrl + path + '&number=' + number + '&addRecipeInformation=true';
  url += query ? "&titleMatch=" + encodeURI(query) : "";
  url += intolerences.length != 0 ? "&intolerances=" + encodeURI(intolerences.join(",")) : "";
  url += mealTypes ? "&type=" + encodeURI(mealTypes) : "";
  url += diets ? "&diet=" + encodeURI(diets) : "";
  return new Promise((resolve, reject) => {
    fetch(url)
        .then((res) => {
          res
            .json()
            .then((res) => {
              resolve(res.results);
            })
            .catch((error) => {
              console.log(error);
              reject();
            });
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
  });
}

function getRandomRecipes(number) {
  const path = 'random?' + authentification;
  const url = spoonacularUrl + path + '&number=' + number + '&addRecipeInformation=true';
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((res) => {
      res
        .json()
        .then((res) => {
          resolve(res.recipes);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
  })
}

function getRecipe(recipeId) {
  const path = recipeId + '/information?' + authentification;
  const url = spoonacularUrl + path + '&instructionsRequired=true' + '&includeNutrition=false';
  return new Promise((resolve, reject) => {
    fetch(url)
        .then(res => {
          res.json()
            .then(res => {
              resolve(res);
            })
            .catch(error => {
              console.log(error);
              reject();
            });
        })
        .catch(error => {
          console.log(error);
          reject();
        });
  });
}

export { getAutocompleteRecipes, getFilteredRecipes, getRandomRecipes, getRecipe };