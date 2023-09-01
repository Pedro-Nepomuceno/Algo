
// Using array functions, get the number of touchdowns scored by the running backs and return the result.


let players = [
    
        {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
    
        {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
    
        {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
    
        {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
    
        {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
    
       {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    
        {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
    
    ];
    
    let rbPlayers = players.filter(function(player) {
    
      return player.position === 'RB';

    });
    
    ​
    
    let rbTouchdowns = rbPlayers.reduce(function(total, player) {
  
      return total + player.touchdowns;
   
    }, 0);

    ​
    
    console.log(rbTouchdowns); 
    