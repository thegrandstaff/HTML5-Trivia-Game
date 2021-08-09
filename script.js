//question class
class Question
{
  constructor(query, a, b, c, d, correct)
  {
    this.q = query;
    this.opA = a;
    this.opB = b;
    this.opC = c;
    this.opD = d;
    this.rightAnswer = correct;
  }

  displayEntireQuestion()
  {
    console.log(`${this.q}`);
    console.log(`A. ${this.opA}`);
    console.log(`B. ${this.opB}`);
    console.log(`C. ${this.opC}`);
    console.log(`D. ${this.opD}`);
  }
}

//declare the array for list of questions + options
const askQuestion = [];

//#1
askQuestion.push(new Question("Who invented the WWW?", "Tim Berners-Lee", "Donald Trump", "Robert Downey Jr.", "Richard Dalmacio", "a"));
//#2
askQuestion.push(new Question("Who is Canada's current Prime Minister?","Stephen Harper","Paul Martin","Justin Trudeau","Doug Ford", "c"));
//#3
askQuestion.push(new Question("What is the biggest city in the GTA","Brampton","Toronto","North York", "Mississauga", "b"));
//#4
askQuestion.push(new Question("What colour do you get for mixing blue and yellow?","Red","Orange","Yellow","Green","d"));
//#5
askQuestion.push(new Question("Which is NOT one of the seven dwarfs in Snow White?","Sneaky","Dopey","Bashful", "Doc", "a"));
//#6
askQuestion.push(new Question("What is the chemical formula for water?","H21","HO2","Wa","H2O", "d"));
//#7
askQuestion.push(new Question("What is the largest freshwater lake?","Lake Ontario","Lake Superior","Lake Evermore", "Lake Huron", "b"));
//#8
askQuestion.push(new Question("Known as the Lady of the Lamp in the crimean war, what is the name of this famous nurse?","Bathory","Claudius","Nightingale", "Blavatsky", "c"));
//#9
askQuestion.push(new Question("In a Japanese haiku, how many syllables are in the second stanza?","Three","Six","Five", "Seven", "d"));
//#10
askQuestion.push(new Question("Who invented the telephone?","Alexander Graham Bell","Isaac Newton","Donatello", "Thomas Edison", "a"));
//#11
askQuestion.push(new Question("How high is Mt. Everest?","4884 m","8848 m","8488 m", "8884 m", "b"));
//#12
askQuestion.push(new Question("From Seton's novel, Lobo the King of Currumpaw, what animal was Lobo?","Lion","Tiger","Wolf","Gorilla", "c"));
//#13
askQuestion.push(new Question("What is Superman's main weakness?","Silver bullets","Cream soda","Copper", "Kryptonite", "d"));
//#14
askQuestion.push(new Question("Who is the Count of Monte Cristo?","Edmond Dantes","Dracula","Nosferatu", "Count Chocula", "a"));
//#15
askQuestion.push(new Question("Which of these foods are NOT Kosher?","Salmon","Crab","Beef", "Chicken", "b"));
//#16
askQuestion.push(new Question("How many provinces are there in Canada?","Twenty","Fifteen","Ten", "Five", "c"));
//#17
askQuestion.push(new Question("What year did Canada become a country?","1999","1889","1969", "1867", "d"));
//#18
askQuestion.push(new Question("Which theological angel was the supposed twin brother of Metatron?","Sandalphon","Lucifer","Michael", "Gabriel", "a"));
//#19
askQuestion.push(new Question("Which of these is NOT a Nintendo product?","Wii","Playstation","Amiibo", "GameCube", "b"));
//#20
askQuestion.push(new Question("How many doughnuts are in a dozen?","Six","Eight","Twelve", "Ten", "c"));
//#21
askQuestion.push(new Question("In the cartoon, Spongebob Squarepants, what is Spongebob's job?","Accountant","Mailman","Grocery store clerk", "Fry cook", "d"));
//#22
askQuestion.push(new Question("Who was the first unit captain of the Shinsengumi?","Okita Souji","Oda Nobunaga","Hijikata Toshizou", "Tokugawa Ieyasu", "a"));
//#23
askQuestion.push(new Question("What is the capital city of Italy?","Paris","Rome","Athens", "Toronto", "b"));
//#24
askQuestion.push(new Question("Which nail grows the fastest?","Index","Ring","Middle", "Pinky", "c"));
//#25
askQuestion.push(new Question("How many states are in the United States of America?","Twenty","Thirty","Forty", "Fifty", "d"));


