// variaveis 
var screen1 = window.document.querySelector('.screen1')
var screen2 = window.document.querySelector('.screen2')
var bto_1 = window.document.querySelector('button.bto_1')
var bto_2 = window.document.querySelector('button.bto_2')
var phrase = window.document.querySelector('h5#frase')
let lisFra = ['Escolha as suas batalhas e não desista até vencê-las.', 
'É sem medo de errar que conseguimos os melhores acertos.',
'A vida é muito curta, por isso, faça valer a pena.',
'O fracasso é apenas uma oportunidade de começar de novo.', 
'A verdadeira mudança começa de dentro para fora.', 
'Não deixe que seus sonhos percam a força de voar! ', 
'Se queres ser feliz amanhã, tenta hoje mesmo.',
'Para percorrer uma maratorna é preciso dar um passo de cada vez.',
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


