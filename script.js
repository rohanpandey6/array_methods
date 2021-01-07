var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function(){
	var data = JSON.parse(this.response);	
	by_region(data)
	by_population(data)
	info_using_foreach(data)
	total_population(data)
	by_currency(data)
	
}

function by_region(country_data, region = 'Asia'){
	var asian_countries= country_data.filter((item)=> item['region'] === region);
    console.log(`Country from ${region} `, asian_countries)		
}


function by_population(country_data, population = 200000){
	
	var filtered_countries = country_data.filter((item) => item['population'] <  population   );
	console.log(filtered_countries ,`has population less than ${population}`)
	
}

function info_using_foreach(data){
	data.forEach((item)=>{
		console.log(item.name, item.capital, item.flag)
	} 
	)
}

function total_population(data){
	var total_population = data.reduce((acc, item) =>{
		return acc + item['population']
	},0);
	console.log(total_population)
	
}

function by_currency(country_data, currency = 'USD'){
	var by_dollars= country_data.filter((item)=> item['currencies'][0]['code'] === currency);
    console.log(by_dollars, `uses ${currency}`)		
}
