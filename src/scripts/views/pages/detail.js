import { async } from 'regenerator-runtime';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { RestaurantDetail, Spinner } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import consumerReview from '../../utils/add-review';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="spin"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const spin = document.querySelector('#spin');
    spin.innerHTML = Spinner();

    try {
      const dataRestaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = RestaurantDetail(dataRestaurant);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: dataRestaurant,
      });

      spin.style.display = 'none';
    } catch (err) {
      restaurantContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
      spin.style.display = 'none';
    }

    const Submit = document.querySelector('#submit-review');
    const inputName = document.querySelector('#inputName');
    const inputReviews = document.querySelector('#inputReview');

    Submit.addEventListener('click', async (event) => {
      event.preventDefault();
      if (inputName.value === '' || inputReviews.value === '') {
        alert('input must be filled!!');
        inputName.value = '';
        inputReviews.value = '';
      } else {
        const dataInput = {
          id: url.id,
          name: inputName.value,
          review: inputReviews.value,
        };
        const result = await RestaurantSource.postRestaurant(dataInput);
        if (result.error) {
          alert(result.message);
        } else {
          consumerReview(url, inputName.value, inputReviews.value);
          inputName.value = '';
          inputReviews.value = '';
          console.log(result);
        }
      }
    });
  },
};

export default Detail;
