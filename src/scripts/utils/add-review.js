import RestaurantSource from '../data/restaurant-source';

const consumerReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.restaurant-reviews');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const addReview = `
  <div class="grid-review">
    <div class="review-description">
      <h4 tabindex="0" class="name-review">${name}</h4>
      <h5 tabindex="0" class="date-city">${date}</h5>
    </div>
    <div class="review-description">
      <p tabindex="0" class="p-review">${review}</p>
    </div>
  </div>
    `;
  reviewContainer.innerHTML += addReview;
};

export default consumerReview;
