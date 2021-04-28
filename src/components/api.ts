import axios from "axios";

const Api = (searchTerm: string) => {
  const apiResponse = axios
    .get(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
    .then((response) => {
      return response;
    });
  console.log(apiResponse);

  return apiResponse;
};

export default Api;
