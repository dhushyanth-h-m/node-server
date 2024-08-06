import {Router} from 'express'

const router = Router()

router.get('/product', (req, res) => {
    console.log("product")
})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.post('/product',() => {})
router.delete('/prodcut/:id', () => {})

router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('update',() => {})
router.delete('update/:id', () => {})

router.get('/updatetepiont', () => {})
router.get('/updatetepiontid', () => {})
router.put('/updatetepiontid', () => {})
router.post('updatetepiont', () => {})
router.delete('updatepiont/:id', () => {})

export default router