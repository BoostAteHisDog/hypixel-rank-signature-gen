var uuid="3e04285e-207d-4d8b-ba91-c0793542c31a"
var url="https://api.hypixel.net/player?uuid="+uuid+"&key="+API
fetch(url)
.then(result => result.json())
.then(({ player }) => {
// Log the player's username
console.log(player.displayname)
})