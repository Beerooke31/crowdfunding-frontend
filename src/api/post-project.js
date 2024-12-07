async function postProject(
  title,
  description,
  goal,
  image,
  is_open,
  date_created,
  owner
) {
  const url = `${import.meta.env.VITE_API_URL}/projects/`;
  const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${window.localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
      goal: goal,
      image: image,
      is_open: is_open,
      date_created: date_created,
      owner: owner,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to create a project`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postProject;
