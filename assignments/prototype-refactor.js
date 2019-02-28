/* 


Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/



// GameObject Class
class GameObject {
    constructor(atts) {
        this.createdAt = atts.createdAt;
        this.name = atts.name;
        this.dimensions = atts.name;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

// CharacterStats Class
class CharacterStats extends GameObject {
    constructor(atts) {
        super(atts);
        this.healthPoints = atts.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

// Humanoid
class Humanoid extends CharacterStats {
    constructor(atts) {
        super(atts);
        this.team = atts.team;
        this.weapons = atts.weapons;
        this.language = atts.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

// Stock Characters
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

// Villain Class
class Villain extends Humanoid {
    constructor(atts) {
        super(atts);
        this.armorName = atts.armor[0];
        this.armorRating = atts.armor[1];
        this.mp = atts.mp;
    }
    showcase() {
        let weapons = this.weapons.join(', ');
        return `${this.name}, from the ${this.team} team, is wearing ${this.armorName} and wields ${weapons}.`;
    }
    evilSmite(enemy) {
        let damage = 3 - enemy.armorRating,
            magicPoints = 3; // Damage calculation
        enemy.healthPoints = enemy.healthPoints - damage; // Deal damage
        this.mp = this.mp + magicPoints; // Recover MP
        return enemy.healthPoints <= 0 ? //Is enemy still alive?
            `${enemy.name} took ${damage} point(s) of damage. ${enemy.destroy()}` //If dead
            : // Else
            `${this.name} bonks ${enemy.name} with his ${this.weapons[1]} for ${damage} point(s) of damage and recovers ${magicPoints} MP. (${this.name} MP: ${this.mp}) (${enemy.name} HP: ${enemy.healthPoints})`; // Display result of attack
    }
    deathRay(enemy) {
        let damage = 5 - enemy.armorRating, // Damage calculation
            magicPoints = 3; // MP cost for deathRay
        if (this.mp >= magicPoints) { //Enough MP to perform deathRay?
            enemy.healthPoints = enemy.healthPoints - damage; // If so, take away enemy's HP and...
            this.mp = this.mp - magicPoints; // ...take away MP
            return enemy.healthPoints <= 0 ? //Is enemy still alive?
                `${enemy.name} took ${damage} point(s) of damage. ${enemy.destroy()}` // If dead
                : // Else
                `${this.name} blasts ${enemy.name} with his ${this.weapons[0]} for ${damage} point(s) of damage! (${this.name} MP: ${this.mp}) (${enemy.name} HP: ${enemy.healthPoints})`
        } else {
            this.mp = this.mp + magicPoints;
            return `${this.name} doesn't have enough MP to perform deathRay, ${this.name} recovered ${magicPoints} MP instead.`;
        }
    }
    heal() {
        let healAmount = 2;
        this.healthPoints = this.healthPoints + healAmount;
        return `${this.name} healed ${healAmount} HP! (${this.name} HP: ${this.healthPoints})`;
    }
}

// Hero Class
class Hero extends Humanoid {
    constructor(atts) {
        super(atts);
        this.armorName = atts.armor[0];
        this.armorRating = atts.armor[1];
    }
    showcase() {
        let weapons = this.weapons.join(', ');
        return `${this.name}, from the ${this.team} team, is wearing ${this.armorName} and wields ${weapons}.`;
    }
    mightySlash(enemy) {
        let damage = 5 - enemy.armorRating;
        enemy.healthPoints = enemy.healthPoints - damage;
        return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} points of damage. ${enemy.destroy()}` : `${this.name} slashes ${enemy.name} with his ${this.weapons[0]} for ${damage} points of damage. (${enemy.name} HP: ${enemy.healthPoints})`;
    }
    secondarySlash(enemy) {
        let damage = 2 - enemy.armorRating;
        enemy.healthPoints = enemy.healthPoints - damage;
        return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} points of damage. ${enemy.destroy()}` : `${this.name} slashes ${enemy.name} with his ${this.weapons[1]} for ${damage} points of damage. (${enemy.name} HP: ${enemy.healthPoints})`;
    }
    heal() {
        let healAmount = 2;
        this.healthPoints = this.healthPoints + healAmount;
        return `${this.name} healed ${healAmount} HP! (${this.name} HP: ${this.healthPoints})`;
    }
}

// My Characters
let darkdrar = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Darkdrar',
    team: 'Evil',
    weapons: [
        'Magic',
        'Staff',
    ],
    language: 'Jibberish',
    armor: [
        'Mage Garb',
        1,
    ],
    mp: 15
});

let brellin = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 12,
    name: 'Brellin',
    team: 'Good',
    weapons: [
        'Katana',
        'Dagger',
    ],
    language: '日本語',
    armor: [
        'Plate Mail',
        2,
    ]
});

// Testing

console.log(brellin.mightySlash(darkdrar), darkdrar.deathRay(brellin), darkdrar.heal(), brellin.secondarySlash(darkdrar), darkdrar.evilSmite(brellin), brellin.secondarySlash(darkdrar), darkdrar.evilSmite(brellin), brellin.mightySlash(darkdrar), darkdrar.deathRay(brellin), brellin.heal(), darkdrar.evilSmite(brellin), brellin.mightySlash(darkdrar));
console.log(brellin.showcase());
console.log(darkdrar.showcase());