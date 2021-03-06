
# SSSF Backend
## Game Stats App for Valorant
Backend GraphQL endpoint running at: https://sssfprojectbackend.herokuapp.com/graphql

Connected to MongoDB Atlas

Application is running at https://sssffrontend.herokuapp.com/

What has changed after presentations:
Added a few missing mutations to the README.md file that were on backend but not listed here. Started working on form validation based on the feedback from presentations, but couldn't really finish it so that it'd work perfectly, so didn't push the code to the git yet. (i will maybe add it later once it's finished)

## Example queries (all mutations/ queries are behind authentication except map and agent)

Register

```
mutation {
        register(username: "YOURUSERNAME", password: "YOURPASSWORD,
            ) {
            username
    }
}

```

Login 

```
query {
    login(username:"YOURUSERNAME, password:"YOURPASSWORD"
            ) {
            username
            token
            }
}
```

Get user by username
```
query {
        userbyusername(username: String!) {
        username
        }
}
```

Add new game stat (when submitting agent and map you need to give proper ID's)



```
mutation {
  addGameStat(userID: "YOURUSERNAME", gameResult:"e.q. 13-3", agent: "608a90c517651226b49f2b28", map: "608689956696eac51a51b543", kills: "e.g. 10", deaths: "10", assist: "10") {
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

Modify gamestat (id must be the ID of the game stat you want to edit. Other fields you can edit freely.)

```

mutation {
  modifyGameStat( id: *GAME STAT'S ID*, userID:"YOURUSERNAME", gameResult:"e.q. 13-3", agent: "608a90c517651226b49f2b28", map: "608689956696eac51a51b543", kills: "e.g. 10", deaths: "10", assist: "10") {
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

Gamestats

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

Get gamestat by userID

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
### Map and agent queries/mutations
#### Not included in frontend

Add map
```
mutation {
  addMap(mapName:"mapname") {
    id
    mapName
}
}
```

Get maps
```
query {
  maps {
    id
    mapName
        }
}
```

Get map by ID
```
query {
  map(id:MAPID) {
    id
    mapName
        }
}
```

Add agent
```
mutation {
  addAgent(agentName:"agentname", agentType:"agenttype") {
    id
    agentName
    agentType
}
}
```

Get agents
```
query {
  agents {
    id
    agentName
    agentType
        }
}
```

Get agent by ID
```
query {
  agent(id:MAPID) {
    id
    agentName
    agentType
        }
}
```
