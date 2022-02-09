'use strict'

const ex1 = () => console.log('ex1');
const ex2 = () => console.log('ex2');
const ex = () => {
console.log('ex');
setTimeout(ex1, 1000);
ex2();
}
ex();

//Here 'ex' is called so first it excutes the output , then 'ex1' should be executed because of setTimeout it is executed last. 