//chiedo all’utente il suo nome
const userName = prompt ("Qual'è il tuo nome?");
console.log(userName);
//chiedo il suo cognome,
const userSurname = prompt ("qual'è il tuo cognome");
console.log(userSurname);
//chiedo il suo colore preferito
const userColor = prompt ("qual'è il tuo colore preferito");
console.log(userColor);

// creo il messaggio
const userMessage = 'Questa è la tua pw:' + userName +  userSurname + userColor;
console.log(userMessage);

//scrivo sulla pagina nomecognomecolorepreferito21
document.getElementById('user-message').innerHTML = userMessage + "21";
