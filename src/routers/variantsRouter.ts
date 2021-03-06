import express from 'express'

import {
  createVariant,
  findVariantByTitle,
  findAllVariant,
  updateVariant,
  deleteVariant,
} from '../controllers/variantController'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllVariant)
router.get('/:variantTitle', findVariantByTitle)
router.put('/:variantTitle', updateVariant)
router.delete('/:variantTitle', deleteVariant)
router.post('/', createVariant)

export default router
