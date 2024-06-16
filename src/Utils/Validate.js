export const checkValidData = (email, password) => {
  const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmailvalid) return "Email ID is not vaid";
  if (!isPasswordValid) return "Password is not valid";
};
