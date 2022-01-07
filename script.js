// máy tính cơ bản
const operator = prompt(`hãy nhập 1 trong 4 phép toán sau " + "; " - ";" * "; " / "`);
// nhập đầu vào hai số

switch (operator) {
    case "+":
        {
            let a = parseInt(prompt("nhập số thứ nhất"));
            let b = parseInt(prompt("nhập số thứ hai"));
            let result;
            result = a + b;
            console.log(`${a} ${operator} ${b} = ${result}`);
            break;
        }
    case "-":
        {
            let a = parseInt(prompt("nhập số thứ nhất"));
            let b = parseInt(prompt("nhập số thứ hai"));
            let result;
            result = a - b;
            console.log(`${a} ${operator} ${b} = ${result}`);
            break;
        }
    case "*":
        {
            let a = parseInt(prompt("nhập số thứ nhất"));
            let b = parseInt(prompt("nhập số thứ hai"));
            let result;
            result = a * b;
            console.log(`${a} ${operator} ${b} = ${result}`);
            break;
        }
    case "/":
        {
            let a = parseInt(prompt("nhập số thứ nhất"));
            let b = parseInt(prompt("nhập số thứ hai"));
            let result;
            result = a / b;
            console.log(`${a} ${operator} ${b} = ${result}`);
            break;
        }
    default:
        console.log(`hãy nhập 1 trong 4 phép toán sau "+"; "-";"*"; "/"`);
        break;
}

// bài 2 : tìm số nguyên tố
// chương trình kiểm tra số có phải số nguyên tố không
const number = parseInt(prompt("nhập số cần kiểm tra"));
let isPrime = true;
if (number <= 1) {
    console.log(`${number} không phải là số nguyên tố `);
} else {
    if (number == 2) {
        console.log(` Số 2 là số nguyên tố`);
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log(`Số ${number} không phải là số nguyên tố`)
            break;
        } else {
            console.log(`Số ${number} là số nguyên tố`);

        }

    }

}