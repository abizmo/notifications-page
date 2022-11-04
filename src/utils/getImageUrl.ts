import toKebabCase from './toKebabCase';

const BASE_URL = 'images/avatar';

const getImageUrl = (user: string): string => {
  return `${BASE_URL}-${toKebabCase(user)}.webp`;
};

export default getImageUrl;
