function Input(){
    let a = prompt("Digite o valor de A: ");
    let b = prompt("Digite o valor de B: ");
     if(isNaN(a) == false && a.length != 0 && isNaN(b) == false && b.length != 0){
         maiorMenor(a, b);
     } else{
         alert("Insira apenas números!");
         Input();
     }
 };

 
function maiorMenor(a, b){
    const v1Format = parseInt(a);
    const v2Format = parseInt(b);
    const rest = v1Format + v2Format;

    if(v1Format == v2Format ){
         if(rest > 10 && rest < 20){
            alert("Os valores " + a  + " e " + b + " são iguais, e a soma é " + rest + ", maior que 10 e menor que 20");
        } else if(rest > 20){
            alert("Os valores " + a  + " e " + b + " são iguais, e a soma é " + rest + ", maior que 20");
        }
        else{
            alert("Os valores " + a  + " e " + b + " são iguais, mas a soma é " +rest + " é menor que 10");
        }
    }
    if(v1Format != v2Format ){
        if(rest > 10 && rest < 20){
           alert("Os valores " + a  + " e " + b + " são diferentes, e a soma " +rest + " é maior que 10 e menor que 20");
        } else if(rest > 20){
            alert("Os valores " + a  + " e " + b + " são diferentes, e a soma " +rest + " é maior que 20");
       }else{
           alert("Os valores " + a  + " e " + b + " são diferentes, e a soma " +rest + " é menor que 10");
       }
   }
};
