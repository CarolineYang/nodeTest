function MyObject() {
    age=20;
    function sayHi() {
        return false;
    }
    this.publicMethods=function () {
        age++;
        return sayHi();
    }
}
