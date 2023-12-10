import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, removeBot }) {
  const botItems = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        selectBot={enlistBot}
        dismissBot={removeBot}
      />
    );
  });
  return (
    <div className="ui four column grid">
      <div className="row">{botItems}</div>
    </div>
  );
}

export default BotCollection;
