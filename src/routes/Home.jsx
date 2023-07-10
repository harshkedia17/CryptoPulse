import CoinSearch from "../Components/CoinSearch";
import TrendingCoins from "../Components/TrendingCoins";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <TrendingCoins />
    </div>
  );
};

Home.displayName = "Home";
export default Home;
