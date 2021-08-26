import {getRandomNumber, validationForm} from './util.js';

const DESCRIPTION = [
  'Все хорошо!',
  'Только вперед!',
  'Ярко светит солнце',
  'Самое яркое в этой жизни!'
];

const MESSAGE = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'.split('. ');;

const NAME = ['Петр', 'Федя', 'Таня', 'Наташа', 'Ирина'];

const createComment = () => {
  return {
    id: getRandomNumber(1, 25),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: MESSAGE[getRandomNumber(0, MESSAGE.length-1)],
    name: NAME[getRandomNumber(0, NAME.length-1)],
  }
};

const createDescriptionPhoto = () => {
  return {
    id: getRandomNumber(1, 25),
    url: `photos/${getRandomNumber(1, 25)}.jpg`,
    description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length-1)],
    likes: getRandomNumber(15, 200),
    comments: new Array(5).fill(null).map(() => createComment()),
  };
};

const createDescriptionPhotos = () => new Array(25).fill(null).map(() => createDescriptionPhoto());

export {createDescriptionPhotos};
