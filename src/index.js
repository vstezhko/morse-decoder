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
    let expression = expr
    let arr = []
    for (let i = 0; i < expression.length/10; i++) {
        arr.push(expression.substring(i*10, i*10+10))
    }
    let morze = arr.map(item => {
        let letter = ''
        for (let i=0; i<10; i+=2) {
            if (item.substring(i,i+2) === '**') {
                letter = letter + ' '
                return letter
            } else if (item.substring(i,i+2) === '10') {
                letter = letter + '.'
            } else if (item.substring(i,i+2) === '11') {
                letter = letter + '-'
            }
        }
        return MORSE_TABLE[letter] || letter
    })

    return morze.join('')
}

module.exports = {
    decode
}