//the instructions and aesthetics that appear when the game first loads
const gameLogo = document.querySelector("#logo");
const explainRules = document.querySelector("#rules");
const playButton = document.querySelector("#playButton");

//user information textboxes - initially invisible (through CSS) 
const p_Name = document.querySelector("#name");
const p_Sex = document.querySelector("#sex");
const p_Age = document.querySelector("#age");
const submitInfo = document.querySelector("#submit");

//actual game - initially invisible (through CSS)
const displayQ = document.querySelector("#displayQuestions");

//querySelectors for the questions and options
const displayRound = document.querySelector("#roundNumber");
const question = document.querySelector("#question");
const choiceA = document.querySelector("#option1");
const choiceB = document.querySelector("#option2");
const choiceC = document.querySelector("#option3");
const choiceD = document.querySelector("#option4");

//querySelectors for the option buttons (user input)
const selectA = document.querySelector("#aButton");
const selectB = document.querySelector("#bButton");
const selectC = document.querySelector("#cButton");
const selectD = document.querySelector("#dButton");

//timer querySelector
const clock = document.querySelector("#timer");

//moneytree querySelector
const moneyTree = document.querySelector("#moneyTree1");
//round 2 moneyTree
const moneyTree2 = document.querySelector("#moneyTree2");

//"bank" button querySelector
const bankButton = document.querySelector("#bankMoney");

let randomIndex=Math.floor(Math.random() * askQuestion.length);

//moneyEarned is the variable that defines the total money the player banks
let moneyEarned = 0; //starting off with $0
//prizeMoney is the variable that defines the money that the user CAN bank
let prize = 0; //starting off with $0

//a visual for the user to see how much money they earned so far
const displayBank = document.querySelector("#playerMoney");

//round holds the round number of the game. You start at "Round 1"
let round = 1;

//treeLevel is the "money tree level". e.g. $0 is level 0 and $1000 is level 1 in "Round 1".
let treeLevel = 0; //start off at 0 ($0)

//set of querySelectors for round 1 money tree "buttons"
const r1lvl0 = document.querySelector("#level0");
const r1lvl1 = document.querySelector("#level1");
const r1lvl2 = document.querySelector("#level2");
const r1lvl3 = document.querySelector("#level3");
const r1lvl4 = document.querySelector("#level4");
const r1lvl5 = document.querySelector("#level5");
const r1lvl6 = document.querySelector("#level6");
const r1lvl7 = document.querySelector("#level7");
const r1lvl8 = document.querySelector("#level8");

//set of querySelectors for round 2 money tree "buttons"
const r2lvl0 = document.querySelector("#r2level0");
const r2lvl1 = document.querySelector("#r2level1");
const r2lvl2 = document.querySelector("#r2level2");
const r2lvl3 = document.querySelector("#r2level3");
const r2lvl4 = document.querySelector("#r2level4");
const r2lvl5 = document.querySelector("#r2level5");

//querySelector for the game's timer
let timer = document.querySelector("#timer");

//sdq = "sudden death questions"
//for the sudden death round, they need to answer 5 questions; this is a counter
let sdq = 5;

//if the player presses bank or gets a question wrong, call this function
function squareOne()
{
  treeLevel = 0;
  prize = 0;
  if (round == 1)
  {
    r1lvl0.style.backgroundColor = "red";
    r1lvl1.style.backgroundColor = "white";
    r1lvl2.style.backgroundColor = "white";
    r1lvl3.style.backgroundColor = "white";
    r1lvl4.style.backgroundColor = "white";    
    r1lvl5.style.backgroundColor = "white";
    r1lvl6.style.backgroundColor = "white";
    r1lvl7.style.backgroundColor = "white";
    r1lvl8.style.backgroundColor = "white";
  }
  else if (round == 2)
  {
    r2lvl0.style.backgroundColor = "red";
    r2lvl1.style.backgroundColor = "white";
    r2lvl2.style.backgroundColor = "white";
    r2lvl3.style.backgroundColor = "white";
    r2lvl4.style.backgroundColor = "white";    
    r2lvl5.style.backgroundColor = "white";
  }
}

