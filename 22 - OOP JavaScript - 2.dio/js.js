function Dog(name){
    this.name = name || "Rex";
    this.getName = function(){
        return this.name;
    }
}

function Pas(){
    this.name = "Rex";
    this.getName = function(){
        return this.name;
    }
    this.setName = function(name){
        this.name = name
    }
}

var dog1 = new Dog();
console.log(dog1.name);

var dog2 = new Dog("FLoki");
console.log(dog2.name);

var dog3 = new Dog("Cufi");
console.log(dog3.getName());

var pas1 = new Pas();
console.log(pas1.getName());
pas1.setName("Floki");
console.log(pas1.name);