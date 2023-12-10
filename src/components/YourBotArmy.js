// YourBotArmy.js
import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot }) {
  const armyItems = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        selectBot={removeBot}  // Updated: Use removeBot to deselect the bot
        dismissBot={removeBot}
      />
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{armyItems}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;
