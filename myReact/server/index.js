
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const saltRound = 10;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"root",
    database:"demo",
});

app.listen(3001, () =>{
    console.log("mysql server is running port 3001");
});


app.post('/register', (req, res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const password  = req.body.password;  
db.query("SELECT * FROM users WHERE email=?",req.body.email,(err,result)=>{
    if(result.length>0){
        return res.status(400).json("Email Already Exist");
    }else{
         bcrypt.hash(password,saltRound, (err, hash) => {
        if (err) {
                console.log(err)
            }
            db.query( 
                "INSERT INTO users (name,email, password) VALUES (?,?,?)",
                [name,email, hash], 
                (err, result)=> {
                    if(err){
                        console.log(err);
                    }else{
                        res.send("Register Successfully");
                    }
                }
            );
        })
    }
})
});

app.post('/login', async(req,res)=>{
    const name = req.body.name;
    const password = req.body.password;
      db.query ("SELECT * FROM users WHERE name=? ",[name],async(err,result)=>{
          if(err){
              console.log(err);
          }else if(result.length>0){
            const comparison = await bcrypt.compare(password, result[0].password) 
            if(comparison){
                var userToken = jwt.sign({name:req.body.name},'baskar');
                res.header('auth',userToken).send(userToken);
            }else{
                return res.status(400).json("Password Not Match");
            }
          }else{
            return res.status(400).json("Name Does Not Exist");
          }
      })
})

// crud operation//

app.post('/create', (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const regno = req.body.regno;
    const email = req.body.email;
    const course = req.body.course;
   
  
    db.query(
      'INSERT INTO crud (name,regno,email,course) VALUES (?,?,?,?)',
      [name, regno,email,course],
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.send('Inserted Successfully');
        }
      }
    )
  })
  app.get('/read', (req, res) => {
    db.query('select * from crud', (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })


  //update query #######

  app.put('/update/:id', (req, res) => {
    console.log('console data', req.body)
    const id = req.params.id
    const name = req.body.name
    const regno = req.body.regno
    const email = req.body.email
    const course = req.body.course
    
    db.query(
      `update crud set name='${name}',regno=${regno},email='${email}',course='${course}'where id=${id}`,
      [name, regno, email, course, id],
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.send("Data Updated Success");
        }
      }
    )
  })


  app.get('/edit/:id', (req, res) => {
    // console.log(req.params.id)
  
    const id = req.params.id
    db.query('SELECT * FROM crud WHERE id=?', [id], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result);
      }
    })
  })

  app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    db.query('delete from crud where id=?', id, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Row Deleted Success");
      }
    })
  })