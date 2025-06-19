//  1. Initialiser la variable lunches
let lunches = [];

//  2. Ajouter un lunch à la fin
function addLunchToEnd(list, lunchItem) {
  list.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return list;
}

//  3. Ajouter un lunch au début
function addLunchToStart(list, lunchItem) {
  list.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return list;
}

//  4. Supprimer le dernier lunch
function removeLastLunch(list) {
  if (list.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = list.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return list;
}

//  5. Supprimer le premier lunch
function removeFirstLunch(list) {
  if (list.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = list.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return list;
}

//  6. Sélectionner un lunch au hasard
function getRandomLunch(list) {
  if (list.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomItem = list[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
}

//  7. Afficher tout le menu
function showLunchMenu(list) {
  if (list.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${list.join(', ')}`);
  }
}