var defaultCenter = [40.8169169,-73.918108];
var defaultZoom = 14;
var map = L.map('my-map').setView(defaultCenter, defaultZoom);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
}).addTo(map);

var AmenityData = [

  {
    name: 'Porto Salvo',
    lat: 40.8229513,
    lon: -73.918108,
    Amenity: 'Restaurant',
  },
  {
    name: ' Mott Haven Bar and Grill',
    lat: 40.8082788,
    lon: -73.9309911,
    Amenity: 'Restaurant',
  },
  {
    name: 'La Morada',
    lat: 40.8080831,
    lon: -73.9256722,
    Amenity: 'Restaurant',
  },
  {
    name: 'Camaguey',
    lat: 40.8066327,
    lon: -73.9237264,
    Amenity: 'Restaurant',
  },
  {
    name: 'Pio Pio 4',
    lat: 40.8059409,
    lon: -73.9213973,
    Amenity: 'Restaurant',
  },
  {
    name: 'Charlies Bar and Kitchen',
    lat: 40.8092658,
    lon: -73.9311263,
    Amenity: 'Restaurant',
  },
  {
    name: 'Ceetay',
    lat: 40.8092658,
    lon: -73.9311263,
    Amenity: 'Restaurant',
  },
  {
    name: 'Picanteria El Botecito',
    lat: 40.8073914,
    lon: -73.9258491,
    Amenity: 'Restaurant',
  },
  {
    name: 'Port Morris Distillery ',
    lat: 40.8007379,
    lon: -73.915575,
    Amenity: 'Brewery and Distillery',
  },
  {
    name: 'The Bronx Brewery',
    lat: 40.8019015,
    lon: -73.9127877,
    Amenity: 'Brewery and Distillery',
  },
  {
    name: 'Gun Hill Tavern',
    lat: 40.8101054,
    lon: -73.9284998,
    Amenity: 'Bar',
  },
  {
    name: 'Oze Tavern',
    lat: 40.8169169,
    lon: -73.9297791,
    Amenity: 'Bar',
  },
  {
    name: 'Made in Puerto Rico Bar and Lounge',
    lat: 40.8078357,
    lon: -73.9298237,
    Amenity: 'Bar',
  },
  {
    name: 'Stans Sports Bar',
    lat: 40.8201726,
    lon: -73.9293071,
    Amenity: 'Bar',
  },
  {
    name: 'Vega Alta Sports Bar',
    lat: 40.8232137,
    lon: -73.9287673,
    Amenity: 'Bar',
  },
  {
    name: 'Bronx Drafthouse',
    lat: 40.828006,
    lon: -73.9266167,
    Amenity: 'Bar',
  },

];
//
// // how to add a single marker using L.marker()
// var chrisPizza = pizzaData[0];
//
// L.marker([chrisPizza.lat, chrisPizza.lon]).addTo(map)
//     .bindPopup(chrisPizza.name + ' likes to eat at ' +  chrisPizza.pizzaShop);
//
//
// // create an empty markers array that we can fill with markers
var markersArray = [];

// how to add a marker for each object in the array

AmenityData.forEach(function(AmenityObject) {
  var latLon = [AmenityObject.lat, AmenityObject.lon];

  var AmenityColor = '#FFF';

  if (AmenityObject.Amenity === 'Bar') AmenityColor = '#f44289';
  if (AmenityObject.Amenity === 'Restaurant') AmenityColor = '#41f4c7';
  if (AmenityObject.Amenity === 'Brewery and Distillery') AmenityColor = '#a3432c';

  var options = {
    radius: 6,
    opacity: 1,
    fillColor: AmenityColor,
    fillOpacity: 0.9,
    color: 'black',
    weight: 2,
  };

  var marker = L.circleMarker(latLon, options)
      .bindPopup(AmenityObject.name,{offset: [0, -6]})
      .addTo(map)
  // add the marker to the markersArray
  markersArray.push(marker);
});




$('.reset').click(function() {
  map.flyTo(defaultCenter, defaultZoom)
});
