//eu nao criei isso mas pode ser util no raciocinio

function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolsChars = '!@#$%¨&*()_+=-';
    
    let allowedChars = ''; //essa variavel vai receber os valoes das outras variaveis
    let password = ''; //essa vai ser a password final
    
    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolsChars : '';
    
    if(length <= 0){
        return `(password must be at least 1)`
    }
    if(allowedChars.length === 0){
        return `(at least 1 set of characters needs to be selected)`
    }

    for(let i = 0; i < length;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12
const includeLowercase = true
const includeUppercase = true
const includeNumbers = false
const includeSymbols = false

const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols)

console.log(`Your password ${password}`)