'use strict'
let obj = {
    name : "hangama",
    channelNo : 27,
    tv : function () {
    this.name = () => {console.log(this.channelNo);}   
  }
  };
  obj.tv() ;
  obj.name();
  
  let channel = obj.name;
  channel();