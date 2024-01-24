// variaveis 
var screen1 = window.document.querySelector('.screen1')
var screen2 = window.document.querySelector('.screen2')
var bto_1 = window.document.querySelector('button.bto_1')
var bto_2 = window.document.querySelector('button.bto_2')
var phrase = window.document.querySelector('h5#frase')
let lisFra = ["Choose your battles and don't give up until you beat them!", 
'Only without fear to make mistakes we learn how to get it right.',
'Life is short, so make it worth it!',
'Failure is only the opportunity more intelligently to begin again.', 
'True change starts from the inside out.', 
"Don't let your dreams lose their power to fly!", 
'If you want to be happy tomorrow, try today.',
'To run a marathon you have to take one step at a time.',
]


//funcoes 
function breakCookie() {
  switchingScreen()
  phrases()
} 

function breakAgain() {
  switchingScreen()
}

function switchingScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function phrases() {
  let p = Math.round(Math.random() * 8)
  phrase.innerHTML = `${lisFra[p]}`
}

//eventos 
bto_1.addEventListener('click', breakCookie)
bto_2.addEventListener('click', breakAgain)


