import {createDescriptionPhotos} from './similar.js';

const similarListElement = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotos = createDescriptionPhotos();

const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, likes, comments}) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = Object.keys(comments).length;
  photoElement.querySelector('.picture__likes').textContent = likes;

  similarListFragment.appendChild(photoElement);
});

similarListElement.appendChild(similarListFragment);
