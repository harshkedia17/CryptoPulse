import axios from "axios";
import { useEffect, useState } from "react";

const URL = `https://api.coingecko.com/api/v3/search/trending`;

const [trending, setTrending] = useState([]);

useEffect(() => {
  axios
    .get(URL)
    .then((response) => {
      setTrending(response.data.coins);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const TrendingCoins = () => {
  return <div>TrendingCoins</div>;
};

export default TrendingCoins;