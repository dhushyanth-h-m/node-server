import { Router } from 'express';
import { body, validationResult  } from 'express-validator';
import { hadleInputErrors } from './modules/middleware';
import { version } from 'os';
import { INSPECT_MAX_BYTES } from 'buffer';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';

const router = Router()

router.get("/product", getProducts)
router.get("/product/:id", getOneProduct)
router.post("/product",  body('name').isString(), hadleInputErrors, createProduct,(req, res) => {})
router.put("/product/:id", body('name').isString(), hadleInputErrors,(req, res) => {})
router.delete("/product/:id",deleteProduct)

router.get("/update", getUpdates)
router.get("/update/:id",getOneUpdate)
router.put("/update/:id",
    body('title').optional(),
    body('body').optional(),
    body('version').optional(), 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECEATED']).optional(),
    updateUpdate
)
router.post("/update",
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    createUpdate
)
router.delete("/update/:id", deleteUpdate)

router.get("/updatepoint", () => {})
router.get("/updatepoint/:id", () => {})
router.put("/updatepoint/:id", 
    body('name').optional().isString(), 
    body('description').optional().isString(),
    () => {}
)
router.post("/updatepoint",
    body('name').isString(), 
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {}
)
router.delete("/updatepoint/:id", () => {})

export default router