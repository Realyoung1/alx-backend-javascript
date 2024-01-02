// funcs that Sign up for users
function signUpUser(firstName, lastName) {
  return Promise.resolve(
    {
      firstName,
      lastName,
    },
  );
}

export default signUpUser;
