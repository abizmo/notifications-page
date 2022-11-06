const toKebabCase = (string: string): string =>
  string.toLowerCase().split(' ').join('-');

export default toKebabCase;
