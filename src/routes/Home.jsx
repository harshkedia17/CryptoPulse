import CoinSearch from "../Components/CoinSearch";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
    </div>
  );
};

Home.displayName = "Home";
export default Home;
