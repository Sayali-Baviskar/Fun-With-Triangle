const base= document.querySelector("#base");
const height= document.querySelector("#height");
const btnsubmit = document.querySelector("#btnSubmit");
const displayMessage = document.querySelector(".outputArea");

function calArea()
{
    var area=0;
    var b= Number(base.value);
    var h= Number(height.value);

    area = 0.5 * b * h;

    displayMessage.innerHTML="Area of Triangle is "+ area;
}

btnsubmit.addEventListener("click", calArea);