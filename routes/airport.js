const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.send('Airport')
})



module.exports = router