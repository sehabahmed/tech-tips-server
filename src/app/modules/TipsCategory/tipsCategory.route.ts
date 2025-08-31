import express from 'express';
import { TipsCategoryControllers } from './tipsCategory.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { TipsCategoryValidation } from './tipsCategory.validation';

const router = express.Router();

router.get('/', TipsCategoryControllers.getAllTipsCategories);

router.post('/', 
    validateRequest(TipsCategoryValidation.createTipsCategoryValidationSchema),
    TipsCategoryControllers.createTipsCategory,
)

export const TipsCategoryRoutes = router;