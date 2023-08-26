const router = require("express").Router();
const serviceController = require('../controllers/serviceControllers');
const validation = require('../validation/validation')

router.put("/:productId", validation.priceValidation,serviceController.price_update)
router.get("/leads",serviceController.leadsList);
router.get("/sales",serviceController.salesList);
router.get("/", serviceController.serviceList);


module.exports = router;