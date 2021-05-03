
# Sssf project back end

##Game stat app for Valorant.

### Backend endpoint running at: https://sssfprojectbackend.herokuapp.com/graphql

##Example queries

Add new game stat (when submitting agent and map you need to give ID. List of agent and map ID:s to use:


```
mutation {
  addGameStat(
  userID:"YOURUSERNAME",
  gameResult:"e.q. 13-3",
  agent: "608a90c517651226b49f2b28",
  map: "608689956696eac51a51b543",
  kills: "e.g. 10",
  deaths: "10",
  assist: "10") {
    id
    userID
    gameResult
    agent {
      id
      agentName
      agentType
  	}
    map {
      id
      mapName
    }
    kills
    deaths
    assist
  }
} ```