//function that moves up and down the money tree
function moveTree()
{
  if (round == 1) //money tree levels for round 1
  {
    if (treeLevel == 0)
    {
      squareOne();
    }
    else if (treeLevel == 1)
    {
      prize = 1000;
      r1lvl1.style.backgroundColor = "red";
    }
    else if (treeLevel == 2)
    {
      prize = 5000;
      r1lvl2.style.backgroundColor = "red";
    }
    else if (treeLevel == 3)
    {
      prize = 10000;
      r1lvl3.style.backgroundColor = "red";
    }
    else if (treeLevel == 4)
    {
      prize = 50000;
      r1lvl4.style.backgroundColor = "red";
    }
    else if (treeLevel == 5)
    {
      prize = 75000;
      r1lvl5.style.backgroundColor = "red";
    }
    else if (treeLevel == 6)
    {
      prize = 125000;
      r1lvl6.style.backgroundColor = "red";
    }
    else if (treeLevel == 7)
    {
      prize = 250000;
      r1lvl7.style.backgroundColor = "red";
    }
    else if (treeLevel == 8)
    {
      prize = 500000;
      r1lvl8.style.backgroundColor = "red";
    }
  }
  else if (round == 2)
  {
    if (treeLevel == 0)
    {
      squareOne();
    }
    else if (treeLevel == 1)
    {
      prize = 1000;
      r2lvl1.style.backgroundColor = "red";
    }
    else if (treeLevel == 2)
    {
      prize = 10000;
      r2lvl2.style.backgroundColor = "red";
    }
    else if (treeLevel == 3)
    {
      prize = 75000;
      r2lvl3.style.backgroundColor = "red";
    }
    else if (treeLevel == 4)
    {
      prize = 125000;
      r2lvl4.style.backgroundColor = "red";
    }
    else if (treeLevel == 5)
    {
      prize = 500000;
      r2lvl5.style.backgroundColor = "red";
    }
  }
}

submitInfo.addEventListener("click", function()
{
  //displays the question with options + buttons
  //GAME BEGINS
  displayQ.style.display = "block";
  displayRound.innerHTML = `Round ${round}`;
  question.innerHTML = askQuestion[randomIndex].q;
  choiceA.innerHTML = 'A. ' + askQuestion[randomIndex].opA;
  choiceB.innerHTML = 'B. ' + askQuestion[randomIndex].opB;
  choiceC.innerHTML = 'C. ' + askQuestion[randomIndex].opC;
  choiceD.innerHTML = 'D. ' + askQuestion[randomIndex].opD;
  clock.style.display = "block";
  bankButton.style.display = "block";
  moneyTree1.style.display = "block";
  displayBank.style.display = "block";
  squareOne();
  displayBank.innerHTML = `Player Money: $${moneyEarned}`;
  //timer starts
  const intervalRef = setInterval(countDown,1000);
  //accepts player info
  let playerName = p_Name.value.trim();
  //removes the player info form from sight
  playerInfo.style.display = "";
  //console log test of whether or not information is stored
  console.log(playerName);
});

//randomizes questions - changes answers to new answers
function randomizeOptions()
{
  //random number generator
  let ranNum=Math.floor(Math.random() * 3);
  
  //creates substitute variables for the options
  let dummyA = askQuestion[randomIndex].opA;
  let dummyB = askQuestion[randomIndex].opB;
  let dummyC = askQuestion[randomIndex].opC;
  let dummyD = askQuestion[randomIndex].opD;

  if (ranNum == 0)
  {
    askQuestion[randomIndex].opA = dummyB;
    askQuestion[randomIndex].opB = dummyC;
    askQuestion[randomIndex].opC = dummyD;
    askQuestion[randomIndex].opD = dummyA;
    if (askQuestion[randomIndex].rightAnswer == 'a')
    {
      askQuestion[randomIndex].rightAnswer = 'd';
    }
    else if (askQuestion[randomIndex].rightAnswer == 'b')
    {
      askQuestion[randomIndex].rightAnswer = 'a';
    }
    else if (askQuestion[randomIndex].rightAnswer == 'c')
    {
      askQuestion[randomIndex].rightAnswer = 'b';
    }
    else if (askQuestion[randomIndex].rightAnswer == 'd')
    {
      askQuestion[randomIndex].rightAnswer = 'c';
    }
  }
  else if (ranNum == 1)
  {
    askQuestion[randomIndex].opA = dummyC;
    askQuestion[randomIndex].opB = dummyD;
    askQuestion[randomIndex].opC = dummyA;
    askQuestion[randomIndex].opD = dummyB;

    if (askQuestion[randomIndex].rightAnswer == 'a')
    {
      askQuestion[randomIndex].rightAnswer = 'c';
    }
    else if (askQuestion[randomIndex].rightAnswer == 'b')
    {
      askQuestion[randomIndex].rightAnswer = 'd';
    }
    else if (askQuestion[randomIndex].rightAnswer == 'c')
    {
      askQuestion[randomIndex].rightAnswer = 'a';
    }
    else if (askQuestion[randomIndex].rightAnswer == 'd') 
    {
      askQuestion[randomIndex].rightAnswer = 'b';
    }
    console.log(ranNum);
    console.log(askQuestion[randomIndex].rightAnswer);
  }
  else if (ranNum == 2)
  {
    askQuestion[randomIndex].opA = dummyD;
    askQuestion[randomIndex].opB = dummyA;
    askQuestion[randomIndex].opC = dummyB;
    askQuestion[randomIndex].opD = dummyC;

      if (askQuestion[randomIndex].rightAnswer == 'a')
      {
        askQuestion[randomIndex].rightAnswer = 'b';
      }
      else if (askQuestion[randomIndex].rightAnswer == 'b')
      {
        askQuestion[randomIndex].rightAnswer = 'c';
      }
      else if (askQuestion[randomIndex].rightAnswer == 'c')
      {
        askQuestion[randomIndex].rightAnswer = 'd';
      }
      else if (askQuestion[randomIndex].rightAnswer == 'd')
      {
        askQuestion[randomIndex].rightAnswer = 'a';
      }
      console.log(ranNum);
      console.log(askQuestion[randomIndex].rightAnswer);
  }
}

