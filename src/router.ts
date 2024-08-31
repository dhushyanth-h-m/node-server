import { Router } from 'express';
import { body, validationResult  } from 'express-validator';
import { hadleInputErrors } from './modules/middleware';
import { version } from 'os';
import { INSPECT_MAX_BYTES } from 'buffer';
import { createProduct, getOneProduct, getProducts } from './handlers/product';

const router = Router()

router.get("/product", getProducts)
router.get("/product/:id", () => {})
router.post("/product",  body('name').isString(), hadleInputErrors, createProduct,(req, res) => {})
router.put("/product/:id", body('name').isString(), hadleInputErrors,(req, res) => {})
router.delete("/product/:id", () => {})

router.get("/update", () => {})
router.get("/update/:id",()=> {})
router.put("/update/:id",
    body('title').optional(),
    body('body').optional(),
    body('version').optional(), 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECEATED']),
    (req, res)  => {}
)
router.post("/update",
    body('title').exists().isString(),
    body('body').exists().isString(),
    (req, res)  => {}
)
router.delete("/update/:id", () => {})

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