var guests = [];

function agregarmiembros() {
    var name = document.getElementById("name").Value;
    var age = document.getElementById("age").Value;

    if (name ==="" || age === null ) {
        alert ("llena correctamente los datos")
    } else {
        guests.push(name)
        var list = "<li>" +guests.join("</li><li>") + "</li>";
        document.getElementById("list").innerHTML = list
    }
}