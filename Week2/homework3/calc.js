/*
 * Implement all your JavaScript in this file!
 */

//var $display = $('#display');
//var $num = [$('#button0'),$('#button1'),$('#button2'),$('#button3'),$('#button4'),$('#button5'),$('#button6'),$('#button7'),$('#button8'),$('#button9')]
var num = "";
var $out = $('#output');
$('button').on('click', function() {
    $out.html(num.length);
    if (){
        num += $(this).val();
        $('#display').val(num);
        $out.html('num.length');
    }
    /*if (btn = $('#button0') && num.length > 0){
        num += $(this).val();
        $('#display').val(num);
        $out.html('num.length');
    }*/
    /*else if (btn = $('#clearButton')){
        num = '';
        $('#display').val('');
    }*/
});