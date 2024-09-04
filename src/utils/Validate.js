const Validate = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );
  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmailValid) return "Email is not valid !!";
  if (!isPasswordValid) return "Password is not valid !!";
  // if (!isNameValid) return "Name not valid !!";
  else return null;
};

export default Validate;
