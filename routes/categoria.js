import routerX from 'express-promise-router';
import categoriaController from '../controller/CategoriaController';
import auth from '../middlewares/auth';

const router = routerX();

router.post('/add',auth.verifyAlmacenador,categoriaController.add);
router.get('/query',auth.verifyAlmacenador,categoriaController.query);
router.get('/list',auth.verifyAlmacenador,categoriaController.list);
router.put('/update',auth.verifyAlmacenador,categoriaController.update);
router.delete('/remove',auth.verifyAlmacenador,categoriaController.remove);
router.put('/activate',auth.verifyAlmacenador,categoriaController.activate);
router.put('/deactivate',auth.verifyAlmacenador,categoriaController.deactivate);

export default router;