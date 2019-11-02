let pronoun = ['both','few',"none"];
let adj = ['agreeable', 'brave','calm'];
let noun = ['user', 'road', 'student'];


let result = "";
pronoun.forEach((e) => {
    adj.forEach((i) =>{
        noun.forEach((j) => {
            result += e + i + j + ".com " +`<br>`;
        })

    })
});

window.onload = function(){
    console.log('hello from the console.')
}
document.querySelector('.result h2').innerHTML = result;