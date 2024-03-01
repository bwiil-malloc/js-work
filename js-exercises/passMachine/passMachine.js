
let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here

if(!machineActive){
machineResult = 'Please switch on the machine to make use of it😶'
}else{
pwd==='cheese' ? pwdResult='Congratulations, you have been successfully logged in! 😍':  pwdResult='Your password is incorrect, try again😣';
}
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);
    
