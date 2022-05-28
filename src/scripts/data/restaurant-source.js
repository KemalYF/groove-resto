import apiEndpoint from '../globals/api-endpoint';

class RestaurantSource {
  static async ListRestaurant() {
    const response = await fetch(apiEndpoint.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(apiEndpoint.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurant(data) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const responseText = await fetch(apiEndpoint.POST_REVIEW, options);
      return responseText.json();
    } catch (error) {
      return { error: true, message: `${error.message}! Review not successfully added!\nPlease check your internet connection!` };
    }
  }
}

export default RestaurantSource;
