// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let myArr = [];
for(var i = 0; i < array.length; i++){
  let tester = array[i];
  if(Array.isArray(tester)){
    for(var j = 0; j < tester.length; j++){
      myArr.push(tester[j]);
    }
  }else {
    myArr.push(array[i]);
  }
}
return myArr;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


function loop(value, test, update, body) {
  //loop 
  //run test on current loop value
  //stop if false
  //calls update to create new value
  //call body giving current value
 
  for(var i = value; test(i); i = update(i)){
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, test) {
let counter = 0;
for(var i = 0; i < arr.length; i++){
  if(test(arr[i])){
    counter++;
  }
}
return counter === arr.length ? true : false;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function dominantDirection(text) {
  function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  if (counted.length == 0) return "ltr";
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
