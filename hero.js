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
    class Warrior extends Hero {
        useAbility(){
            console.log('${this.name}user Power Strike');
        }

   
}
   class Mage extends Hero {
    constructor(name, health, attack, mana) {
        super(name, health, attack)
        this.mana = mana
    }
    
   useAbility(){
    console.log('${this.name} cast Fireball');
}
    showStats() {
        super.showStats();
        console.log("Mana:" + this.mana);
   }
   }

    const Thorin = new Thorin("Thorin", 100, 10)
    const Gandalf= new Mage("Gandalf", 100, 8,50)

    
    // Thorin.showStats();
    // Thorin.useAbility();
    Grandalf.showStats();
    Gandalf.useAbility();


    

