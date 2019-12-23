function User(user) {
    this.name=user.name;
    this.age=user.age;
    this.ip=user.ip;
    this.port=user.port;
}
User.prototype.sayHi= ()=>console.log('hi!',this.name,this.age)

module.exports=User;
