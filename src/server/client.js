let cities = require("./city.list.json");

class CityListClient{
  async getCities(req,res){
    let arr = [];
    let match = req.query.word;
    let j = 0;
    for(let i = 0; i < cities.length && j < 5; i++){
     if(cities[i].name.match(match)){
       j++;
       arr.push({country:cities[i].country, city:cities[i].name});
     }
    }
    res.status(200).json({data:arr, cod: 200});
  }
}

module.exports = new CityListClient();
