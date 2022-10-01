const generatedPasswordButton = document.querySelector('#register-help')
const generatedPasswordElement = document.querySelector('#generated-password')

/* FUNÇÕES */ 
const getLowerCase = () => { 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
    const symbols = '(){}[]=<>,.;:/?*&%$#@!+-'

    return symbols[Math.floor(Math.random() * symbols.length)]
}

/* SENHA */
const generatePassword = (getLowerCase, getUpperCase, getNumber, getSymbol) => {
    let password = ''

    const passwordLength = 10

    const generators = [
        getLowerCase, 
        getUpperCase, 
        getNumber, 
        getSymbol
    ]

    for(let i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const passwordRandom = generators[Math.floor(Math.random() * generators.length)]()
            
            password += passwordRandom
        })
    }

    password = password.slice(0, passwordLength)

    generatedPasswordElement.style.display = 'block'
    generatedPasswordElement.querySelector('h3').innerText = password
}

/* EVENTO */
generatedPasswordButton.addEventListener('click', () => {
    generatePassword(
        getLowerCase, 
        getUpperCase, 
        getNumber, 
        getSymbol
    )
})