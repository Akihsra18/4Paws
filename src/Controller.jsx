// import { catBreeds } from "./Models/CatModel";
// import { dogBreeds } from "./Models/DogModel";

// const options = {
//     method: 'GET',
//     headers: { 'X-Api-Key': '...'},
//     contentType: 'application/json'
//     // success: function(result) {
//     //     console.log(result);
//     // },
//     // error: function ajaxError(jqXHR) {
//     //     console.error('Error: ', jqXHR.responseText);
//     // }
// }

// export const fonctionPromessesCatBreeds = async() => {

//     console.log("Avant la requête");

//     const promises = catBreeds.map(catBreed =>
//         fetch('https://api.api-ninjas.com/v1/cats?name=' + catBreed, options)
//         .then(reponse => {
//             console.log("Réponse reçue");
//             return reponse.json();
//         }).then(data => {
//             return {name : data[0].name, img : data[0].image_link};
//         })
//         .catch(erreur => {
//             console.error(erreur);
//         })
//     );

//     const catBreedInfos = await Promise.all(promises);

//     console.log(catBreedInfos);

//     return catBreedInfos;
// };

// export const fonctionPromessesCat = async(nom) => {

//     console.log("Avant la requête");

//     const promise = (
//         fetch('https://api.api-ninjas.com/v1/cats?name=' + nom, options)
//         .then(reponse => {
//             console.log("Réponse reçue");
//             return reponse.json();
//         }).then(data => {
//             return {
//                 name : data[0].name, 
//                 img : data[0].image_link, 
//                 length : data[0].length ? data[0].length : "-", 
//                 origin : data[0].origin ? data[0].origin : "-", 
//                 min_weight : data[0].min_weight ? data[0].min_weight : "-", 
//                 max_weight : data[0].max_weight ? (data[0].max_weight == data[0].min_weight ? "" : " - " + data[0].max_weight) : "-", 
//                 min_life_expectancy : data[0].min_life_expectancy ? data[0].min_life_expectancy : "-", 
//                 max_life_expectancy : data[0].max_life_expectancy ? (data[0].max_life_expectancy == data[0].min_life_expectancy ? "" : " - " + data[0].max_life_expectancy) : "-", 
//                 family_friendly : data[0].family_friendly ? data[0].family_friendly : "-", 
//                 children_friendly : data[0].children_friendly ? data[0].children_friendly : "-", 
//                 other_pets_friendly : data[0].other_pets_friendly ? data[0].other_pets_friendly : "-",  
//                 general_health : data[0].general_health ? data[0].general_health : "-", 
//                 playfulness : data[0].playfulness ? data[0].playfulness : "-"
//             };
//         })
//         .catch(erreur => {
//             console.error(erreur);
//         })
//     )

//     return await promise;

// };



// export const fonctionPromessesDogBreeds = async() => {

//     console.log("Avant la requête");

//     const promises = dogBreeds.map(dogBreed =>
//         fetch('https://api.api-ninjas.com/v1/dogs?name=' + dogBreed, options)
//         .then(reponse => {
//             console.log("Réponse reçue");
//             return reponse.json();
//         }).then(data => {
//             return {name : data[0].name, img : data[0].image_link};
//         })
//         .catch(erreur => {
//             console.error(erreur);
//         })
//     );

//     const dogBreedInfos = await Promise.all(promises);

//     console.log(dogBreedInfos);

//     return dogBreedInfos;
// };

// export const fonctionPromessesDog = async(nom) => {

//     console.log("Avant la requête");

//     const promise = (
//         fetch('https://api.api-ninjas.com/v1/dogs?name=' + nom, options)
//         .then(reponse => {
//             console.log("Réponse reçue");
//             return reponse.json();
//         }).then(data => {
//             return {
//                 name : data[0].name, 
//                 img : data[0].image_link, 
//                 min_weight_male : data[0].min_weight_male ? data[0].min_weight_male : "-", 
//                 max_weight_male : data[0].max_weight_male ? (data[0].max_weight_male == data[0].min_weight_male ? "" : " - " + data[0].max_weight_male) : "-", 
//                 min_weight_female : data[0].min_weight_female ? data[0].min_weight_female : "-", 
//                 max_weight_female : data[0].max_weight_female ? (data[0].max_weight_female == data[0].min_weight_female ? "" : " - " + data[0].max_weight_female) : "-", 
//                 min_height_male : data[0].min_height_male ? data[0].min_height_male : "-", 
//                 max_height_male : data[0].max_height_male ? (data[0].max_height_male == data[0].min_height_male ? "" : " - " + data[0].max_height_male) : "-", 
//                 min_height_female : data[0].min_height_female ? data[0].min_height_female : "-", 
//                 max_height_female : data[0].max_height_female ? (data[0].max_height_female == data[0].min_height_female ? "" : " - " + data[0].max_height_female) : "-", 
//                 min_life_expectancy : data[0].min_life_expectancy ? data[0].min_life_expectancy : "-", 
//                 max_life_expectancy : data[0].max_life_expectancy ? (data[0].max_life_expectancy == data[0].min_life_expectancy ? "" : " - " + data[0].max_life_expectancy) : "-", 
//                 playfulness : data[0].playfulness ? data[0].playfulness : "-", 
//                 grooming : data[0].grooming ? data[0].grooming : "-", 
//                 shedding : data[0].shedding ? data[0].shedding : "-", 
//                 drooling : data[0].drooling ? data[0].drooling : "-", 
//                 protectiveness : data[0].protectiveness ? data[0].protectiveness : "-", 
//                 trainability : data[0].trainability ? data[0].trainability : "-", 
//                 energy : data[0].energy ? data[0].energy : "-", 
//                 barking : data[0].barking ? data[0].barking : "-", 
//                 coat_length : data[0].coat_length ? data[0].coat_length : "-", 
//                 good_with_children : data[0].good_with_children ? data[0].good_with_children : "-", 
//                 good_with_strangers : data[0].good_with_strangers ? data[0].good_with_strangers : "-", 
//                 good_with_other_dogs : data[0].good_with_other_dogs ? data[0].good_with_other_dogs : "-"
//             };
//         })
//         .catch(erreur => {
//             console.error(erreur);
//         })
//     )

//     return await promise;

// };

