export const fetchCoffeeStores = async () => {
  const response = await fetch("https://api.sampleapis.com/coffee/hot");
  // const response = await fetch(
  //   `https://api.foursquare.com/v2/venues/search?ll=43.65267326999575,-79.39545615725015&query=coffee
  //stores & client_id=${process.env.FOUR_SQUARE_client_id} & client_secret=${process.env.FOUR_SQUARE_client_secret}&v=20220925 & limit=6`
  // );
  const data = await response.json();
  console.log(data);

  return data;
};
