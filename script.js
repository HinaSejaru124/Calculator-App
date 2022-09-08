let operation = document.querySelectorAll("[data-operation]"),
    firstvalue = document.querySelector("[data-firstvalue]"),
    secondvalue = document.querySelector("[data-secondvalue]"),
    datasym = document.querySelector("[datasym]"),
    number = document.querySelectorAll("[data-number]"),
    del = document.querySelector("[data-delete]"),
    clear = document.querySelector("[data-reset]"),
    equal = document.querySelector("[data-equal]"),
    sin = document.querySelector("[sin]"),
    cos = document.querySelector("[cos]"),
    tan = document.querySelector("[tan]"),
    sinh = document.querySelector("[sinh]"),
    cosh = document.querySelector("[cosh]"),
    tanh = document.querySelector("[tanh]"),
    datatrigo = document.querySelector("[datatrigo]");
firstNumber = "", secondNumber = "", sym = "", trigosym = "";
sin.addEventListener("click", () => {
    if (trigosym === "" && firstNumber === "") {
        trigosym = sin.innerHTML;
        datatrigo.innerHTML = trigosym;
    }

})
cos.addEventListener("click", () => {
    if (trigosym === "" && firstNumber === "") {
        trigosym = cos.innerHTML;
        datatrigo.innerHTML = trigosym;
    }

})
tan.addEventListener("click", () => {
    if (trigosym === "" && firstNumber === "") {
        trigosym = tan.innerHTML;
        datatrigo.innerHTML = trigosym;
    }

})
sinh.addEventListener("click", () => {
    if (trigosym === "" && firstNumber === "") {
        trigosym = sinh.innerHTML;
        datatrigo.innerHTML = trigosym;
    }

})
cosh.addEventListener("click", () => {
    if (trigosym === "" && firstNumber === "") {
        trigosym = cosh.innerHTML;
        datatrigo.innerHTML = trigosym;
    }

})
tanh.addEventListener("click", () => {
    if (trigosym === "" && firstNumber === "") {
        trigosym = tanh.innerHTML;
        datatrigo.innerHTML = trigosym;
    }

})
number.forEach((button) => {
    button.addEventListener("click", () => {
        if (sym === "" || trigosym !== "") {
            firstNumber += button.innerHTML;
            firstvalue.innerHTML = firstNumber;
        }

    })
})
operation.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber !== "" && secondNumber === "" && trigosym === "") {
            sym = button.innerHTML;
            datasym.innerHTML = sym;
        }

    })
})
number.forEach((button) => {
    button.addEventListener("click", () => {
        if (sym !== "") {
            secondNumber += button.innerHTML;
            secondvalue.innerHTML = secondNumber;
        }

    })
})
function fact(num) {
    let fact = 1;
    while (num >= 1) {
        fact *= num;
        num--;
    }

    return fact;
}
equal.addEventListener("click", () => {
    if (sym !== "") {
        switch (sym) {
            case '+':
                firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '^':
                firstNumber = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
                break;
            case '!':
                firstNumber = fact(parseFloat(firstNumber));
                break;
            default:
                firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }
    }
    if (trigosym !== "") {
        switch (trigosym) {
            case 'sin':
                firstNumber = Math.sin(parseFloat(firstNumber) * (Math.PI) / 180).toFixed(2);
                break;
            case 'cos':
                firstNumber = Math.cos(parseFloat(firstNumber) * (Math.PI) / 180).toFixed(2);
                break;
            case 'tan':
                firstNumber = Math.tan(parseFloat(firstNumber) * (Math.PI) / 180).toFixed(2);
                break;
            case 'sinh':
                firstNumber = Math.sinh(parseFloat(firstNumber) * (Math.PI) / 180).toFixed(2);
                break;
            case 'cosh':
                firstNumber = Math.cosh(parseFloat(firstNumber) * (Math.PI) / 180).toFixed(2);
                break;
            case 'tanh':
                firstNumber = Math.tanh(parseFloat(firstNumber) * (Math.PI) / 180).toFixed(2);
                break;

            default:
                break;
        }
    }
    if (trigosym === "" && sym === "") {
        firstNumber = parseFloat(firstNumber);
    }


    trigosym = "";
    datatrigo.innerHTML = trigosym;
    firstvalue.innerHTML = firstNumber;
    firstNumber = "";
    secondNumber = "";
    sym = "";
    secondvalue.innerHTML = secondNumber;
    datasym.innerHTML = sym;
})
del.addEventListener("click", () => {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
        secondvalue.innerHTML = secondNumber;
    }
    else if (sym !== "") {
        sym = sym.slice(0, -1);
        datasym.innerHTML = sym;
    }
    else if (firstNumber !== "") {
        firstNumber = firstNumber.slice(0, -1);
        firstvalue.innerHTML = firstNumber;
    }
    else {
        firstvalue.innerHTML = "ERROR"
    }

    firstvalue.innerHTML = firstNumber;
    secondvalue.innerHTML = secondNumber;
    datasym.innerHTML = sym;
})
clear.addEventListener("click", () => {
    secondNumber = secondNumber.slice(secondNumber.length, 0);
    secondvalue.innerHTML = secondNumber;
    sym = sym.slice(sym.length, 0);
    datasym.innerHTML = sym;
    firstNumber = firstNumber.slice(firstNumber.length, 0);
    firstvalue.innerHTML = firstNumber;
})
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let body = document.getElementById("body");
let bar = document.getElementById("bars");
let screen = document.getElementById("screen");
let keypad = document.getElementById("keypad");
let white = document.querySelectorAll("[white]")
let gray = document.querySelectorAll("[gray]")
let red = document.querySelector("[red]")
let nav = document.getElementById("nav");
function themeone() {
    bar1.style.opacity = 1;
    bar2.style.opacity = 0;
    bar3.style.opacity = 0;
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    document.body.style.transitionProperty = "all";
    document.body.style.transitionDuration = "0.5s";
    screen.style.backgroundColor = "hsl(224, 36%, 15%)";
    bar.style.backgroundColor = "hsl(223, 31%, 20%)";
    keypad.style.backgroundColor = "hsl(223, 31%, 20%)";
    screen.style.color = "white";
    nav.style.color = "white";
    white.forEach((white) => {
        white.style.backgroundColor = "hsl(30, 25%, 89%)"
        white.style.color = "hsl(221, 14%, 31%)"
    })
    gray.forEach((white) => {
        white.style.backgroundColor = "hsl(225, 21%, 49%)"
        white.style.color = "white"
    })
    red.style.backgroundColor = "hsl(6, 63%, 50%)"
    red.style.color = "white"

}
function themesec() {
    bar1.style.opacity = 0;
    bar2.style.opacity = 1;
    bar3.style.opacity = 0;
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.body.style.transitionProperty = "all";
    document.body.style.transitionDuration = "0.5s";
    screen.style.backgroundColor = "hsl(0, 0%, 93%)";
    bar.style.backgroundColor = "hsl(0, 5%, 81%)";
    keypad.style.backgroundColor = "hsl(0, 5%, 81%)";
    screen.style.color = "hsl(60, 10%, 19%)";
    nav.style.color = "hsl(60, 10%, 19%)";
    white.forEach((white) => {
        white.style.backgroundColor = "hsl(45, 7%, 89%)"
        white.style.color = "hsl(60, 10%, 19%)"
    })
    gray.forEach((white) => {
        white.style.backgroundColor = "hsl(185, 42%, 37%)"
        white.style.color = "white"
    })
    red.style.backgroundColor = "hsl(25, 98%, 40%)"
    red.style.color = "white"
    bar2.style.backgroundColor = "hsl(25, 98%, 40%)"
}
function themethi() {
    bar1.style.opacity = 0;
    bar2.style.opacity = 0;
    bar3.style.opacity = 1;
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
    document.body.style.transitionProperty = "all";
    document.body.style.transitionDuration = "0.5s";
    bar.style.backgroundColor = "hsl(268, 71%, 12%)";
    keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
    screen.style.color = "hsl(52, 100%, 62%)";
    nav.style.color = "hsl(52, 100%, 62%)";
    white.forEach((white) => {
        white.style.backgroundColor = "hsl(268, 47%, 21%)"
        white.style.color = "hsl(52, 100%, 62%)"
    })
    gray.forEach((white) => {
        white.style.backgroundColor = "hsl(281, 89%, 26%)"
        white.style.color = "white"
    })
    red.style.backgroundColor = "hsl(176, 100%, 44%)"
    red.style.color = "black"
    bar3.style.backgroundColor = "hsl(176, 100%, 44%)"
}