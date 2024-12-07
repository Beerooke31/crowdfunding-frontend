async function postSignup(firstname, lastname, email, username, password) {
  const url = `${import.meta.env.VITE_API_URL}/api/signup/`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: password,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to sign up`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postSignup;
