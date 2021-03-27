/* eslint-disable no-unused-vars, no-undef */

// TODO let's desugar this thing to get rid of all these this.whatevers ...

class DegenesisChar {
    constructor() {
        this.name = ""
        this.age = ""
        this.rank = ""
        this.experience = 0
        this.sex = ""
        this.height = 0
        this.weight = 0
        this.dinars = 0
        this.culture = ""
        this.concept = ""
        this.cult = ""
        this.bodyAttr = {
            body: 1,
            athletics: 0,
            melee: 0,
            force: 0,
            brawl: 0,
            toughness: 0,
            stamina: 0
        }
        this.agilityAttr = {
            agility: 1,
            navigation: 0,
            dexterity: 0,
            crafting: 0,
            mobility: 0,
            projectiles: 0,
            stealth: 0
        }
        this.charismaAttr = {
            charisma: 1,
            arts: 0,
            conduct: 0,
            expression: 0,
            leadership: 0,
            negotiation: 0,
            seduction: 0
        }
        this.intellectAttr = {
            intellect: 1,
            artifactLore: 0,
            focus: 0,
            science: 0,
            engineering: 0,
            legends: 0,
            medicine: 0
        }
        this.psycheAttr = {
            psyche: 1,
            cunning: 0,
            domination: 0,
            deception: 0,
            faith: 0,
            reaction: 0,
            willpower: 0
        }
        this.instinctAttr = {
            instinct: 1,
            taming: 0,
            empathy: 0,
            orienteering: 0,
            perception: 0,
            primal: 0,
            survival: 0
        }
        this.origins = {
            allies: 0,
            authority: 0,
            network: 0,
            renown: 0,
            resources: 0,
            secrets: 0
        }
        this.condition = {
            ego: 2,
            sporeInfestations: 2,
            fleshwounds: 2,
            trauma: 2
        }
        this.potentials = {
            pot1: new Potential("", 0),
            pot2: new Potential("", 0),
            pot3: new Potential("", 0),
            pot4: new Potential("", 0),
            pot5: new Potential("", 0),
            pot6: new Potential("", 0)
        }
        this.weapons = {
            weapon1: new Weapon("", "", 0, 0, 0, 0, 0, "", 0, 0, 0, 0),
            weapon2: new Weapon("", "", 0, 0, 0, 0, 0, "", 0, 0, 0, 0),
            weapon3: new Weapon("", "", 0, 0, 0, 0, 0, "", 0, 0, 0, 0)
        }
        this.protections = {
            protection1: new Protection("", 0, 0, "", 0, 0, 0),
            protection2: new Protection("", 0, 0, "", 0, 0, 0)
        }
    }

    calculateCondition() {
        this.condition.ego =
            this.intellectAttr.focus === null
                ? (this.instinctAttr.instinct + this.instinctAttr.primal) * 2
                : (this.intellectAttr.intellect + this.intellectAttr.focus) * 2
        this.condition.sporeInfestations =
            this.psycheAttr.faith === null
                ? (this.psycheAttr.psyche + this.psycheAttr.willpower) * 2
                : (this.psycheAttr.psyche + this.psycheAttr.psyche) * 2
        this.condition.fleshwounds =
            (this.bodyAttr.body + this.bodyAttr.toughness) * 2
        this.condition.trauma = this.bodyAttr.body + this.psycheAttr.psyche
    }
}

class Potential {
    constructor(name, level) {
        this.name = name
        this.level = level
        //this.descripcion = descripcion
    }
}

class Weapon {
    constructor(
        name,
        attackType,
        handling,
        actionNumber,
        distance,
        damage,
        mag,
        properties,
        weight,
        techlevel,
        slots
    ) {
        this.name = name
        this.attackType = attackType
        this.handling = handling
        this.actionNumber = actionNumber
        this.distance = distance
        this.damage = damage
        this.mag = mag
        this.properties = properties
        this.weight = weight
        this.techlevel = techlevel
        this.slots = slots
        //this.descripcion = descripcion
    }
}

class Protection {
    constructor(name, armor, defense, properties, weight, techlevel, slots) {
        this.nombre = name
        this.armor = armor
        this.defense = defense
        this.properties = properties
        this.weight = weight
        this.techlevel = techlevel
        this.slots = slots
        //this.descripcion = descripcion
    }
}

class Equipment {
    constructor(nombre) {
        this.nombre = nombre
        //this.descripcion = descripcion
    }
}

const skillsSpanish = {
    // CUERPO
    athletics: "Atletismo",
    melee: "Cuerpo a cuerpo",
    force: "Fuerza",
    brawl: "Pelea",
    toughness: "Resistencia",
    stamina: "Vigor",
    // AGILIDAD
    navigation: "Conducir",
    dexterity: "Destreza",
    crafting: "Fabricar",
    mobility: "Movilidad",
    projectiles: "Proyectiles",
    stealth: "Sigilo",
    // CARISMA
    arts: "Arte",
    conduct: "Conducta",
    expression: "Expresión",
    leadership: "Liderazgo",
    negotiation: "Negociación",
    seduction: "Seducción",
    // INTELECTO
    artifactLore: "Artefactos",
    focus: "Concentración",
    science: "Ciencia",
    engineering: "Ingeniería",
    legends: "Leyendas",
    medicine: "Medicina",
    //PSIQUE
    cunning: "Astucia",
    domination: "Dominación",
    deception: "Engaño",
    faith: "Fe",
    reaction: "Reacción",
    willpower: "Voluntad",
    // INSTINTO
    taming: "Doma",
    empathy: "Empatía",
    orienteering: "Orientación",
    perception: "Percepción",
    primal: "Primordial",
    survival: "Supervivencia",
    // ORIGENES
    allies: "Aliados",
    authority: "Autoridad",
    network: "Red",
    renown: "Renombre",
    resources: "Recursos",
    secrets: "Secretos"
}
