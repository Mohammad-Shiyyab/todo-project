let myName = prompt('enter your name')
let gender = prompt('enter your gender')
let age 
let welcoming = 'yes'

if(gender !== 'male' && gender !== 'female'){
    gender = prompt('enter a valid gender')
}else {
    age =prompt('enter your age')
    if (age<=0){
        age =prompt('enter your age') 
    }else {
        welcoming = prompt('do you need to show welcome massege')
            if(welcoming== 'yes'){
                alert(`welcome ${gender=='male' ? 'mr' : 'ms'} ${myName}`)
            }
    }
}
