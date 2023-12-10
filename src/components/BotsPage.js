// BotsPage.js
import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);

  function fetchData() {
    return fetch(`http://localhost:8002/bots`)
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function enlistBot(bot) {
    const updatedBots = bots.map((b) =>
      b.id === bot.id ? { ...b, army: true } : b
    );
    setBots(updatedBots);
  }

  function removeBot(bot) {
    const updatedBots = bots.map((b) =>
      b.id === bot.id ? { ...b, army: false } : b
    );
    setBots(updatedBots);
  }

  function hideBot(bot) {
    const remainingBots = bots.filter((b) => b.id !== bot.id);
    setBots(remainingBots);
  }

  return (
    <div>
      <YourBotArmy
        bots={bots.filter((b) => b.army)}
        removeBot={removeBot}
        hideBot={hideBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} removeBot={removeBot} />
    </div>
  );
}

export default BotsPage;
