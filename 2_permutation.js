
'use strict'

// function permute(permutation) {
//     var length = permutation.length,
//         result = [permutation.slice()],
//         c = new Array(length).fill(0),
//         i = 1, k, p;
  
//     while (i < length) {
//       if (c[i] < i) {
//         k = i % 2 && c[i];
//         p = permutation[i];
//         permutation[i] = permutation[k];
//         permutation[k] = p;
//         ++c[i];
//         i = 1;
//         // result.push(permutation.slice());
//         console.log(permutation.slice());
//       } else {
//         c[i] = 0;
//         ++i;
//       }
//     }
//     return result;
//   }
  
//   console.log(permute([1,2,3]));

let string="ABC";
function permutation( string, result){
    if(string.length === 0){
        count++;
        console.log(result);
    }else{
        for(let i = 0; i < string.length ; i++ ){
            let remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        }
    }
}
if(typeof string === "string"){
    if(string.length > 0){
        var count = 0;
        permutation( string, "");
        console.log("Total number of permutation are :",count);
    }else{
        console.log("This is empty string");
    }

}else{
    console.log("This is not string")
}