//function that moves the player to "Round 2"
function roundTwo()
{
  round = 2;
  displayRound.innerHTML = `Round ${round}`;
  timeLeft = 45;
  moneyTree.style.display = "none";
  moneyTree2.style.display = "block";
  squareOne();
  alert("Moving on to Round 2");
}

//function that moves the player to "Round 3"
function roundThree()
{
  round = 3;
  displayRound.innerHTML = `Round ${round}`;
  timeLeft = 30;
  moneyTree2.style.display = "none";
  bankButton.style.display = "none";
  alert("Moving on to SUDDEN DEATH! Get 5 questions right!");
}

function winner()
{
  timeLeft = 0;
  alert(`Congrats! You won $${moneyEarned}!`);//they win
  this.close();
}

function gameover()
{
  timeLeft = 0;
  alert("Game Over!");
  this.close();
}

//eventlistener for the "BANK" button
bankButton.addEventListener("click", function()
{
  moneyEarned += prize;
  //if the player earns at least $500k in round 1, they move to round 2
  if (moneyEarned >= 500000 && round == 1)
  {
    //this ensures that the banked value DOES NOT go over $500k
    moneyEarned = 500000;
    roundTwo();
  }
  //if the plater earns at least $1 million in round 2, they move to round 3
  else if (moneyEarned >= 1000000 && round == 2)
  {
    //this ensures that the banked value DOES NOT go over $1 million
    moneyEarned = 1000000;
    roundThree();
  }
  displayBank.innerHTML = `Player Money: $${moneyEarned}`;
  squareOne();
});

//change question function to be called later
function changeQuestion()
{
  askQuestion.splice(randomIndex, 1);//delete question
  randomIndex=Math.floor(Math.random() * askQuestion.length);
  randomizeOptions();
  question.innerHTML = askQuestion[randomIndex].q;
  choiceA.innerHTML = 'A. ' + askQuestion[randomIndex].opA;
  choiceB.innerHTML = 'B. ' + askQuestion[randomIndex].opB;
  choiceC.innerHTML = 'C. ' + askQuestion[randomIndex].opC;
  choiceD.innerHTML = 'D. ' + askQuestion[randomIndex].opD;
}

//when the user selects "A" for a questions:
aButton.addEventListener("click", function()
{
  //user selects "A"
  if (askQuestion[randomIndex].rightAnswer == 'a')
  {
    treeLevel += 1;//player goes up money tree when they get a right answer
    if (round == 3)//if the player is in sudden death... 
    {
      //right answers count down the required number of questions left to win!
      sdq--;
    }
    if (sdq <= 0)//if the player answers all sudden death questions right...
    {
      winner();//they win
    }
    else
    {
      alert("That is correct!");
      changeQuestion();
    }
  }
  else //gets it wrong
  {
    if (round == 3)//if player is in "Sudden Death" they lose
    {
      gameover();
    }
    else
    {
      squareOne();//player goes down the money tree when they get a question wrong
      alert("That is incorrect!");
      changeQuestion();
    }
  }
  moveTree();
});

