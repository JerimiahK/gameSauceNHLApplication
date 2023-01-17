export default function Homepage() {
  return (
    <div className="currentGameBox">
      <div className="currentGameHeader">
          <div className="headerRow">
            <div className="col-5 headerColumn">
              <h6 className="headerTeam">Anaheim Ducks</h6>
              <p className="teamRecord">13-23-5</p>
              <h1 className="headerScore">0</h1>
            </div>
            <div>
              <p className="headerPeriod">1st Period</p>
              <p className="headerTime">20:00</p>
            </div>
            <div className="col-5 headerColumn">
              <h6 className="headerTeam">Colorado Avalanche</h6>
              <p className="teamRecord">21-17-4</p>
              <h1 className="headerScore">0</h1>
            </div>
          </div>
      </div>
      <div id="statsColumn" className="container text-center">
        <div className="row">
          <div className="col-6 columnLeft">
            <p className="staticValue">S.O.G:</p>
            <p className="liveStat">0</p>
          </div>
          <div className="col-6 columnRight">
            <p className="staticValue">S.O.G:</p>
            <p className="liveStat">0</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 columnLeft">
            <p className="staticValue">Faceoff Win %</p>
            <p className="liveStat">0%</p>
          </div>
          <div className="col-6 columnRight">
            <p className="staticValue">Faceoff Win %</p>
            <p className="liveStat">0%</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 columnLeft">
            <p className="staticValue">Hits</p>
            <p className="liveStat">0</p>
          </div>
          <div className="col-6 columnRight">
            <p className="staticValue">Hits</p>
            <p className="liveStat">0</p>
          </div>
        </div>
        <div className="lastRow row">
          <div id="homeGoalie" className="col-6 columnLeft">
            <p className="staticValue">PIM</p>
            <p className="liveStat">0</p>
          </div>
          <div id="awayGoalie" className="col-6 columnRight">
            <p className="staticValue">PIM</p>
            <p className="liveStat">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
