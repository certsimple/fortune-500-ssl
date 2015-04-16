var fs = require('fs')
var log = console.log.bind(console)

var results = JSON.parse(fs.readFileSync('results.json'));

results.sort(function(a,b) {
  return a.position - b.position;
})

var sslCompanies = results.filter(function(result){return result.isSSL})
var evCompanies = results.filter(function(result){return result.isEV})
var sslCount = sslCompanies.length
var evCount = evCompanies.length

log(results.length-sslCount, sslCount-evCount, evCount)

evCompanies.forEach(function(evCompany){
	log(' - ['+evCompany.name+'](https://'+evCompany.site+') (#'+evCompany.position+')')
})
