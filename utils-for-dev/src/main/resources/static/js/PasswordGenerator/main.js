const lower_min = 97; // char code of a
const upper_min = 65; // char code of A
const chars_count = 25;
let customSymbols = "";

function generatePassword() {
    let passwordLength = document.getElementById("password_length").value;
    let isLowerCaseEnabled = document.getElementById("lower_case_cb").checked;
    let isUpperCaseEnabled = document.getElementById("upper_case_cb").checked;
    let isNumbersEnabled = document.getElementById("numbers_cb").checked;
    let isSymbolsEnabled = document.getElementById("symbols_cb").checked;
    customSymbols = document.getElementById("custom_symbols").value;

    let generators = [];

    if (isLowerCaseEnabled) {
        generators.push(getLowerCaseChar);
    }

    if (isUpperCaseEnabled) {
        generators.push(getUpperCaseChar);
    }

    if (isNumbersEnabled) {
        generators.push(getRandomNumber);
    }

    if (isSymbolsEnabled) {
        generators.push(getCustomSymbolChar);
    }

    if (generators.length === 0) {
        alert("You should choose at least one character defining option");
        return;
    }

    if (isSymbolsEnabled && !customSymbols && generators.length === 1) {
        alert("You selected custom symbols only, but not specified them.");
        return;
    }

    let result = "";

    for (let i = 0; i < passwordLength; i++) {
        let generatorId = Math.floor(Math.random() * generators.length);
        let newChar = generators[generatorId]();
        result += newChar;
    }
    document.getElementById("result").value = result;
}

function getLowerCaseChar() {
    return getRandomChar(lower_min);
}

function getUpperCaseChar() {
    return getRandomChar(upper_min);
}

function getRandomChar(minBound) {
    return String.fromCharCode((Math.ceil(Math.random() * chars_count)) + minBound);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function getCustomSymbolChar() {
    return customSymbols.charAt(Math.ceil(Math.random() * (customSymbols.length - 1)))
}