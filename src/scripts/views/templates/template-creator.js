import CONFIG from '../../globals/config';

const RestaurantDetail = (restaurant) => `
<article class="restaurant-detail">
  <div class="grid-detail">
    <div>
      <picture>
        <img class="detail-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      </picture>
    </div>
    <div class="detail-info">  
      <h2 class="detail-nama">${restaurant.name}</h2>
      <p>${restaurant.address}</p>
      <div class="grid-city-rating">
        <div class="city-detail">
          <p class="p-city">${restaurant.city}</p>
        </div>
        <div class="rating-detail">
            <p tabindex="0" class="p-rating-detail">Rating : ${restaurant.rating}</p>
        </div>
      </div>
      <div class="flex-category">
        <h4>Category:</h4>
        <div class="span-category">
          ${restaurant.categories.map((categorie) => `
              <span class="categorie-restaurant">${categorie.name}</span>
            `).join('')}
        </div>
      </div>
      <h4>Food Menu:</h4>
      <p class="p-padding">${restaurant.menus.foods.map((food) => food.name)}</p>
      <h4>Drink Menu:</h4>
      <p class="p-padding">${restaurant.menus.drinks.map((drink) => drink.name)}</p>
    </div>
  </div>
  <div class="description-detail">
    <h4 tabindex="0" class="review-title">Description:</h4>
    <p tabindex="0" class="p-description">${restaurant.description}</p>
    <h4 tabindex="0" class="review-title">Reviews:</h4>
    <div class="form-review">
      <form>
        <div class="form-margin">
          <label for="inputName" class="form-label">Name:</label>
          <input name="inputName" type="text" class="form-input" id="inputName" placeholder="Input Your Name Name">
        </div>
        <div class="form-margin">
          <label for="inputReview" class="form-label">Review:</label>
          <input name="inputReview" type="text" class="form-input input-review" id="inputReview" placeholder="Review About the Restaurant">
        </div>
        <button id="submit-review" type="submit" class="submit submit-review">Submit</button>
      </form>
    </div>
    <h4 tabindex="0" class="reviewer-label">Customer Reviews</h4>
    <div class="restaurant-reviews">
      ${restaurant.customerReviews.map((review) => `
        <div class="grid-review">
          <div class="review-description">
            <h4 tabindex="0" class="name-review">${review.name}</h4>
            <h5 tabindex="0" class="date-city">${review.date}</h5>
          </div>
          <div class="review-description">
            <p tabindex="0" class="p-review">${review.review}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</article>
`;

const RestaurantItem = (restaurants) => `
    <article class="post-item">
        <p tabindex="0" class="post-item__city">
            <span class="post-item__city__author">${restaurants.city}</span>
        </p>
        <picture>
          <img tabindex="0" class="post-item__thumbnail lazyload"
          data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}"
          alt="${restaurants.city}" 
          />
        </picture>
        <div tabindex="0" class="post-item__rating">
            <h3>Rating : ${restaurants.rating}</h3>
        </div>
        <div class="post-item__content">
            <h3 tabindex="0" class="post-item__title"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
            <p tabindex="0" class="post-item__description">${restaurants.description}</p>
        </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const Spinner = () => `
  <div class="spinner"></div>
`;

export default Spinner;

export {
  RestaurantDetail,
  RestaurantItem,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  Spinner,
};
