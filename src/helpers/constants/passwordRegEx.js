const passwordRegEx = {
  medium: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,}))/,
  strong: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
};

export default passwordRegEx;
