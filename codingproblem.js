const addToZero = (array) => {
    for (let j = 0; j < array.length; j++) {
        for (let g = 0; g < array.length; g++) {
            if (j !== g) {
                if (array [j] + array [g] === 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

let trueArray = [1, 2, 3, -1];
let falseArray = [1, 2, 3];
// console.log(addToZero(trueArray));
// console.log(addToZero(falseArray));

// 0(n2)

function doubleChar(str) {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }  

// console.log(doubleChar("hi"));
// console.log(doubleChar("hello"));

// 0(n2)

function pangram(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        for (i = 0; i < alphabet.length; i++) {
            const allLetters = alphabet[i];
            if (!str.includes(allLetters)) {
                return false
            }
        }
        return true
    }

// console.log(pangram("The quick brown fox jumps over the lazy dog!"));
// console.log(pangram("This should be false I hope please")); //it was

// 0(n)

function longestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }

  console.log(longestWord(["hello", "testing"]));

//   0(n)

