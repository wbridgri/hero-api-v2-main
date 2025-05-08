const express = require('express')
const router = express.Router()

const { heroDao: dao } = require('../../daos/dao') 

// localhost:3000/api/hero
router.get('/',( req, res)=> {
    dao.findHeroes(res, dao.table)
})

// by alignment
router.get('/alignment/:alignment', (req, res)=> {
    dao.findByAlignment(res, dao.table, req.params.alignment)
})

router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

// sort 
router.get('/sort', (req, res)=> {
    dao.sort(res, dao.table)
})

// localhost:3000/api/hero/id
router.get('/:id', (req, res)=> {
    dao.findHeroById(res, dao.table, req.params.id)
})

// localhost:3000/api/hero/post
router.post('/post', (req, res) => {
    dao.create(req, res, dao.table)
})
// localhost:3000/api/hero/power_post
router.post('/power-post/:id', (req, res)=> {
    
    const power = req.body.power || []

    dao.addPowers(req, res, power, req.params.id)
})
module.exports = router