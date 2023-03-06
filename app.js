'use strict';

// var userName=prompt('inter your name')
// var gender=prompt('enter your geander')
// var age
// var welcoming= 'yes'

// if(gender !=='male' && gender !=='fmale'){
//     gender=prompt('enter a valid gender')
// }
// else{
//     age =prompt('enter your age')
//     if(age <=0){
//         alert(`please enter your messag`)
//     }else{
        
//         welcoming= confirm('doyou need ashow welcome messag')
//         if (welcoming == 'yes'){
//             alert(`welcoming ${gender =='male' ? 'mr':'ms'} ${userName}`)
//         }
//     }
// }


const answer = [];

function askQuestion(question){
    return prompt(question)
}

function answerQuestion(arr){
    let questionOne = askQuestion('What is your favourite food');
    let questionTwo = askQuestion('What is your favourite sport');
    let questionThree = askQuestion('What is your favourite video game');
    arr.push(questionOne,questionTwo,questionThree)
} 

function answersQu(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == ''){
            arr[i] = 'invalid'
        }
    }
}

function arrQ1(arr){
    for(let i=0 ; i<arr.length; i++){

    }
}

answerQuestion(answer)
answersQu(answer)
arrQ1(answer)
console.log(answer)
// let answer =[];
// function yourAnswer(){
// alert('Please answer all these questions used Yes or No')
// let question1=prompt('do oyu love pizza')
// if(question1 !== 'yes' && question1 !=='no')
// {
// alert('invalid answer')
// }else{
//     answer.push(question1)
//     let question2 =prompt('do you play football')
//     if(question2!== 'yes' && question2 !== 'no'){
//         alert ('invalid answer')

//     }else{
//         answer.push(question2)
//         let question3=prompt('do you have car ')
//         if(question3 !== 'yes' && question3 !== 'no'){
//             alert('invalid answer')
//         }else{
//             answer.push(question3)
//         }
        
//     }
// }
// }
// console.log(answer)
// yourAnswer()

function introuduceYourSelf(name,age,gender,univercity){
    console.log(`my name is ${name} ,I'm ${gender} , I'm ${age} yo , I studied in ${univercity}`)
}
introuduceYourSelf('mohammad' , '55','male','yarmook')

function squareNumber(number){
    number*=number;
    console.log(number);
}








