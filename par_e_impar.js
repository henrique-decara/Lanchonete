var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var pares = new Array;

var impares = new Array;

for (i in numeros){

    if (i % 2 == 0) {

        pares.push(i);
        
        }else{
        
         impares.push(i);
        
        }
}

document.write(pares + impares)