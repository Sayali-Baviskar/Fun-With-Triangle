const data= document.querySelector(".quizForm");
const btnSubmit = document.querySelector("#btnSubmit");
const displayMessage = document.querySelector(".outputArea");


const q1 = document.querySelector(".question1");
const q2 = document.querySelector(".question2");
const q3 = document.querySelector(".question3");
const q4 = document.querySelector(".question4");
const q5 = document.querySelector(".question5");

const qno =[q1,q2,q3,q4,q5];
const wrongans=[];


const correctAns=["55°","Isosceles triangle", "Equal", "60°", "SSA"];
let index=0, score=0;

function getAnswer()
{
    // console.log(data.value);
    const formresults= new FormData(data);
    // console.log(formresult.value);

    for(let value of formresults.values())
    {
        if(value === correctAns[index])
        {
            score= score+1;

            if(index===0)
            q1.style.backgroundColor = "green";
            else
            // q1.style.backgroundColor = "pink";

            if(index===1)
            q2.style.backgroundColor = "green";
            else
            // q2.style.backgroundColor = "pink";
            
            if(index===2)
            q3.style.backgroundColor = "green";
            else
            // q3.style.backgroundColor = "pink";

            if(index===3)
            q4.style.backgroundColor = "green";
            else
            // q4.style.backgroundColor = "pink";

            if(index===4)
            q5.style.backgroundColor = "green";
            // else
            // q5.style.backgroundColor = "pink";

            // wrongans.push(Number(index));
            // console.log(wrongans);
        }
        // else{
        //     document.getElementById("question1").style.backgroundColor = "red";
        // }

        index= index+1;
    }

    displayMessage.innerHTML="Your Score is "+ score;

    // for( Number(wrong) in wrongans)
    // {
    //     if(wrong==0 )
    //         document.querySelector("#question1").style.backgroundColor = "pink";     

    //     else
    //     if(wrong==1)
    //     document.querySelector("#question2").style.backgroundColor = "pink";
    //     else
    //     if(wrong==2)
    //     document.querySelector("#question3").style.backgroundColor = "pink";
    //     else
    //     if(wrong==3)
    //     document.querySelector("#question4").style.backgroundColor = "pink";
    //     else
    //     if(wrong==4)
    //     document.querySelector("#question5").style.backgroundColor = "pink";
    // }
}

btnSubmit.addEventListener("click", getAnswer);