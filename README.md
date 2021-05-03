
# Sssf project back end

### Game stat app for Valorant.

### Backend endpoint running at: https://sssfprojectbackend.herokuapp.com/graphql
### Application is running at https://sssffrontend.herokuapp.com/


#### Example queries (all mutations/ queries are behind authentication)

###### Register

```
mutation {
        register(username: "YOURUSERNAME", password: "YOURPASSWORD,
            ) {
            username
    }
}

```

###### Login 

```
query {
    login(username:"YOURUSERNAME, password:"YOURPASSWORD"
            ) {
            username
            token
            }
}
```

###### Add new game stat (when submitting agent and map you need to give ID.



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
}

```

###### Modify gamestat (id must be the ID of the game stat you want to edit. Other fields you can edit freely.)

```

mutation {
  modifyGameStat(
  id: *GAME STAT'S ID*,
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
}
```

###### Gamestats

```
query {
  gamestats {
    userID
    gameResult
    agent {
        agentName
        agentType
    map {
      id
      mapName
    }
    kills
    deaths
    assist
  }
}

```

###### Get gamestat by userID

```
query {
  gameStatsByUser(userID:"USERNAME") {
    userID
    gameResult
    agent {
        agentName
    map {
      id
      mapName
    }
    kills
    deaths
    assist
  }
}

```

