# Table-Football-Front
This project is the frontend of a table football game recording system.

## Frameworks and Libraries
It is using Angular 7 framework with an ngx-bootstrap external library.

## Features
1. Record table football game result.
    An example input could be:
     winners: alan, jack
     losers: tom, chris
     description: This is a wonderful game.
    It would sending a json body:
    ```
    {
	    "winners": ["alan","jack"],
	    "losers": ["tom", "chris"],
	    "description": "This is a wonderful game."
    }
    ```
    to the url: 
    ```
    http://localhost:3000/api/play-game
    ```
    using a POST method.

2. Check a player's winning rate.
    This is a GET method which would send request to:
    ```
    http://localhost:3000/api/winrate/:playerName
    ```
    And getting a sample response Json body as:
    ```
    {
        "success":true,
        "message":
            {
                "totalGame":15,
                "winGame":11,
                "winRate":73.33333333333333
            }
    }
    ```

## Build up the local developing environment
1. Download nodeJs

2. Use
```
npm install -g @angular/cli
``` 
to download angular cli.

3. Use
```
npm install ngx-bootstrap --save
```
to download an angular version of bootstrap

4. Go to the project and run
```
ng server
```
It would running on localhost://4200.
