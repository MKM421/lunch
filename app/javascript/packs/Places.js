const apiKey = process.env.GOOGLE_API_KEY; // Insert API key here.

const Places = {
  search(term, location, sortBy) {
    return fetch(`https://cors.bridged.cc/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${term}&location=37.7749,-122.4194&&radius=1000&type=restaurant&key=${apiKey}`)
      .then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.results) {
        console.log(jsonResponse.results)
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
