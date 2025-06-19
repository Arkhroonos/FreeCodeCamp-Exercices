/* Crée une fonction appelée maskUsername qui prend un nom d’utilisateur (string) comme paramètre.

La fonction doit :
	•	Garder la première lettre et la dernière lettre visibles,
	•	Remplacer les lettres du milieu par des dièses #.

🔹 Exemple d’entrée :
maskUsername("Username")
🔹 Résultat attendu :
"U######e"

Étapes à suivre :
	1.	Vérifie que le nom contient au moins 3 caractères,
	2.	Utilise slice pour prendre la première et la dernière lettre,
	3.	Utilise repeat pour insérer le bon nombre de # entre les deux,
	4.	Retourne le nom masqué.
 */

function maskUserName(username){
    if (username.length < 3){
        return "Username too short to mask.";
    }
    const firstChar = username[0];
    const lastChar = username[username.length - 1];
    const numStars = username.length -2;
    const stars = "*".repeat(numStars);
    return "This is your Name " + firstChar + stars + lastChar;
}

console.log(maskUserName("Khroonos"));