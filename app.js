var birthdayInput = document.querySelector('#birthdate');
var checkButton = document.querySelector('#checkButton');
var outputResult = document.querySelector('#outputResult');


function reverseString(str){
    var listChars = str.split('');
    var reverseChars = listChars.reverse();
    var reverseJoinedStr = reverseChars.join('');

    console.log(reverseJoinedStr)
}


reverseString('Hello')