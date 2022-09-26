// initialize our unsplash API here...
import { createApi } from "unsplash-js";

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

// const getListOfCoffeeStorePhotos = async () => {
//   const photos = await unsplashApi.search.getPhotos({
//     query: "coffee shop",
//     page: 1,
//     perPage: 10,
//     color: "green",
//     orientation: "portrait",
//   });

//   const unsplashResult = await photos.response.results;
//   return unsplashResult.map((result) => result.urls["small"]);
// };

export const fetchCoffeeStores = async () => {
  // const photos = await getListOfCoffeeStorePhotos();

  const response = await fetch("https://api.sampleapis.com/coffee/hot");
  // const response = await fetch(
  //   `https://api.foursquare.com/v2/venues/search?ll=43.65267326999575,-79.39545615725015&query=coffee
  //stores & client_id=${process.env.FOUR_SQUARE_client_id} & client_secret=${process.env.FOUR_SQUARE_client_secret}&v=20220925 & limit=6`
  // );
  const data = await response.json();

  return data;
};
