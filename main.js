var num = Math.floor(Math.random()*100)+1; 
       
var connter = 1; 

let guessed;

document.getElementById("submitguess").onclick = function Check_key(){ 
       
    var key = document.getElementById("guessField").value; 

    if(connter<=10){
        if(key > 100 || key  < 1){
            document.querySelector('.result').textContent = "Please Enter Number Between 0 and 100"; 
        }else{
           
            if(key  == num){     
                document.querySelector('.result').textContent = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT ! ";                   
                connter = 1000000000;
            }else if(key  > num){     
                connter++;
                    document.querySelector('.result').textContent = "Too High"; 
                }else{ 
                    connter++; 
                    document.querySelector('.result').textContent = "Too Low"; 
                } 
                if(connter == 2){
                    guessed = " "+ key ;
                }else{
                    guessed += ", "+ key ;
                }
                document.querySelector('.TIMES').textContent = guessed; 
        }                
    }

    if(connter == 11){
            document.querySelector('.result').textContent = "GAME OVER! THE NUMBER IS " + num + "."; 

    }
            
    

}

