
(function(){
    console.log("this is first");
    setTimeout(() => {
        console.log("this is forth");
        },500);
    console.log("this is second");
    setTimeout(() => {
       console.log("this is fifth"); 
    }, 1000);
    console.log("this is third");
}());