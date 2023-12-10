import React from "react";

function BotCard({ bot, selectBot, dismissBot }) {
  return (
    <div className="ui column">
      <div className="ui card" onClick={() => selectBot(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">{bot.name}</div>
          <div className="meta">
            <span className="date">Joined in {bot.created_at}</span>
          </div>
          <div className="description">{bot.bio}</div>
        </div>
        <div className="extra content">
          <button
            className="ui mini red button"
            onClick={(event) => {
              event.stopPropagation();
              if (typeof dismissBot === "function") {
                dismissBot(bot);
              }
            }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
