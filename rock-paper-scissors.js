   
let playerMove='';
//Retrieving the score from Local Storage
const score=JSON.parse(localStorage.getItem('score'))||
{
  Wins:0,
  Ties:0,
  Losses:0
}

function pickComputerMove(){
  let computerMove=(Math.random())*3;
  if(computerMove<=1){
    computerMove='Rock';
  }else if(computerMove<=2&&computerMove>1){
    computerMove='Paper';
  }else if(computerMove>2 && computerMove<=3){
    computerMove='Scissors';
  }
  return computerMove;
};

function pickPlayerMove(playerMove){
 const computerMove = pickComputerMove();
  let result=''
  
  if(playerMove==='Rock'){
  if(computerMove==='Rock'){
    result='You Tie!'
  } else if(computerMove==='Paper'){
    result='You Lose!'
  }else if(computerMove==='Scissors'){
    result='You Win!'
  }
} else if(playerMove==='Paper'){
  if(computerMove==='Rock'){
    result='You Win!'
  } else if(computerMove==='Paper'){
    result='You Tie!'
  }else if(computerMove==='Scissors'){
    result='You Lose!'
  }
}else{
  if(computerMove==='Rock'){
    result='You Lose!'
  } else if(computerMove==='Paper'){
    result='You Win!'
  }else if(computerMove==='Scissors'){
    result='You Tie!'
  };
};

  if(result==='You Win!'){
    score.Wins+=1;
  }else if(result==='You Tie!'){
    score.Ties+=1;
  }else if(result==='You Lose!'){
    score.Losses+=1;
  };

  //Storing the score in Local Storage
  localStorage.setItem('score', JSON.stringify(score))
  const message=document.querySelector('.js-outcome')
  message.innerHTML= `Wins: ${score.Wins}  Ties: ${score.Ties}  Losses: ${score.Losses}`

  //putting the results on the page
  
  const moves=document.querySelector('.js-moves');
  moves.innerHTML=`    You
    <img class="move-icon" src=" ${playerMove}-emoji.png" alt="player move">
    <img class="move-icon" src="${computerMove}-emoji.png" alt="computer move">
    computer`

  const resultsMessage=document.querySelector('.js-game-result');
  resultsMessage.innerHTML=`${result}`


  updateScore();

};

  function updateScore(){
    const message=document.querySelector('.js-outcome')
  message.innerHTML= `Wins: ${score.Wins}  Ties: ${score.Ties}  Losses: ${score.Losses}`
  }

