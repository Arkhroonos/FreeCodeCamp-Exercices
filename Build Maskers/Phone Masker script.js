/* Crée une fonction appelée maskPhoneNumber qui prend un numéro de téléphone sous forme de chaîne en paramètre.

La fonction doit :
	•	Garder visibles les 2 premiers chiffres et les 2 derniers chiffres,
	•	Remplacer tous les chiffres entre les deux par des étoiles *.

🔹 Exemple d’entrée :
maskPhoneNumber("0612345678")
🔹 Résultat attendu :
"06******78"

Étapes à suivre :
	1.	Utilise slice pour extraire les deux premiers chiffres,
	2.	Utilise slice pour obtenir les deux derniers chiffres,
	3.	Calcule combien de chiffres doivent être remplacés par des *,
	4.	Assemble la chaîne finale et retourne-la. */

    function phoneMasker(phone){
        let firstTwoDigits = phone.slice(0,2);
        let lastTwoDigits = phone.slice(-2);
        let numStars = phone.length -4;
        let stars = "*".repeat(numStars)
        return firstTwoDigits + stars +lastTwoDigits;   
    };

    let phone = "0666483991";
    console.log(phoneMasker(phone))
