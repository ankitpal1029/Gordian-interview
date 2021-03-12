const { Router } = require('express')



const router = Router();
const USER_INFO = {
    userId:1,
    username:'ankit',
    password:'pal'
};


router.post('/login', function(req, res){
    const { username, password } = req.body;
    if(username && password){
        if( username === USER_INFO.username && password === USER_INFO.password ){
            console.log(`user ${username} has been logged in`);
            req.session.userId = USER_INFO.userId;
            console.log(req.session);
            req.session.save();
            res.status(200).json({ loggedin: true });
        }else{
            res.status(401).json({ loggedin: false});
        }
    }
});


router.post('/logout',function(req,res){
    req.session.destroy(err => {
        if(err){
            console.log(`there was some error with logging out`);

            return res.status(401).send({ loggedout: false });
        }
        res.clearCookie('sid');
        return res.status(200).send({ loggedout: true });
    })
});

router.get('/isAuthenticated',function(req,res){
        console.log(req.session)
    if(req.session.userId){
        res.json({ isLoggedIn: true })
    }else{
        res.json({ isLoggedIn: false })
    }

})

module.exports = router;
