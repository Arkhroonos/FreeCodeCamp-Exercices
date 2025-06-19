// 1. Créer la liste
let playlist = [];

// 2. Ajouter une musique à la fin de la playlist
function addSongToEnd(list, endSong) {
    list.push(endSong);
    console.log(`${endSong} added to the end of the playlist.`);
    return list;
}

// 3. Ajouter une musique au début de la playlist
function addSongToStart(list, startSong) {
    list.unshift(startSong);
    console.log(`${startSong} added to the start of the playlist.`);
    return list;
}

// 4. Retirer une musique de la fin de la playlist
function removeLastSong(list) {
    if (list.length === 0) {
        console.log("No songs to remove.");
    } else {
        const removedSong = list.pop();
        console.log(`${removedSong} removed from the end of the playlist.`);
    }
    return list;
}

// 5. Retirer une musique du début de la playlist
function removeFirstSong(list) {
    if (list.length === 0) {
        console.log("No songs to remove.");
    } else {
        const removedSong = list.shift();
        console.log(`${removedSong} removed from the start of the playlist.`);
    }
    return list;
}

// 6. Sélection aléatoire dans la playlist
function getRandomSong(list) {
    if (list.length === 0) {
        console.log("The playlist is empty.");
    } else {
        const randomIndex = Math.floor(Math.random() * list.length);
        const randomItem = list[randomIndex];
        console.log(`Now playing: ${randomItem}`);
    }
}

// 7. Afficher la playlist complète
function showPlaylist(list) {
    if (list.length === 0) {
        console.log("The playlist is empty.");
    } else {
        console.log(`Playlist Songs: ${list.join(", ")}`);
    }
}