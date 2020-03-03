const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let length = expr.length / 10;   
    let letters = [];
    for (let key in MORSE_TABLE) {  
        let changer;
        changer = key;
        delete key;
        key = MORSE_TABLE[key];
        MORSE_TABLE[key] = changer;
    };
   
    for (let key in MORSE_TABLE) {    
        let arrCode = MORSE_TABLE[key].split("");
        for (x = 0; x < arrCode.length; x++) {
            if (arrCode[x] == ".") {
                arrCode[x] = "10";
            } else if (arrCode[x] == "-") {
                arrCode[x] = "11";
            };
        };
        MORSE_TABLE[key] = arrCode.join("");
    };

        
    for(let i = 0; i < length; i++) { 
        letters[i] = expr.substr(i*10, 10);
    };
    let cleanLetters = letters.map(function(letter) { 
        for(let j = 0; j < 10; j++) {
            if ( letter[j] == "1") {
               return letter = letter.slice(j);
            } else if (letter[j] == "*") {
                return letter = " ";
            };
        };
    });
    let words = cleanLetters.map(function(item) {
        for (let key in MORSE_TABLE) {
            if ( MORSE_TABLE[key] == item) {
                return item = key;
            } else if ( item == " ") {
            	return item = " ";
            };
        };
    }); 
    return words.join(""); 
};

module.exports = {
    decode
} 