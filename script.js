var uuid="3e04285e-207d-4d8b-ba91-c0793542c31a"
var url="https://api.hypixel.net/player?uuid="+uuid+"&key="+API_KEY
var API_KEY=steps.env.API_KEY
fetch(url)
.then(result => result.json())
.then(({ player }) => {
// Log the player's username
console.log(player.displayname)
//Make a variable of player's username
var user=player.displayname
document.getElementById("output").innerHTML = user
})