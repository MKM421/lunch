const apiKey = process.env.GOOGLE_API_KEY; // Insert API key here.
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: apiKey,
  version: "weekly",
  libraries: ["places"]
});

// Center map on san francisco by default
const mapOptions = {
  center: {
    lat: 37.7590826,
    lng: -122.4457663
  },
  zoom: 12,
  disableDefaultUI: true
};

// Load Google Map with Promise
loader.load()
  .then(() => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(e => {
    console.log('Google map not loading...please check for errors');
  });

// Get Places info 
const Places = {
  search(term, location, sortBy) {
    return fetch(`https://cors.bridged.cc/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${term}&location=37.7749,-122.4194&&radius=1000&type=restaurant&key=${apiKey}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.results) {
          console.log(jsonResponse.results)
          // map results
          return jsonResponse.results.map(business => ({
            id: business.place_id,
            imageSrc: business.image_url,
            name: business.name,
            rating: business.rating,
            reviewCount: business.user_ratings_total,
            priceLevel: business.price_level
          }));
        }
      });
    }
};

export default Places;
