/* Julie Rizzino
script.js
INFO 2134
Thoendel
3/20/20 */

const form = document.getElementById('contactForm');
//label the element id contactForm as the constant form
const meal = document.getElementById('meal');
//label the element id meal as the constant meal
const mealOptions = document.getElementById('mealOptionsHolder');
//label the element id mealOptionsHolder as the constant mealOptions
const breakfast = document.getElementByValue('breakfast');
//label the element value breakfast as the constant breakfast
const breakfastOptions = document.getElementById('breakfastOptions');
//label the element id breakfastOptions as the constant breakfastOptions
const lunch = document.getElementByValue('lunch');
//label the element value lunch as the constant lunch 
const lunchOptions = document.getElementById('lunchOptions');
//label the element id lunchOptions as the constant lunchOptions
const dinner = document.getElementByValue('dinner');
//label the element value dinner as the constant dinner
const dinnerOptions = document.getElementById('dinnerOptions');
//label the element id dinnerOptions as the constant dinnerOptions

const firstName = form.firstName;
//label the constant firstName from the constant form
const lastName = form.lastName;
//label the constant lastName from the constant form

const age = document.getElementById('age');
//label the element id age as the constant age

meal.addEventListener('select', validate, false);
//adding event listener to wait for meal option to be selected
function checkMeal(event){
    if(meal == breakfast){
        mealOptions = breakfastOptions;
        mealOptions.breakfastOptions.style.display = 'block';
    }else if(meal == lunch){
        mealOptions = lunchOptions;
        mealOptions.lunchOptions.style.display = 'block';
    }else if(meal == dinner){
        mealOptions = dinnerOptions;
        mealOptions.dinnerOptions.style.display = 'block';
    }
    }
    //if then else function created to check the meal picked and display the meal options for the selected meal

firstName.addEventListener('blur', validate, false);
//adding event listener to wait for the firstName field to lose focus
function validateInline1(event){
    const firstLetter1 = form.firstName[0];
    event.firstLetter1.toUpperCase();       
}
//validateInline1 function created to capitalize the first letter of the first name entered in the form
lastName.addEventListener('blur', validate, false);
//adding event listener to wait for the lastName field to lose focus
function validateInline2(event){
    const firstLetter2 = form.lastName[0];
    event.firstLetter2.toUpperCase();
}
//validateInline2 function created to capitalize the first letter of the last name entered in the form

age.addEventListener('blur', validate, false);
//adding event listener to wait for the age field to lose focus
function checkInputNumbers(event){ 
var letters = /^[0-9a-zA-Z]+$/;
if(event.form.age.value.match(letters)){
    alert('Please input only a number for age!');
    return true;
}else{
    return false;
}
}
//function checkInputNumbers created to check if the input for age has numbers only if letters have been entered an alert will pop up asking the user to only input numbers

form.addEventListener('submit', validate, false);
//adding event listener to wait for the button to be clicked to submit the form

function disableSubmit(event){
    if(event.target.value === ''){
        document.getElementById('submitButton').disabled = true;
    }else{
        document.getElementById('submitButton').disabled = false;
    }
}
//function disableSubmit added to disable the submit button if the form has not been filled out

//I am struggling to find the correct way to put this together so it functions, I thought I understood the concepts in the chapter but applying them is not giving me a working result after many different attempts. 