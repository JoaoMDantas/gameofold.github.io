//dados

let square={
    a1:'',a2:'',a3:'',
    b1:'',b2:'',b3:'',
    c1:'',c2:'',c3:''
};

let turn='';
let warning='';
let playing= false;

reset();
//events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item=>{
    item.addEventListener('click', itemClick);
});

 

//functions
function itemClick(event){
    let item= event.target.getAttribute('data-item');
    if(square[item]==='' &&playing==true){
        square[item]=player;
      
        renderSquare();
        changeplayer();
    }

    console.log(item);

}

function reset(){
    warning='';
    let random = Math.floor(Math.random() * 2);

    player = (random===0) ? 'x' : 'o';


    for(let i in square){
        square[i]='';

    }

    playing=true;

    renderSquare();
    renderInfo();

}

function renderSquare(){
    for (let i in square){
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML=square[i];
        
    }
    checkgame();

}

function renderInfo(){
    document.querySelector('.vez').innerHTML=player;
    document.querySelector('.resultado').innerHTML=warning;

}
function changeplayer(){
    if(player==='x'){
        player='o';
    }
    else{
        player='x';
    }
    renderInfo();
    //player= (player==='x') ? 'o' : 'x';
}
function checkgame(){
    if(checkWinnerFor('x')){
        warning='o "x" venceu';
        playing=false;
    }
    else if(checkWinnerFor('o')){
        warning='o "o" venceu';
        playing=false;
    }
    else if(isFull()){
        warning='Deu empate';
        playing=false;
    }
}

function checkWinnerFor( player){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ]

    for( let w in pos){
        let pArray= pos[w].split(',');
       let won=  pArray.every(option=>
            square[option]=== player)
            if(won){     
                return true;
            }
            

     
    }
}

function isFull(){
    for(let i in square){
        if(square[i]===''){
            return false;
        } 
    }return true;
}