//when the user selects "B" for a questions:
bButton.addEventListener("click", function()
{
  //user selects "B"
  if (askQuestion[randomIndex].rightAnswer == 'b')
  {
    treeLevel += 1;//player goes up money tree when they get a right answer
    if (round == 3)//if the player is in sudden death... 
    {
      //right answers count down the required number of right answers left to win!
      sdq--;
    }
    if (sdq <= 0)//if the player answers all sudden death questions right...
    {
      winner();//they win
    }
    else
    {
      alert("That is correct!");
      changeQuestion();
    }
  }
  else //gets it wrong
  {
    if (round == 3)//if player is in "Sudden Death"
    {
      gameover();
    }
    else
    {
      squareOne();//player goes down the money tree when they get a question wrong
      alert("That is incorrect!");
      changeQuestion();
    }
  }
  moveTree();
});

//when the user selects "C" for a questions:
cButton.addEventListener("click", function()
{
  //user selects "C"
  if (askQuestion[randomIndex].rightAnswer == 'c')
  {
    treeLevel += 1;//player goes up money tree when they get a right answer
    if (round == 3)//if the player is in sudden death... 
    {
      //right answers count down the required number of right answers left to win!
      sdq--;
    }
    if (sdq <= 0)//if the player answers all sudden death questions right...
    {
      winner();//they win
    }
    else
    {
      alert("That is correct!");
      changeQuestion();
    }
  }
  else //gets it wrong
  {
    if (round == 3)//if player is in "Sudden Death"
    {
      gameover();
    }
    else
    {
      squareOne();//player goes down the money tree when they get a question wrong
      alert("That is incorrect!");
      changeQuestion();
    }
  }
  moveTree();
});

//when the user selects "D" for a questions:
dButton.addEventListener("click", function()
{
  //user selects "D"
  if (askQuestion[randomIndex].rightAnswer == 'd')
  {
    treeLevel += 1;//player goes up money tree when they get a right answer
    if (round == 3)//if the player is in sudden death... 
    {
      //right answers count down the required number of right answers left to win!
      sdq--;
    }
    if (sdq <= 0)//if the player answers all sudden death questions right...
    {
      winner();//they win
    }
    else
    {
      alert("That is correct!");
      changeQuestion();
    }
  }
  else //gets it wrong
  {
    if (round == 3)//if player is in "Sudden Death"
    {
      gameover();
    }
    else 
    {
      squareOne();//player goes down the money tree when they get a question wrong
      alert("That is incorrect!");
      changeQuestion();
    }
  }
  moveTree();
});


//RULES - button
let rulesclicked = false;
explainRules.addEventListener("click",function()
{
  if (rulesclicked == false)//if button has yet to be clicked
  {
  output.innerHTML=("This is a trivia game. Answer the questions consecutively in the time limit in each round to unlock more levels on the Money Tree. If you answer wrong, you go back to the bottom of the tree. You can bank money from the Money Tree to keep money safe, except for Round 3. Round 3 is SUDDEN DEATH. You will lose all of your money if you answer any question incorrectly during Round 3. When you are ready, press [START GAME] to begin playing! Good luck!").fontsize(1); 
  rulesclicked = true;//"button has been clicked"
  }
  else
  {
    output.innerHTML = "";//if the button was clicked, remove the rules
    rulesclicked = false;//reset button
  }
  //playButton.value="Start";
  //playButton.style.backgroundColor = "red";
});

//START GAME - button
playButton.addEventListener("click",function()
{
  gameLogo.style.display = "none";  
  this.style.display = "none";//remove play button
  explainRules.style.display = "none";//remove "rules button"
  output.style.display = "none";//removes rules (if displayed)
  playerInfo.style.display = "block";
});


//timer
let timeLeft = 60;
timer.innerHTML=`${timeLeft}`;
function countDown()
{
  if (timeLeft == 0)
  {
    if (round == 1)
    {
      //player moves from round 1 to round 2 on timeout, even if they earned nothing
      roundTwo();
    }
    else if (round == 2 && moneyEarned > 0)
    {
      //if the player earned anything in round 2, they move to round 3 on timeout
      roundThree();
    }
    else if (round == 2 && moneyEarned == 0)
    {
      //if the player doesn't earn money in round 2, they lose forever!!!
      alert("End of Round 2. You don't have any money banked. Game Over!");
      this.close();
    }
    else if (round == 3 && sdq > 0)
    {
      alert(`Game Over!`);
      this.close();
    }
  }
  timeLeft--; 
  timer.innerHTML=`${timeLeft}`;
}