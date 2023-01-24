import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/mainBody";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/themeMode.style";

export const lightTheme = {
  body: "#F2F2F2",
  fontColor: "#2B3442",
  cardColor: "#FEFEFE",
  followersDiv: "#F6F8FF",
};
export const darkTheme = {
  body: "#2B3442",
  fontColor: "#ffffff",
  cardColor: "#1E2A47",
  followersDiv: "#141D2F",
};

function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState('');

  function findUser() {
    const findUserName = document.querySelector(".searchInput").value;
    fetch(`https://api.github.com/users/${findUserName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'dataa')
        return setData(data);
      });
  }

  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <div className="bigDaddyDiv">
          <Header theme={theme} setTheme={setTheme} findUser={findUser} data={data} />
          <Main theme={theme} setTheme={setTheme} data={data} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;