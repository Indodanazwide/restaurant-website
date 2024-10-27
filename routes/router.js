import express from 'express'

// router init
const router = express.Router()

// start of router
router.get('/', (req, res) => {
    res.send('Hello World!')
})

export default router