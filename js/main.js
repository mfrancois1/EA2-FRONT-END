console.log("Hola mundo como estan");
var variabre =true;
const constante=5;
console.log(constante);
variable=false;
console.log(variable);

///Operadores Arismeticos
var Num1=15
var Num2=3
var vNom="Juan Calos"
var vApellidos="Osses Vidal"
console.log("Suma:",Num1+Num2);
console.log("Resta:",Num1-Num2);
console.log("Division:",Num1/Num2);
console.log("Multiplicacion:",+Num1*Num2);
console.log("Nombre Compleo:",+Nom+""+vApellidos);
console.log("Resto de Division:",Num1%2);

// Sentencias condicionales
if(Num1%2==0){
    console.log("El",Num1,"Es Numero Par");
}
else {
    console.log("El",Num1,"Es Numero ImPar");
}

//Operadores Comparaciones
/*
varvGlosa="el Numero:"
if(Num1>Num2){
}
*/

//Funcciones
function Suma(){
    var vfNum1=document.getElementById("vNum1").value;
    var vfNum2=document.getElementById("vNum2").value;
    if(vfNum1===""|| vfNum2===""){
        alert("debe completar todos los datos");}
    else{ 
        var vfsuma = parselnt(vfNum1) + parselnt(vfNum2); 
        document.getElementById("vResultado").value=vfsuma
    }
}

    





