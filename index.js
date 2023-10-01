let elements = document.querySelectorAll('.button');
let rating = 0;
let selectedRating = document.querySelector('#selected')

let clickEvent = (e) => {
    rating = e.target.value;
    selectedRating.innerHTML = `You selected ${rating} out of 5`;
   
}
elements.forEach((item) => {
    item.addEventListener('click', clickEvent)
});

let submitButton = document.querySelector('#btn-submit');
let ratingCard = document.querySelector('#rating-card');
let thankyouCard = document.querySelector('#thankyou-card');

submitButton.addEventListener('click', ()=>{
    if(rating == 0)alert("please give rating")
    else{
    ratingCard.classList.remove("show");
    thankyouCard.classList.add("show");
    }
})


