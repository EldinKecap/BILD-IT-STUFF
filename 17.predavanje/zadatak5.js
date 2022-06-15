// 5. Napišite funkciju koja invertuje ključeve i vrijednosti objekta.
// PRIMJERI:

// invert({ "z": "q", "w": "f" }) ➞ { "q": "z", "f": "w" }

// invert({ "a": 1, "b": 2, "c": 3 }) ➞ { 1: "a", 2: "b", 3: "c" }

// invert({ "zebra": "koala", "horse": "camel" }) ➞ { "koala": "zebra", "camel": "horse" }
function invert(obj) {
    for (const key in obj) {
        obj[obj[key]]=key;
        delete obj[key];
    }
    return obj
}
console.log(invert({ "z": "q", "w": "f" })) 

console.log(invert({ "a": 1, "b": 2, "c": 3 }))// ➞ { 1: "a", 2: "b", 3: "c" }

console.log(invert({ "zebra": "koala", "horse": "camel" }));
