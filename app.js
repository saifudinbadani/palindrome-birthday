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

function isPalindromeForAllFormats(date){
    // putting all formatted dates in list
    var listofAllFormattedDates = getAllDateFormats(date);
    var ifPalindrome = false;
    for(var i=0; i<listofAllFormattedDates.length; i++){
        if (isPalindrome(listofAllFormattedDates[i])){
            ifPalindrome = true;
            break;
        }

    }
    return ifPalindrome;
}

// helper leapyear function
function isLeapYear(year){
    if (year % 400 === 0)
    return true;

  if (year % 100 === 0)
    return false;

  if (year % 4 === 0)
    return true;

  return false;
}

//function to increment date 
function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]

    if(month === 2){
        if (isLeapYear(year)){
            if(day>29){
                day=1;
                month++;
            }
            
        } else{
            if (day > 28){
                day = 1;
                month++;
            }
        }
    }
    else{
        if ( day > daysInMonth[month -1]){
            day = 1;
            month++;
        }
    } 
    if (month > 12){
        month=1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    }
}



var date ={
    day: 28,
    month: 2,
    year: 2020
}

console.log(getNextDate(date))