








// declering used variables
let Score,ActivePlayer,RoundScore,gamePlaying;
/////////////////////////
function init(){

        Score = [0, 0];
    ActivePlayer = 0;
    RoundScore = 0;
        gamePlaying = true;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

}
init()

function NextPalyer(){
    ActivePlayer ===0 ? ActivePlayer=1:ActivePlayer=0;
    RoundScore=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('.dice').style.display = 'none';
}

function Winner(){
    if(Score[ActivePlayer]>=20){

        document.querySelector(`.player-${ActivePlayer}-panel`).classList.remove('active')
        document.querySelector(`.player-${ActivePlayer}-panel`).classList.add('winner')
        document.querySelector(`#name-${ActivePlayer}`).textContent='Winner!'
        document.querySelector(`#name-${ActivePlayer}`).textContent='Winner!'
        document.querySelector('.dice').style.display = 'none';
        gamePlaying=false


    }else {
        NextPalyer()
    }



}




document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click',()=>{
        if(gamePlaying) {
            // get rndom num
            let Dice = Math.floor(Math.random() * 6) + 1;
// load image
            let DiceDom = document.querySelector('.dice');
            DiceDom.style.display = 'block';
            DiceDom.src = 'dice-' + Dice + '.png';
            // update data
            if (Dice !== 1) {
                RoundScore += Dice;
                document.querySelector('#current-' + ActivePlayer).textContent = RoundScore
            } else {

                NextPalyer()


            }
        }

})
document.querySelector('.btn-hold').addEventListener('click',()=>{
    if(gamePlaying) {
        Score[ActivePlayer] += RoundScore;
        document.querySelector(`#score-${ActivePlayer}`).textContent = Score[ActivePlayer];
        Winner()
    }

})
document.querySelector('.btn-new').addEventListener('click',init)