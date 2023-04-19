let arry = ["1","2","3","4","5"];
let arry2 = ["17","19","21"];
let arry3 = ["7","7","7"];


function puntaje(str) {
    let temp = 0;
    let siete = false;
    for (let i = 0; i < str.length; i++) {

        const elemento = Number(str[i]);

        if (elemento % 2 === 0) {
            temp += 2;
        }else{
            temp +1;
        }

        if (elemento === 7) {
            siete = true;
        }
        if (siete) {
            temp += 3;
        }
    }
    if (siete) {
        temp += 3;
    }
    return temp;
}

console.log(puntaje(arry));
console.log(puntaje(arry2));
console.log(puntaje(arry3));