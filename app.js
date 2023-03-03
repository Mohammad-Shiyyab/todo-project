var userName=prompt('inter your name')
var gender=prompt('enter your geander')
var age
var welcoming= 'yes'

if(gender !=='male' && gender !=='fmale'){
    gender=prompt('enter a valid gender')
}
else{
    age =prompt('enter your age')
    if(age <=0){
        alert(`please enter your messag`)
    }else{
        
        welcoming= confirm('doyou need ashow welcome messag')
        if (welcoming == 'yes'){
            alert(`welcoming ${gender =='male' ? 'mr':'ms'} ${userName}`)
        }
    }
}

let answer =[];
alert('Please answer all these questions used Yes or No')
let question1=prompt('do oyu love pizza')
if(question1 !== 'yes' && question1 !=='no')
{
alert('invalid answer')
}else{
    answer.push(question1)
    let question2 =prompt('do you play football')
    if(question2!== 'yes' && question2 !== 'no'){
        alert ('invalid answer')

    }else{
        answer.push(question2)
        let question3=prompt('do you have car ')
        if(question3 !== 'yes' && question3 !== 'no'){
            alert('invalid answer')
        }else{
            answer.push(question3)
        }
        
    }
}
console.log(answer)


function introuduceYourSelf(name,age,gender,univercity){
    console.log(`my name is ${name} ,I'm ${gender} , I'm ${age} yo , I studied in ${univercity}`)
}
introuduceYourSelf('mohammad' , '55','male','yarmook')

function squareNumber(number){
    number*=number;
    console.log(number);
}
squareNumber(4)