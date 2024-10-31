const form = document.getElementById('form')
const day_input = document.getElementById('day-input')
const month_input = document.getElementById('month-input')
const year_input = document.getElementById('year-input')

const error_msg_year = document.getElementById('error-msg-year')
const error_msg_month = document.getElementById('error-msg-month')
const error_msg_day = document.getElementById('error-msg-day')

const years_output = document.getElementById('year-output')
const month_output = document.getElementById('month-output')
const day_output = document.getElementById('day-output')

const allInputs = [day_input, month_input, year_input]

form.addEventListener('submit', (e) =>{
    //creating error list
    let errors = []

        //check if day input has been added
    errors = getAgeCalculatorErrors(day_input.value, month_input.value, year_input.value)
    
    if(errors.length > 0){ 
        e.preventDefault()
    }
    else{
        
        getAge(dateString)
    }
})

function getAgeCalculatorErrors(day,month,year){
    let errors = []

    if(day === '' || day == null){
        errors.push('this field is required')
        day_input.classList.add('error')
        error_msg_day.innerText = 'this field is required'
    }
    if(month === '' || month == null){
        errors.push('this field is required')
        month_input.classList.add('error')
        error_msg_month.innerText = 'this field is required'
    }
    if(year === '' || year == null){
        errors.push('this field is required')
        year_input.classList.add('error')
        error_msg_year.innerText = 'this field is required'
      
    }

    return errors;
}

//Calculate age
function getAge(day_input,month_input,year_input){
    var d = new Date();
    
    let a = d.getDay();
    let b = d.getMonth();
    let c = d.getFullYear();

    console.log(a)
}




//This code prevents letters and special characters
function numbersOnly(day_input,month_input,year_input){
    var regex = /[^0-9]/g
    day_input.value = day_input.value.replace(regex,"")
}

//This code will remove error class when keyUp
allInputs.forEach(input => {
    input.addEventListener('input', () =>{
        if(input.classList.contains('error')){
            input.classList.remove('error');
            error_msg_day.innerText = ''
            error_msg_month.innerText = ''
            error_msg_year.innerText = ''
        }
    })
})

function getAge(dateString) {
    var now = new Date();
    var today = new Date(now.getYear(),now.getMonth(),now.getDate());
  
    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
  
    var dob = new Date(dateString.substring(6,10),
                       dateString.substring(0,2)-1,                   
                       dateString.substring(3,5)                  
                       );
  
    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";
  
  
    yearAge = yearNow - yearDob;
  
    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow -monthDob;
    }
  
    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;
  
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
  
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
  
    if ( age.years > 1 ) yearString = " years";
    else yearString = " year";
    if ( age.months> 1 ) monthString = " months";
    else monthString = " month";
    if ( age.days > 1 ) dayString = " days";
    else dayString = " day";
  
  
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
      ageString = "Only " + age.days + dayString + " old!";
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
      ageString = age.years + yearString + " old. Happy Birthday!!";
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
      ageString = age.years + yearString + " and " + age.months + monthString + " old.";
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.months + monthString + " and " + age.days + dayString + " old.";
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
      ageString = age.years + yearString + " and " + age.days + dayString + " old.";
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
      ageString = age.months + monthString + " old.";
    else ageString = "Oops! Could not calculate age!";
  
    return ageString;
  }
  
  // A bit of jQuery to call the getAge() function and update the page...
  $(document).ready(function() {
    $("#submitDate").click(function(e) {
      e.preventDefault();
  
      $("#age").html(getAge($("input#date").val()));
  
    });
  });