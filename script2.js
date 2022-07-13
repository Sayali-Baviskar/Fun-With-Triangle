const base= document.querySelector("#base");
const height= document.querySelector("#height");
const btnsubmit= document.querySelector("#btnSubmit");

const displayMessage = document.querySelector(".outputArea");

function calHypt()
{
    // let hypt=0;
    var b= Number(base.value);
    var h= Number(height.value);
    const hypt= Math.sqrt(Math.pow(b, 2)+Math.pow(h, 2));

    displayMessage.innerHTML="Hypotenuse of Triangle is "+hypt;

}

btnsubmit.addEventListener("click", calHypt);
