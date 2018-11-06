/*
    @func getSuperHero
    @param {string} name
    @param {string} alterEgoName
    @param {boolean} isVillain
    @param {number} age
    @returns {object}
    @desc - takes in the params and returns an object
            that describes superhero
    @example - 
        getSuperHero('Batman', 'Bruce Wayne', false, 31);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
*/

// NUMBER 1

const getSuperHero = {
    'name': 'Batman',
    'alterEgoName': 'Bruce Wayne',
    isVillain: false,
    age: 31,
};

console.log(getSuperHero);

//Alternative solution:

const getSuperHero1 = (name, alterEgoName, isVillain, age) => {
    return {
        name,
        alterEgoName,
        isVillain,
        age
    };
}
const batman = getSuperHero1("Batman", "Bruce Wayne", false, 31);
console.log(getSuperHero1("Batman", "Bruce Wayne", false, 31));

/*
    @func updateSuperHero
    @param {object} superHero
    @param {string} keyName
    @param {anything} keyValue
    returns {object}
    @desc - takes an existing superhero object
            and adds a new property to it
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'likesBats', true);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            likesBats: true
        }
*/

// NUMBER 2

const updateSuperHero = (superHero, keyName, keyValue) => {
    superHero[keyName] = keyValue
    // return superHero; don't need this here 
};

console.log(updateSuperHero(batman, "likesBats", true));

// console.log(batman);

/*
    @func updateSuperHeroAction
    @param {object} superHero
    @param {string} actionName
    @param {function} actionFunc 
    @returns {object}
    @desc - takes an existing superhero object
            and adds a new FUNCTION property to it 
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'saySomething', function saySomething() {
            return "I'm Batman";
        });
        {
            name: 'Batman',1
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            }
        }   
*/

// NUMBER 3

const updateSuperHeroAction = (superHero, actionName, actionFunction) => {
    superHero[actionName] = actionFunction;
    return superHero;
}
// const batman = {
//     name: 'Batman',
//     alterEgoName: 'Bruce Wayne',
//     isVillain: false,
//     age: 31
// }
console.log(updateSuperHeroAction(batman, 'saySomething', function saySomething() {
    return "I'm Batman";
}));



/*
    @func updateSuperHeroInBulk
    @param {object} superHero
    @param {array} properties
    @returns {object}
    @desc - takes an ARRAY of properties and values
            and applies them to the superhero object
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, [
            'saySomething', 
            function saySomething() {
                return "I'm Batman";
            },
            'likesBats',
            true,
            'isRich',
            true
        ]);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            },
            likesBats: true,
            isRich: true
        }     
*/

// NUMBER 4

const updateSuperHeroInBulk = (superHero, properties) => {
    for (let i = 0; i < properties.length; i++){
        if (i % 2 === 0 ){
            updateSuperHero(superHero, properties[i], properties[i+1]);
        // superHero[arr[i]] = arr[i + 1]
    }
}
return superHero;
}

console.log(updateSuperHeroInBulk(batman, [
    'saySomething',
    function saySomething() {
        return "I'm Batman";
    },
    'likesBats',
    true,
    'isRich',
    true
]))