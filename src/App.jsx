import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./Components/NavBar";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Accounts from "./routes/Accounts";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [numberofCoins, setNumberofCoins] = useState("10");
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${numberofCoins}&page=1&sparkline=true&locale=en`;
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [URL]);

  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Accounts />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
