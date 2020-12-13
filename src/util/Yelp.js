const apiKey = 'wy7IzjAGzRrrhdT5gRxH_4vN28AUarJJj6B6se7j3R6b0bZ8PmhxoYjIhFDrr8Th6P3BsP1tBRXxbr5h-5aoHWlHASmDqIVngUFHpD5N52VIq6TH88gylvX7xNfOX3Yx';

const Yelp = {
    search(term,location,sortBy){
        if(term = ""){
            term = "Pizza";
        }
        if(location === ""){
            location = "Memphis";
        }
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
        }
        }).then(response =>{
            return response.json();
        }).then(jsonResponse =>{
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