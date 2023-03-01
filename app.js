let userName = prompt('enter his name')
let gender = prompt('enter your gender')
let age 
let showWelcomeMessage = 'yes'

if(gender !== 'male' && gender !== 'female'){
    gender=prompt('please enter a valid gender')
} else{
age = prompt('enter your age')
if(age > 0){
    showWelcomeMessage = prompt('do you need to show welcome massege')
    if(showWelcomeMessage=='yes'){
        alert(`Welcome  ${gender == 'male' ? 'MR' : 'MS'} ${userName} `)
    }
    else{
        alert(`please enter your age`)
    }
}
}