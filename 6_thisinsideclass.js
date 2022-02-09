'use strict'
class TestClass {
    constructor(myName) {
        this.name = myName;
    }

    updateName() {
        return this.name;
    }
}

TestClass.updateName2 = function() {
    console.log(this.name);
};

var test = new TestClass("Joe");

console.log(test.updateName());

TestClass.updateName2();