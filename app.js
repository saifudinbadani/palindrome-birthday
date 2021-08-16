var birthdayInput = document.querySelector('#birthdate');
var checkButton = document.querySelector('#checkButton');
var outputResult = document.querySelector('#outputResult');


function reverseString(str){
    var listChars = str.split('');
    var reverseChars = listChars.reverse();
    var reverseJoinedStr = reverseChars.join('');

    return reverseJoinedStr;
}


function isPalindrome(str){
    if(str === reverseString(str)){
        return true;
    } else{
        return false;
    }
}

var date ={
    day: 2,
    month: 5,
    year: 2020
}
function dateToStr(date){
    var dateStr = {day: '', month: '', year: ''}
    if(date.day < 10){
        // concatenating number with string gives string
        dateStr.day = '0' + date.day;
    } else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        // concatenating number with string gives string
        dateStr.month = '0' + date.month;
    } else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();

    return dateStr
}

function getAllDateFormats(date){
    var dateStr = dateToStr(date);
    var ddmmyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyy, mmddyyy, yyyymmdd, mmddyy, yymmdd]
}

function