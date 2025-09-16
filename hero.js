class Hero {
    #health

    constructor(name, health, attactk) {
        this.name = name
        this.#health = health
        this.attactk = attactk
    }
    getname() {
        return this.name
    }

    getHealth() {
        return this.#health
    }
    showStats() {
        console.log("Name:" + this.name);
        console.log("Health:" + this.#health);
        console.log("Attack:" + this.attack);
        this.console.log("-------------------");
    }

   
}
   
    const hero1 = new Hero("Thorin", 100, 10)
    const hero2 = new Hero("Gandalf", 100, 8)

    hero1.showStats();
    hero2.showStats();


    

