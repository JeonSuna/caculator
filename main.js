/*시작: 숫자를 입력한다=>  연산자를 입력한다 =>숫자를 입력한다 =>
     =을 입력한다 => 계산한다=> 결과를 입력한다*/
let inputResult = document.querySelector('#inputResult')
operator = ''
number1 = ''
number2 = ''

document.querySelector('#N1').addEventListener('click', () => handlerNumber('1'))
document.querySelector('#N2').addEventListener('click', () => handlerNumber('2'))
document.querySelector('#N3').addEventListener('click', () => handlerNumber('3'))
document.querySelector('#N4').addEventListener('click', () => handlerNumber('4'))
document.querySelector('#N5').addEventListener('click', () => handlerNumber('5'))
document.querySelector('#N6').addEventListener('click', () => handlerNumber('6'))
document.querySelector('#N7').addEventListener('click', () => handlerNumber('7'))
document.querySelector('#N8').addEventListener('click', () => handlerNumber('8'))
document.querySelector('#N9').addEventListener('click', () => handlerNumber('9'))
document.querySelector('#N0').addEventListener('click', () => handlerNumber('0'))


//clear(AC)누를 때, 함수
function clearFun() {
    let clear = document.querySelector('#clear')
    inputResult.innerHTML = ""
    operator = ''
    number1 = ''
    number2 = ''
}

// 입력 숫자 저장 할 함수 만들기(연산자 나오기 전,후로 구분)
function handlerNumber(num) {
    if (operator == '') {
        number1 += num 
        inputResult.textContent = number1
    } else {
        number2 += num
        inputResult.textContent = number2
    }
}

//연산자  함수
function handlerOp(op) {
    if (number1 !== '' && number2 !== '') //숫자가 안비어있으면 계산 실행
        calculateFun()
    else if (number1 == '' && number2 !== '') //첫번째 숫자 안누르고 연산자 누를때 그냥 화면에 number2출력
        inputResult.textContent = number2

    operator = op  //입력받은 매개변수 operator에 저장
    inputResult.textContent = op
}


//calculate눌렀을 때 , 즉 = 눌렀을 때 실행 함수
const calculateFun = () => {
    let result = 0
    num1 = parseInt(number1)
    num2 = parseInt(number2)
 
    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '/':
                result = num1 / num2
            break
        case '*':
            result = num1 * num2
            break
    }
    result = Math.round(result * 10) / 10  //소수점 둘째자리에서 반올림함 
    inputResult.textContent = result
}
document.querySelector('#calculate').addEventListener('click', calculateFun)



document.querySelector('#add').addEventListener('click', () => handlerOp('+'))
document.querySelector('#divide').addEventListener('click', () => handlerOp('/'))
document.querySelector('#multiply').addEventListener('click', () => handlerOp('*'))
document.querySelector('#minus').addEventListener('click', () => handlerOp('-'))

///연속 숫자 나오게 하기 