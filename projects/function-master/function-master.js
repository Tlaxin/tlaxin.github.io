//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
let myArr = [];
 for(var key in object){
     myArr.push(object[key]);
 }
return myArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let myStr = '';
for(var key in object){
    myStr += key + ' ';
}
myStr =  myStr.slice(0, myStr.length - 1);
return myStr;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

let myStr = '';
for(var key in object){
    if(typeof object[key] === 'string'){
      myStr += object[key] + ' ';
    }
}
myStr = myStr.slice(0, myStr.length - 1);
return myStr;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
 if(Array.isArray(collection)){
     return 'array';
 }else {
     return 'object';
}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let myArr = string.split(' ');
    let myStr = '';
    for(var i = 0; i < myArr. length; i++){
        myStr += myArr[i][0].toUpperCase() + myArr[i].slice(1) + ' ';
    }
    myStr = myStr.slice(0, myStr.length - 1);
    return myStr;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
 let namer = '';
 namer = object.name;
 namer = namer[0].toUpperCase() + namer.slice(1); 
return"Welcome " + namer + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
let theName = object.name[0].toUpperCase() + object.name. slice(1);
let theSpecies= object.species[0].toUpperCase() + object.species.slice(1);
return theName + ' is a ' + theSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if(!object.noises || object.noises.length === 0){
// why is object.noises.length === 0 not the same as object.noises === []; ???
    return 'there are no noises';
}else {
    return object.noises.join(' ');
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word){
return string.includes(word);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(!object.friends){
        return false;
    } else if(object.friends.includes(name)){
       return true;
    }else {
       return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array){
    let myArr = []
    for(var i = 0; i < array.length; i++){
        if(array[i].name !== name && !array[i].friends.includes(name)){
            myArr.push(array[i].name);
        }
    }
    return myArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i = 0; i < array.length; i++){
        if(object.hasOwnProperty(array[i])){
            delete object[array[i]];
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
let myArr = [];
for(var i = 0; i < array.length; i++){
    if(!myArr.includes(array[i])){
        myArr.push(array[i]);
    }
}
return myArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}