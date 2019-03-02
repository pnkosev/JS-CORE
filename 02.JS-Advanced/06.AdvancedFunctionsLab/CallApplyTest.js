let mariya = {
    name: "Mariya",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
};
mariya.hello('world');

let ivan = {
    name: "Ivan"
};

mariya.hello.call(ivan, "yo");
mariya.hello.apply(ivan, ['yo']);

//bind

let helloIvan = mariya.hello.bind(ivan);
helloIvan('from me');