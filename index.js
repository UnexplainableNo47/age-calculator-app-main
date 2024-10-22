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
        day_output.innerText = a.value()
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
    
    a = d.getDay();
    b = d.getMonth();
    c = d.getFullYear();

    return a,b,c;
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
