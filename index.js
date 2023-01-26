function helperObjArr(collection) {
    if (Array.isArray(collection)) {
      return collection.slice()
    } else {
      return Object.values(collection)
    }
  }

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let newArray = [];
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        newArray.push(callback(collection[key], key));
      }
    }
    return newArray;
  }

  function myReduce(collection, callback, acc) {
    let newCollection = helperObjArr(collection)
 
    if (!acc) {
     acc = newCollection[0];
     newCollection = newCollection.slice(1);
   }  
      for (let i = 0; i < newCollection.length; i++) {
     acc = callback(acc, newCollection[i], newCollection);
   }
   return acc;
 }

 function myFind(collection, predicate) {
    let newCollection = helperObjArr(collection)
    for (let j = 0; j < newCollection.length; j++) {
       if (predicate(newCollection[j])) return newCollection[j]
     }
    return undefined
  }

  function myFilter(collection, predicate) {
    let newCollection = helperObjArr(collection)
    let resultArray = []
    for (let k = 0; k < newCollection.length; k++) {
       if (predicate(newCollection[k])) resultArray.push(newCollection[k])
     }
    return resultArray
  }

  function mySize(collection) {
    let newCollection = helperObjArr(collection)
    return newCollection.length
  }

  function myFirst(array, int) {
    if (int !== undefined) {
      return array.slice(0, int)
    } else {
      return array[0]
    }
  }

  function myLast(array, int) {
    if (int !== undefined) {
      return array.slice((array.length - int), array.length)
    } else {
      return array[array.length - 1]
    }
  }

  function myKeys(object) {
    return Object.keys(object)
  }

  function myValues(object) {
    return Object.values(object)
  }