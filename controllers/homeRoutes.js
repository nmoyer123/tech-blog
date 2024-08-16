const router = require('express').Router();

router.get('/', async ( req, res ) => {
    res.render('dashboard', {
        title: "Tech Blog", 
    })
});

router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;