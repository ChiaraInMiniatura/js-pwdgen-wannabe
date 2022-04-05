// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22

const firstName =prompt("Inserisci il tuo Nome");

const lastName =prompt("Inserisci il tuo Cognome");

const color = prompt("Inserisci il tuo coloro preferito");


const infoUtenteAttaccato =
`
<span>${firstName}${lastName}${color}22</span>

`
document.getElementById("info-utente-attaccato").innerHTML = infoUtenteAttaccato;


const infoUtente =
`
<p>Nome: ${firstName}</p>
<p>Cognome: ${lastName}</p>
<p>Colore preferito: ${color}</p>

`;

document.getElementById("info-utente").innerHTML = infoUtente + "22";
