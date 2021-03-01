// footer

let footer = document.querySelector("footer.text-muted");
let count = 1;
let test = function(){
	console.log(`Yay, tu m'as cliquée ${count} fois!`);
	count += 1;
	if (count >= 5){
		footer.textContent = "Bon c'est bon, tu vas me cliquer combien de fois ?"
	}
};
footer.addEventListener("click", test);





// header

let btn = document.querySelector("button.navbar-toggler");
let header = document.getElementById("navbarHeader");

 let collapse = function(){
 	header.classList.toggle("collapse");
 }

 btn.addEventListener("click", collapse);





 // card red

let textCard = document.querySelector("div.col-md-4");
let bouton = document.querySelector("button.btn-outline-secondary");
let text = document.querySelector('p.card-text');


 let toRed = function(){
 	text.style.color = "red"
 }

 bouton.addEventListener("click", toRed)






// green card

let textSecondCard = document.querySelectorAll("div.col-md-4")[1];
let bouton2 = document.querySelectorAll("button.btn-outline-secondary")[1];
let text2 = document.querySelectorAll('p.card-text')[1];

let toGreen = function(){
if (text2.style.color == "black"){
	text2.style.color = "green"
}else{
	text2.style.color = "black"
}}

bouton2.addEventListener("click", toGreen)





// virer bootstrap

let bs = document.querySelector("header")
let link = document.querySelector("head link")


let double = function(){
	if(link.disabled === false){
	link.disabled = true;
} else {
		link.disabled = false;
	}}

bs.addEventListener("dblclick", double)




// réduction

let textCardmin = document.querySelector("p.card-text");
let boutonmin = document.querySelectorAll("button.btn-success");
let textmin = document.querySelectorAll('p.card-text');
let imgmin = document.querySelectorAll("img.card-img-top")



// let dispar = function(){
// 	textCardmin.classList.toggle ("text-white")
// 	imgmin.classList.toggle ("w-25")
// }




 // boutonmin.addEventListener("mouseover", dispar)


const putain = document.querySelectorAll("div.col-md-4")



for (let i = 0; i < putain.length; i++) {
	// console.log (putain[i])
	console.log(boutonmin[i])
	console.log(textmin[i])
	console.log(imgmin[i])

	let dispar = function(){
	textCardmin.innerText = "";
	imgmin.style.width = "20%";
	imgmin.style.height = "20%";

}


	boutonmin[i].addEventListener("mouseover", dispar)
}




// déplacer la 6ème card

let next = document.querySelectorAll("a.my-2")[1];
console.log(next);

let cards = document.querySelectorAll("div.col-md-4")

let last = cards[cards.length - 1];
let first = cards[0];
let n = document.createElement("div")
n.textContent = "binjour"

let placeBefore = function(){
	cards.insertBefore(n, first)
}

next.addEventListener("click", placeBefore)




// déplacer la première card

let prev = document.querySelectorAll("a.my-2")[0];
console.log(prev)

prev.href = "#"
	