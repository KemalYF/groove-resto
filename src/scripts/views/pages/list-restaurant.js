import RestaurantSource from '../../data/restaurant-source';
import { RestaurantItem, Spinner } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
        <div id="restaurants" class="restaurants"></div>
        <div id="spin"></div>
    `;
  },

  async afterRender() {
    const spin = document.querySelector('#spin');
    spin.innerHTML = Spinner();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';

    try {
      const restaurant = await RestaurantSource.ListRestaurant();
      const totalRest = restaurant.length;
      restaurant.forEach((restaurants, index) => {
        restaurantsContainer.innerHTML += RestaurantItem(restaurants, index, totalRest);
      });
      spin.style.display = 'none';
    } catch (err) {
      spin.style.display = 'none';
      restaurantsContainer.innerHTML = `Error: ${err}, try to refresh!`;
    }
  },
};

export default ListRestaurant;
