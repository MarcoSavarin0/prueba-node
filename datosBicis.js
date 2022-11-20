const datosBicis = require("fs")
let bicis = datosBicis.readFileSync(__dirname + "/bicicletas.json" , "utf-8");
// console.log(bicis)
let biciArray = JSON.parse(bicis);
module.exports = biciArray;