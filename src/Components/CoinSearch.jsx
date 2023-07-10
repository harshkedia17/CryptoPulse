import CoinItem from "./CoinItem";
import { useState } from "react";

const CoinSearch = ({ coins }) => {
  const [search, setsearch] = useState("");
  console.log(coins);
  return (
    <div className="rounded-div my-4 px-5 ">
      <div className=" flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form action="">
          <input
            type="text"
            placeholder="Search a Coin"
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden md:table-cell">Market Cap</th>
            <th>Last 7 Days Trend</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((coin) =>
              coin.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
