const express = require('express');
const router = express.Router();
const Character = require('../models/got');



//ROUTES

//INDEX ROUTE
router.get('/', (req, res) => {
    
    Character.find({}, (error, allTheCharacters) => {
     
        if (error){
            res.send(error);
        } else {
            res.render('index.ejs', {foundChars: allTheCharacters});
        }
    })
});

//NEW ROUTE

router.get('/new', (req, res) => {
    res.render('new.ejs');
})

//CREATE ROUTE
router.post('/', (req, res) => {
    Character.create(req.body, (error, createdChar)=> {
        if (error){
            console.log(error)
        } else {
            console.log(createdChar);
            res.redirect('/got/');
        }
    })
});

//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {id: req.params.id})
});

//UPDATE ROUTE
router.put('/:id', (req, res) => {
    Character.findOneAndUpdate({_id: req.params.id}, req.body, (error, updatedChar) => {
        if(error){
            console.log(error);
        } else {
            updatedChar = req.body;
            res.redirect('/got');
            console.log(updatedChar);

        }
    })
})

//DELETE ROUTE

router.delete('/:id', (req, res) => {
    Character.findByIdAndDelete(req.params.id, (error, deletedItem) =>{
      if (error){
        console.log(error)
      } else {
        console.log(deletedItem);
        res.redirect('/got')
      }
    })
  });




// SHOW ROUTE
router.get('/:id', (req, res) => {
    Character.findOne({_id: req.params.id}, (err, foundChar) => {
        if(err){
            console.log(err)
        } else {
            if(foundChar !== null){
                res.render('show.ejs', {
                    character: foundChar,
                    
                })
            } else {
                res.send('no character found');
            }
        }
    })
})







module.exports = router;