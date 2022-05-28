import CONFIG from './config';

const apiEndpoint = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default apiEndpoint;
