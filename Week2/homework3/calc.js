/*
 * Implement all your JavaScript in this file!
 */

var num1 = 0;
var num2 = '';
var $out = $('#output');
var action = '';
var prevAction = '';
var result;
var prevNum = 0;

$('button').on('click', function(event) {
    var $target = $(event.target);
    var click = $target.val();
    if (click >= 1){
        num2 += click;
        $('#display').val(num2);
    }
    else if (click == 0 && num2.length > 0){
        num2 += click;
        $('#display').val(num2);
    }
    if ($target.is('#clearButton')){
        num2 = '';
        num1 = '';
        action = '';
        prevAction = '';
        prevNum = 0;
        $('#display').val('');
    }
    else if ($target.is('#addButton')) {
        if (num1 != '') {
            result = equals();
            $('#display').val(result);
        }
        num1 = num2;
        num2 = '';
        action = '+';
    }
    else if ($target.is('#subtractButton')) {       
        if (num1 != '') {
            result = equals();
            $('#display').val(result);
        }
        num1 = num2;
        num2 = '';
        action = '-';
    }
    else if ($target.is('#multiplyButton')) {
        if (num1 != '') {
            result = equals();
            $('#display').val(result);
        }
        num1 = num2;
        num2 = '';
        action = '*';
    }
    else if ($target.is('#divideButton')) {
        if (num1 != '') {
            result = equals();
            $('#display').val(result);
        }
        num1 = num2;
        num2 = '';
        action = '/';
    }
    else if ($target.is('#equalsButton')) {
        if (num2 != '') {
            result = equals();
            action = '=';
            num1 = 0;
            $('#display').val(result);
        }
    }
});

function equals () {
    if (action === '=') {
        num1 = result;
        num2 = prevNum;
        action = prevAction;
    }
    if (action === '+') {
        result = Number(num1) + Number(num2);
        prevAction = '+';
    }
    else if (action === '-') {
        result = Number(num1) - Number(num2);
        prevAction = '-';
    }
    else if (action === '*') {
        result = Number(num1) * Number(num2);
        prevAction = '*';
    }
    else if (action === '/') {
        result = Number(num1) / Number(num2);
        prevAction = '/';
    }
    else if (action === '') {
        return num2;
    }
    prevNum = num2;
    num2 = result;
    return result;
}