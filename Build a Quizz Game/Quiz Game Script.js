const questions = [
    {category : "Geography",
        question : "What is the capital of France ?",
        choices : ["Paris","Bordeaux","Lyon"],
        answer: "Paris"
    },
    {category: "Video Games",
        question : "What is the name of the main character in Horizon Zero Dawn ?",
        choices : ["Aloy","Lara Croft","Zelda"],
        answer: "Aloy"
    },
    {category: "Video Games",
        question : "What is the name of Kratos' main weapon in God of War (2018) ?",
        choices : ["Blade of Chaos","Leviathan Axe","Spear of Destiny"],
        answer: "Leviathan Axe"
    },
    {category : "Video Games",
        question : "Bayek of Siwa is the main character of which game ?",
        choices : ["Infamous: Second Son", "Ghost of Tsushima", "Assassin's Creed Origins"],
        answer: "Assassin's Creed Origins"
    },
    {category : "Video Games",
        question : "In Which Batman Arkham game Batman dies by the end of the game ?",
        choices : ["Batman: Arkham Asylum", "Batman: Arkham City", "Batman: Arkham Knight"],
        answer: "Batman: Arkham Knight"
    }
]

function getRandomQuestion (questions){
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex]
}

function getRandomComputerChoice(choices){
    const randomChoiceIndex = Math.floor(Math.random() * choices.length);
    return choices[randomChoiceIndex];
}

function getResults(question, computerChoice) {
  const correctAnswer = question.answer;
  if (computerChoice === correctAnswer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${correctAnswer}.`;

}
}