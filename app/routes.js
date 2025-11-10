module.exports = function(app, passport, db) {

// NFL TEAM ROUTES ===============================================================
var NFLTeam = require('./models/nflteam');

// Route to setup/add all NFL teams to database (run this once)
app.get('/setup-nfl-teams', (req, res) => {
  NFLTeam.deleteMany({}, (err) => {
    if (err) return res.send('Error clearing teams: ' + err);
    //used claude to generate the information I needed for all 32 NFL teams
    var nflTeams = [
      // AFC EAST
      {
        name: "Buffalo Bills",
        city: "Buffalo",
        state: "New York",
        latitude: 42.7738,
        longitude: -78.7870,
        stadium: "Highmark Stadium",
        founded: 1960,
        conference: "AFC",
        division: "East",
        colors: ["Royal Blue", "Red", "White"],
        superbowls: 0
      },
      {
        name: "Miami Dolphins",
        city: "Miami Gardens",
        state: "Florida",
        latitude: 25.9580,
        longitude: -80.2389,
        stadium: "Hard Rock Stadium",
        founded: 1966,
        conference: "AFC",
        division: "East",
        colors: ["Aqua", "Orange", "White"],
        superbowls: 2
      },
      {
        name: "New England Patriots",
        city: "Foxborough",
        state: "Massachusetts",
        latitude: 42.0909,
        longitude: -71.2643,
        stadium: "Gillette Stadium",
        founded: 1960,
        conference: "AFC",
        division: "East",
        colors: ["Navy", "Red", "Silver"],
        superbowls: 6
      },
      {
        name: "New York Jets",
        city: "East Rutherford",
        state: "New Jersey",
        latitude: 40.8135,
        longitude: -74.0745,
        stadium: "MetLife Stadium",
        founded: 1960,
        conference: "AFC",
        division: "East",
        colors: ["Green", "White"],
        superbowls: 1
      },
      // AFC NORTH
      {
        name: "Baltimore Ravens",
        city: "Baltimore",
        state: "Maryland",
        latitude: 39.2780,
        longitude: -76.6227,
        stadium: "M&T Bank Stadium",
        founded: 1996,
        conference: "AFC",
        division: "North",
        colors: ["Purple", "Black", "Gold"],
        superbowls: 2
      },
      {
        name: "Cincinnati Bengals",
        city: "Cincinnati",
        state: "Ohio",
        latitude: 39.0954,
        longitude: -84.5160,
        stadium: "Paycor Stadium",
        founded: 1968,
        conference: "AFC",
        division: "North",
        colors: ["Orange", "Black", "White"],
        superbowls: 0
      },
      {
        name: "Cleveland Browns",
        city: "Cleveland",
        state: "Ohio",
        latitude: 41.5061,
        longitude: -81.6995,
        stadium: "Cleveland Browns Stadium",
        founded: 1946,
        conference: "AFC",
        division: "North",
        colors: ["Brown", "Orange", "White"],
        superbowls: 0
      },
      {
        name: "Pittsburgh Steelers",
        city: "Pittsburgh",
        state: "Pennsylvania",
        latitude: 40.4468,
        longitude: -80.0158,
        stadium: "Acrisure Stadium",
        founded: 1933,
        conference: "AFC",
        division: "North",
        colors: ["Black", "Gold"],
        superbowls: 6
      },
      // AFC SOUTH
      {
        name: "Houston Texans",
        city: "Houston",
        state: "Texas",
        latitude: 29.6847,
        longitude: -95.4107,
        stadium: "NRG Stadium",
        founded: 2002,
        conference: "AFC",
        division: "South",
        colors: ["Deep Steel Blue", "Battle Red"],
        superbowls: 0
      },
      {
        name: "Indianapolis Colts",
        city: "Indianapolis",
        state: "Indiana",
        latitude: 39.7601,
        longitude: -86.1639,
        stadium: "Lucas Oil Stadium",
        founded: 1953,
        conference: "AFC",
        division: "South",
        colors: ["Royal Blue", "White"],
        superbowls: 2
      },
      {
        name: "Jacksonville Jaguars",
        city: "Jacksonville",
        state: "Florida",
        latitude: 30.3240,
        longitude: -81.6373,
        stadium: "EverBank Stadium",
        founded: 1995,
        conference: "AFC",
        division: "South",
        colors: ["Teal", "Black", "Gold"],
        superbowls: 0
      },
      {
        name: "Tennessee Titans",
        city: "Nashville",
        state: "Tennessee",
        latitude: 36.1665,
        longitude: -86.7713,
        stadium: "Nissan Stadium",
        founded: 1960,
        conference: "AFC",
        division: "South",
        colors: ["Navy", "Titans Blue", "Red"],
        superbowls: 0
      },
      // AFC WEST
      {
        name: "Denver Broncos",
        city: "Denver",
        state: "Colorado",
        latitude: 39.7439,
        longitude: -105.0201,
        stadium: "Empower Field at Mile High",
        founded: 1960,
        conference: "AFC",
        division: "West",
        colors: ["Orange", "Navy Blue"],
        superbowls: 3
      },
      {
        name: "Kansas City Chiefs",
        city: "Kansas City",
        state: "Missouri",
        latitude: 39.0489,
        longitude: -94.4839,
        stadium: "GEHA Field at Arrowhead Stadium",
        founded: 1960,
        conference: "AFC",
        division: "West",
        colors: ["Red", "Gold"],
        superbowls: 4
      },
      {
        name: "Las Vegas Raiders",
        city: "Las Vegas",
        state: "Nevada",
        latitude: 36.0909,
        longitude: -115.1833,
        stadium: "Allegiant Stadium",
        founded: 1960,
        conference: "AFC",
        division: "West",
        colors: ["Silver", "Black"],
        superbowls: 3
      },
      {
        name: "Los Angeles Chargers",
        city: "Inglewood",
        state: "California",
        latitude: 33.9535,
        longitude: -118.3390,
        stadium: "SoFi Stadium",
        founded: 1960,
        conference: "AFC",
        division: "West",
        colors: ["Powder Blue", "Gold"],
        superbowls: 0
      },
      // NFC EAST
      {
        name: "Dallas Cowboys",
        city: "Arlington",
        state: "Texas",
        latitude: 32.7473,
        longitude: -97.0945,
        stadium: "AT&T Stadium",
        founded: 1960,
        conference: "NFC",
        division: "East",
        colors: ["Navy Blue", "Silver", "White"],
        superbowls: 5
      },
      {
        name: "New York Giants",
        city: "East Rutherford",
        state: "New Jersey",
        latitude: 40.8135,
        longitude: -74.0745,
        stadium: "MetLife Stadium",
        founded: 1925,
        conference: "NFC",
        division: "East",
        colors: ["Blue", "Red", "White"],
        superbowls: 4
      },
      {
        name: "Philadelphia Eagles",
        city: "Philadelphia",
        state: "Pennsylvania",
        latitude: 39.9008,
        longitude: -75.1675,
        stadium: "Lincoln Financial Field",
        founded: 1933,
        conference: "NFC",
        division: "East",
        colors: ["Midnight Green", "Silver", "Black"],
        superbowls: 1
      },
      {
        name: "Washington Commanders",
        city: "Landover",
        state: "Maryland",
        latitude: 38.9076,
        longitude: -76.8645,
        stadium: "Northwest Stadium",
        founded: 1932,
        conference: "NFC",
        division: "East",
        colors: ["Burgundy", "Gold"],
        superbowls: 3
      },
      // NFC NORTH
      {
        name: "Chicago Bears",
        city: "Chicago",
        state: "Illinois",
        latitude: 41.8623,
        longitude: -87.6167,
        stadium: "Soldier Field",
        founded: 1920,
        conference: "NFC",
        division: "North",
        colors: ["Navy Blue", "Orange"],
        superbowls: 1
      },
      {
        name: "Detroit Lions",
        city: "Detroit",
        state: "Michigan",
        latitude: 42.3400,
        longitude: -83.0456,
        stadium: "Ford Field",
        founded: 1930,
        conference: "NFC",
        division: "North",
        colors: ["Honolulu Blue", "Silver"],
        superbowls: 0
      },
      {
        name: "Green Bay Packers",
        city: "Green Bay",
        state: "Wisconsin",
        latitude: 44.5013,
        longitude: -88.0622,
        stadium: "Lambeau Field",
        founded: 1919,
        conference: "NFC",
        division: "North",
        colors: ["Green", "Gold"],
        superbowls: 4
      },
      {
        name: "Minnesota Vikings",
        city: "Minneapolis",
        state: "Minnesota",
        latitude: 44.9738,
        longitude: -93.2577,
        stadium: "U.S. Bank Stadium",
        founded: 1961,
        conference: "NFC",
        division: "North",
        colors: ["Purple", "Gold", "White"],
        superbowls: 0
      },
      // NFC SOUTH
      {
        name: "Atlanta Falcons",
        city: "Atlanta",
        state: "Georgia",
        latitude: 33.7553,
        longitude: -84.4006,
        stadium: "Mercedes-Benz Stadium",
        founded: 1966,
        conference: "NFC",
        division: "South",
        colors: ["Red", "Black", "Silver"],
        superbowls: 0
      },
      {
        name: "Carolina Panthers",
        city: "Charlotte",
        state: "North Carolina",
        latitude: 35.2258,
        longitude: -80.8528,
        stadium: "Bank of America Stadium",
        founded: 1995,
        conference: "NFC",
        division: "South",
        colors: ["Process Blue", "Black", "Silver"],
        superbowls: 0
      },
      {
        name: "New Orleans Saints",
        city: "New Orleans",
        state: "Louisiana",
        latitude: 29.9511,
        longitude: -90.0812,
        stadium: "Caesars Superdome",
        founded: 1967,
        conference: "NFC",
        division: "South",
        colors: ["Black", "Gold"],
        superbowls: 1
      },
      {
        name: "Tampa Bay Buccaneers",
        city: "Tampa",
        state: "Florida",
        latitude: 27.9759,
        longitude: -82.5033,
        stadium: "Raymond James Stadium",
        founded: 1976,
        conference: "NFC",
        division: "South",
        colors: ["Red", "Pewter", "Black"],
        superbowls: 2
      },
      // NFC WEST
      {
        name: "Arizona Cardinals",
        city: "Glendale",
        state: "Arizona",
        latitude: 33.5276,
        longitude: -112.2626,
        stadium: "State Farm Stadium",
        founded: 1898,
        conference: "NFC",
        division: "West",
        colors: ["Cardinal Red", "Black", "White"],
        superbowls: 0
      },
      {
        name: "Los Angeles Rams",
        city: "Inglewood",
        state: "California",
        latitude: 33.9535,
        longitude: -118.3390,
        stadium: "SoFi Stadium",
        founded: 1936,
        conference: "NFC",
        division: "West",
        colors: ["Royal Blue", "Sol"],
        superbowls: 2
      },
      {
        name: "San Francisco 49ers",
        city: "Santa Clara",
        state: "California",
        latitude: 37.4030,
        longitude: -121.9697,
        stadium: "Levi's Stadium",
        founded: 1946,
        conference: "NFC",
        division: "West",
        colors: ["Red", "Gold"],
        superbowls: 5
      },
      {
        name: "Seattle Seahawks",
        city: "Seattle",
        state: "Washington",
        latitude: 47.5952,
        longitude: -122.3316,
        stadium: "Lumen Field",
        founded: 1976,
        conference: "NFC",
        division: "West",
        colors: ["Navy Blue", "Action Green"],
        superbowls: 1
      }
    ];
    
     NFLTeam.insertMany(nflTeams, (err, teams) => {
      if (err) return res.send('Error adding teams: ' + err);
      res.send('Successfully added ' + teams.length + ' NFL teams to the database!');
    });
  });
});

// Route to view all teams
app.get('/nfl-teams', (req, res) => {
  NFLTeam.find({}, (err, teams) => {
    if (err) return res.send('Error: ' + err);
    res.json(teams);
  });
});

// Show the find team form
app.get('/find-nfl-team', function(req, res) {
    res.render('find-nfl-team.ejs', {
        user: req.user || null  // Pass user if exists, otherwise null
    });
});

// Process the form and find closest team
app.post('/find-my-nfl-team', (req, res) => {
  var userCity = req.body.city.trim();
  var userState = req.body.state.trim();
  
  console.log('User searching for:', userCity, userState);
  
  NFLTeam.find({}, (err, teams) => {
    if (err) return res.send('Error: ' + err);
    
    if (teams.length === 0) {
      return res.send('No teams in database. Please run /setup-nfl-teams first.');
    }
    
    console.log('Total NFL teams found:', teams.length); 
    
    // Find the closest team
    var closestTeam = null;
    var shortestDistance = Infinity;
    
    teams.forEach(function(team) {
      var distance = 1000; 
      
      
      var teamState = team.state.toLowerCase();
      var teamCity = team.city.toLowerCase();
      var searchState = userState.toLowerCase();
      var searchCity = userCity.toLowerCase();
      
      if (teamCity === searchCity && teamState === searchState) {
        distance = 5;
      }
      // Same state = pretty close
      else if (teamState === searchState) {
        distance = 100;
      }
      // Different state = far
      else {
        distance = 500;
      }
      
      console.log(team.name + ': ' + distance + ' miles');
      
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestTeam = team;
      }
    });
    
    if (!closestTeam) {
      return res.send('Could not find a team. Please try again.');
    }
    
    console.log('Closest NFL team:', closestTeam.name); 
    
    res.render('results.ejs', {
      user: req.user || null,
      team: closestTeam,
      distance: shortestDistance
    });
  });
});


// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('find-nfl-team.ejs', {  
        user : req.user,
        messages: result
      })
    })
});

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// message board routes ===============================================================

    app.post('/zipcode', (req, res) => {
      db.collection('zipcode').save({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0}, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/profile')
      })
    })

    app.put('/messages/thumbUp', (req, res) => {
  db.collection('messages')
  .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
    $set: {
      thumbUp:req.body.thumbUp + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.put('/messages/thumbDown', (req, res) => {
  db.collection('messages')
  .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
    $inc: {
      thumbDown: 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

    app.delete('/messages', (req, res) => {
      db.collection('messages').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}