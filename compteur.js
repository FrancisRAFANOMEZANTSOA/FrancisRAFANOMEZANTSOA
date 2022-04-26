
// // compteur de nombre des visiteur
const counter = document.getElementById("counter_vis");
const updateCounter = async () =>
{
	// raha hanofa nomspace s key dia miditra amin create zay valeur egale 42 dia ovaina n nomsapce
	const data = await fetch ('https://api.countapi.xyz/hit/manaomanga/f3a98f86-0d5d-44b3-8498-3a04856c2a66')
	const count = await data.json()
	counter.innerHTML = count.value
};
updateCounter();

// compteur nombre plants
var counter_1 = 700000;
var intervalId = null;
function bip() {
    counter_1++;
    document.getElementById("bip").innerHTML = counter_1 + " arbres sauvés";
    	
}

function start(){
  intervalId = setInterval(bip, 1000);
}	