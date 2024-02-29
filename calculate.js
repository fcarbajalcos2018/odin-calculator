const userInput = ['12', '-', '2', '*', '2', '-', '4'];
console.log(userInput);

function calculate(userInput){
    let new_userInput = userInput.slice(0);
    const operators = ['*', '/', '+', '-'];
    for (const operator of operators){
        let operationIndex = [];
        for (const os in new_userInput){
            if (operator === new_userInput[os]){
                operationIndex.push(parseInt(os));
            }
        }
        if (operationIndex.length === 0){
            continue;
        }
        const operationStart = operationIndex[0];
        const operationFinish = operationIndex[operationIndex.length - 1];
        const splitList1 = new_userInput.slice(0, operationStart - 1);
        const splitList2 = new_userInput.slice(operationStart - 1, operationFinish + 2);
        const splitList3 = new_userInput.slice(operationFinish + 2, new_userInput.length);
        let solution;
        const operands = splitList2.filter(elem => parseInt(elem))
                                   .map(elem => parseInt(elem));
        switch (operator){
            case '+':
                solution = operands.reduce((p, c) => p + c);
                break;
            case '-':
                solution = operands.reduce((p, c) => p - c);
                break;
            case '*':
                solution = operands.reduce((p, c) => p * c);
                break;
            case '/':
                if (!operands.includes(0)){
                    solution = operands.reduce((p, c) => p / c);
                }
                break;
            default:
                break;
        }
        let toNewUserInput = [];
        if (splitList1.length !== 0){
            toNewUserInput = splitList1.slice();
        }
        toNewUserInput.push(solution);
        if (splitList3.length !== 0){
            toNewUserInput = toNewUserInput.concat(splitList3);
        }
        new_userInput = toNewUserInput;
    }
    return new_userInput[0];
}
console.log(calculate(userInput));