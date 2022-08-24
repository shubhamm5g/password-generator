const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let newPassword1=document.querySelector("#new-password1");
let newPassword2=document.querySelector("#new-password2");
function generatepass(){
    var random1=''
    var random2=''
    var length=15

    for(let i=0;i<length;i++){
        random1 += characters[(Math.floor(Math.random()*characters.length))]
        newPassword1.textContent=random1
    }
    for(let i=0;i<length;i++){
        random2 += characters[(Math.floor(Math.random()*characters.length))]
        newPassword2.textContent=random2
    }
}
