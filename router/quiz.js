const quizController = require ('../Controllers/quiz');
const router = require ('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:id', quizController.findOne);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);
router.get('/category/:id', quizController.getByCategory);
router.get('/level/:id', quizController.getByQuizId);

module.exports = router;