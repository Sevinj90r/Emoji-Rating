
const emojis = document.querySelectorAll(".fa-regular");
const star = document.querySelectorAll(".fa-star");
const colorsArray = ["red","orange","lightblue","lightgreen", "green",];


star.forEach((star, index) => {
    star.addEventListener("click",()=>{
        updateRating(index)
    });

});

function updateRating(index){
    star.forEach((star, idx)=>{
        if(idx < index + 1){
            star.classList.add("active");
        }else{
            star.classList.remove("active");
    }
    });
}
   emojis.forEach(emoji => {
    emoji.style.transform =`translateX(-${index * 50}px`;
    emoji.style.color= colorsArray[index]; 
});