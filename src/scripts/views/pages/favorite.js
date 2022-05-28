import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { RestaurantItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div id="restaurants" class="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <div>
        </div>
        <div class="no-favorite">
          You dont have any Favorite Restaurant
        </div>
      `;
    }
    const totalRest = restaurants.length;
    restaurants.forEach((restaurant, index) => {
      restaurantsContainer.innerHTML += RestaurantItem(restaurant, index, totalRest);
    });
  },
};

export default Favorite;
