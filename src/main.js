import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '41875605-6b47be3c8e074a549a6d5f149';
const BASE_URL = 'https://pixabay.com/api';

const searchForm = document.querySelector('form');
const imagesContainer = document.querySelector('.images-container');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const query = form.querySelector('input').value.trim();

  if (query) {
    fetchImages(query)
      .then(showImagesGallery)
      .catch(onFetchError)
      .finally(() => form.reset());
  } else {
    iziToast.show({
      message: 'Please enter a search query!',
    });
  }
}

function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function showImagesGallery(images) {
  imagesContainer.innerHTML = '';

  const createQueryImagesMarkup = ({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  }) => `
  <ul class="images-list">
    <li class="image-item">
      <a class="large-image-link" href="${largeImageURL}">
        <img class="image-preview" src="${webformatURL}" alt="${tags}">
      </a>
      <p class="image-item-description">Likes ${likes}</p>
      <p class="image-item-description">Views ${views}</p>
      <p class="image-item-description">Comments ${comments}</p>
      <p class="image-item-description">Downloads ${downloads}</p>
    </li>
  </ul>
  `;

  const galleryMarkup = images.map(createQueryImagesMarkup).join('');

  imagesContainer.innerHTML = galleryMarkup;
}

function onFetchError() {
  iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
