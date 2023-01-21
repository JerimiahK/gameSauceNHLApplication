export default function GamesCard(){

    return (
        <div id="allGamesBox" className="container">
            <div className="allGamesTeamsBox">
              <div id="allGamesAway" className="allGamesRow">
                <p>Anaheim Ducks</p>
                <p className="gameScore">0</p>
              </div>
              <div id="allGamesHome" className="allGamesRow">
                <p>Colorado Avalanche</p>
                <p className="gameScore">2</p>
              </div>
            </div>
            <p className="gameStatus">Scheduled</p>
          </div>
    )
}