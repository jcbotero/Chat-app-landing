
var form = document.getElementById("myform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm); // esta 3 lines de code me previente que el submit button me refresque la pagina al darle click

document.getElementById("sub").addEventListener("click" , function() { //el onclick sobre el submit button
    const node = document.createElement("p"); // para crear el div en este caso un <p>
    const textnode = document.createTextNode(document.getElementById("inp").value); //creo el textnode (texto o valor que va a tener el nuevo p) que es el .value del input
    node.appendChild(textnode); //append o uno el node (<p>) al textnode (valor del input del chat)
    document.getElementById("textadd").appendChild(node); // le digo al parent div "textadd" que me agrege el node con su valor ( <p> con el valor del input)
} ) // asi agrego <p> al ultimo div del chat 