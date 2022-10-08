export const callApi = async ({
  url,
  method,
  postData = null,
  onSuccess = () => {},
  onFailure = () => {},
}) => {
  let fetchOptions = {
    method: method ? method : postData ? "POST" : "GET",
  };

  if (postData) {
    fetchOptions["body"] = JSON.stringify(postData);
  }

  try {
    let data = await fetch(url, fetchOptions);

    data
      .json()
      .then((data) => {
        onSuccess(data);
      })
      .catch((err) => {
        console.log(err);
        onFailure(err);
      });
  } catch (err) {
    console.log(err);
    onFailure(err);
  }
};
