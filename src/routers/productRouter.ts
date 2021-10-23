import express from 'express'
import passport from 'passport'

import {
  createProduct,
  findProductById,
  deleteProduct,
  findAllProduct,
  updateProduct,
  usersProduct,
} from '../controllers/productController'
import adminCheck from '../middlewares/adminCheck'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllProduct)
router.get('/:productId', findProductById)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
router.patch('/:productId', usersProduct)
router.post('/', createProduct)

export default router
