var mysql = require("mysql");
var express = require("express");
var cors = require("cors");

var app = express();
app.use(express.json());
app.use(cors());
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "election_registration",
});
const a = (err) => {
  if (!err) console.log("DB connection succeeded.");
  else console.log("DB connection is failed");
};
mysqlConnection.connect(a);

app.get("/voters/users", (req, res) => {
  mysqlConnection.query("SELECT * from user_data", (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});

// Filter By  State name
app.get("/voters/state/:state_id", (req, res) => {
  mysqlConnection.query(
    `SELECT user_data.name,user_data.age,gender.gender,user_data.CNIC,
     state.state,dist.district,cities_pk.city,ucs.uc,
     ward.ward FROM user_data JOIN gender ON
     user_data.state_id = gender.gender_id JOIN state ON
     state.state_id = user_data.state_id JOIN dist ON
     dist.dis_id = user_data.dis_id JOIN cities_pk ON
     cities_pk.city_id = user_data.city_id JOIN ucs ON
     ucs.uc_id = user_data.uc_id JOIN ward ON
     ward.ward_id = user_data.ward_id WHERE state.state_id = ?;`,
    [req.params.state_id],
    (err, rows) => {
      if (!err) {
        res.send(rows);
        console.log("succeeded");
      } else {
        console.log("failed");
      }
    }
  );
});

//Filter By District name
app.get("/voters/district/:dis_id", (req, res) => {
  mysqlConnection.query(
    `SELECT user_data.name,user_data.age,gender.gender,user_data.CNIC,
    state.state,dist.district,cities_pk.city,ucs.uc,
    ward.ward FROM user_data JOIN gender ON
    user_data.state_id = gender.gender_id JOIN state ON
    state.state_id = user_data.state_id JOIN dist ON
    dist.dis_id = user_data.dis_id JOIN cities_pk ON
    cities_pk.city_id = user_data.city_id JOIN ucs ON
    ucs.uc_id = user_data.uc_id JOIN ward ON
    ward.ward_id = user_data.ward_id
      WHERE dist.dis_id = ?;`,
    [req.params.dis_id],
    (err, rows) => {
      if (!err) {
        res.send(rows);
        console.log("succeeded");
      } else {
        console.log("failed");
      }
    }
  );
});

//  Filter By  City name
app.get("/voters/city/:city", (req, res) => {
  mysqlConnection.query(
    `SELECT user_data.name,user_data.age,gender.gender,user_data.CNIC,
     state.state,dist.district,cities_pk.city,ucs.uc, ward.ward
      FROM user_data JOIN gender ON user_data.state_id = gender.gender_id
      JOIN state ON state.state_id = user_data.state_id JOIN dist ON
      dist.dis_id = user_data.dis_id JOIN cities_pk ON 
      cities_pk.city_id = user_data.city_id JOIN ucs ON
      ucs.uc_id = user_data.uc_id JOIN ward ON
      ward.ward_id = user_data.ward_id WHERE cities_pk.city_id = ?;`,
     [req.params.city],
    (err, rows) => {
      if (!err) {
        res.send(rows);
        console.log("succeeded");
      } else {
        console.log("failed");
      }
    }
  );
});
// Filter By  UC name
app.get("/voters/uc/:UC", (req, res) => {
  mysqlConnection.query(`SELECT user_data.name,user_data.age,gender.gender,user_data.CNIC,
  state.state,dist.district,cities_pk.city,ucs.uc,
  ward.ward FROM user_data JOIN gender ON
  user_data.state_id = gender.gender_id JOIN state ON
  state.state_id = user_data.state_id JOIN dist ON
  dist.dis_id = user_data.dis_id JOIN cities_pk ON
  cities_pk.city_id = user_data.city_id JOIN ucs ON
  ucs.uc_id = user_data.uc_id JOIN ward ON
  ward.ward_id = user_data.ward_id WHERE ucs.uc_id = ?;`,
  [req.params.UC],
  (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});

// #####################################################################
// Filter By  ward name
app.get("/voters/ward/:ward", (req, res) => {
  mysqlConnection.query(`SELECT user_data.name,user_data.age,gender.gender,user_data.CNIC,
  state.state,dist.district,cities_pk.city,ucs.uc,
  ward.ward FROM user_data JOIN gender ON
  user_data.state_id = gender.gender_id JOIN state ON
  state.state_id = user_data.state_id JOIN dist ON
  dist.dis_id = user_data.dis_id JOIN cities_pk ON
  cities_pk.city_id = user_data.city_id JOIN ucs ON
  ucs.uc_id = user_data.uc_id JOIN ward ON
  ward.ward_id = user_data.ward_id where ward.ward_id = ?;`,
  [req.params.ward],
  (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});

// Filter By voter Gender
app.get("/voters/gender/:gender", (req, res) => {
  mysqlConnection.query(`SELECT user_data.name,user_data.age,gender.gender,user_data.CNIC,
  state.state,dist.district,cities_pk.city,ucs.uc,
  ward.ward FROM user_data JOIN gender ON
  user_data.state_id = gender.gender_id JOIN state ON
  state.state_id = user_data.state_id JOIN dist ON
  dist.dis_id = user_data.dis_id JOIN cities_pk ON
  cities_pk.city_id = user_data.city_id JOIN ucs ON
  ucs.uc_id = user_data.uc_id JOIN ward ON
  ward.ward_id = user_data.ward_id WHERE user_data.gender_id = ?;`,
  [req.params.gender],
  (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});

//  Post
app.post('/registration',(req,res)=>{
  const data= req.body
  console.log(data)
 mysqlConnection.query(`INSERT INTO user_data (name,age,CNIC,dis_id,city_id,uc_id,ward_id,state_id,gender_id) VALUES ("${data.name}","${data.age}","${data.CNIC}","${data.dis_id}","${data.city_id}","${data.uc_id}","${data.ward_id}","${data.state_id}","${data.gender_id}")`,(err, rows)=>{
     if(!err)
     {
         console.log('succeed')  
         res.send(rows);
     }
         else
         console.log(err,"errerrrrrrrrrr");     
     });
 })

//  Get Gender
app.get("/voters/gender", (req, res) => {
  mysqlConnection.query("SELECT * from gender", (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});
//  Get CITY
app.get("/voters/city", (req, res) => {
  mysqlConnection.query("SELECT * from cities_pk", (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});
//  Get State
app.get("/voters/state", (req, res) => {
  mysqlConnection.query("SELECT * from state", (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});
//  Get District
app.get("/voters/district", (req, res) => {
  mysqlConnection.query("SELECT * from dist", (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});
//  Get UC
app.get("/voters/uc", (req, res) => {
  mysqlConnection.query("SELECT * from ucs", (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});
//  Get ward
app.get("/voters/ward", (req, res) => {
  mysqlConnection.query("SELECT * from ward", (err, rows) => {
    if (!err) {
      res.send(rows);
      console.log("succeeded");
    } else {
      console.log("failed");
    }
  });
});

app.listen(4000, console.log("express server is running on port 4000"));
