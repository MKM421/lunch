const apiKey = process.env.GOOGLE_API_KEY; // Insert API key here.


// Get Places info
const Places = {
  search(term, location, sortBy) {
    return fetch(`https://cors.bridged.cc/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${term}&location=37.7590826,-122.4457663&radius=12000&type=restaurant&key=${apiKey}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.results) {
          // map results
          console.log(jsonResponse.results);
          return jsonResponse.results.map(business => ({
            id: business.place_id,
            imageSrc: business.image_url,
            name: business.name,
            rating: business.rating,
            reviewCount: business.user_ratings_total,
            priceLevel: business.price_level,
            location: business.geometry.location
          }));
        }
      });
    }
};

export default Places;
