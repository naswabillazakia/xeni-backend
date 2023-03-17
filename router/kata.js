const kataController = require ('../controllers/kata');
const router = require ('express').Router();

router.post('/', kataController.create);
router.get('/', kataController.getAll);
router.get('/:id', kataController.findOne);
router.put('/:id', kataController.update);
router.delete('/:id', kataController.delete);

module.exports = router;