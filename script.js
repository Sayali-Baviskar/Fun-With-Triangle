const angle1= document.querySelector("#angle1");
const angle2= document.querySelector("#angle2");
const angle3= document.querySelector("#angle3");
const btnsubmit= document.querySelector("#btnSubmit");
const displayMessage = document.querySelector(".outputArea");

console.log("outside calsun fun");

function calsum(angle1,angle2,angle3)
{
    console.log("inside calsun fun");
    var sum=0;
    sum= angle1+ angle2+ angle3;
    return sum;
}

function isTriangle()
{
    // console.log("inside calsun fun");
    // var sum=0;
    // sum= angle1+ angle2+ angle3;
    var a1=Number(angle1.value);
    var a2=Number(angle2.value);
    var a3=Number(angle3.value);

    const sum= calsum(a1,a2,a3);
    console.log(sum);

    if(sum==180)
    displayMessage.innerHTML="It is a Triangle";
    else
    displayMessage.innerHTML="It is NOT a Triangle";

}

btnsubmit.addEventListener("click", isTriangle);


    