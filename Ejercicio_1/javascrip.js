function displayUserDataInScreen(name){
    if(document.getElementById("r1").checked) {
        valueType = document.getElementById("r1").value;
    }else if (document.getElementById("r2").checked) {
        valueType =document.getElementById("r2").value;
    }else if (document.getElementById("r3").checked){
        valueType =document.getElementById("r3").value;

    } 

    document.getElementById("p1").innerHTML="Hola" + name + "!";
    document.getElementById("p2").innerHTML="Tu eres: " + valueType;

}
