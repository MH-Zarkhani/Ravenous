//your apiKey 
const apiKey = 'Iv-7k_84izBflQykMMY92Kw-LHFpYiKCeKxGxifjaG5f7yEBGvrUZcMAxWtKCJlsMw1qbA9jTv4FGOJcSJawDMmllKHO6IP9WLCqTvdVMV7oLKy6aLlgVfCgKKLqXHYx'; // Insert API key here.
//yelp module
const Yelp = {
//search data from api and get response
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    //change response to json
    .then(response => {
      return response.json();
    })
    //get response and create businesses object
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
