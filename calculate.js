const userInput = ['12', '-', '2', '*', '2'];
console.log(userInput);

function calculate(userInput){
    let new_userInput = userInput.slice(0);
    const operators = ['*', '/', '+', '-'];
    for (const operator of operators){
        let operationIndex = [];
        for (const os in new_userInput){
            if (operator === new_userInput[os]){
                operationIndex.push(os);
            }
        }
        const operationStart = operationIndex[0];
        const operationFinish = operationIndex[operationIndex.length - 1];
        const splitList1 = new_userInput.slice(0, operationStart - 1);
        const splitList2 = new_userInput.slice(operationStart - 1, operationFinish + 2);
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
        splitList1.push(solution)
        new_userInput = splitList1.slice(0);
    }
}
console.log(calculate(userInput));