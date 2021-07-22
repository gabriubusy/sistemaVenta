import routerX from 'express-promise-router';
import articuloController from '../controller/ArticuloController';
import auth from '../middlewares/auth';

const router = routerX();

router.post('/add',auth.verifyAlmacenador,articuloController.add);
router.get('/query',auth.verifyAlmacenador,articuloController.query);
router.get('/queryCodigo',auth.verifyUsuario,articuloController.queryCodigo);
router.get('/list',auth.verifyAlmacenador,articuloController.list);
router.put('/update',auth.verifyAlmacenador,articuloController.update);
router.delete('/remove',auth.verifyAlmacenador,articuloController.remove);
router.put('/activate',auth.verifyAlmacenador,articuloController.activate);
router.put('/deactivate',auth.verifyAlmacenador,articuloController.deactivate);

export default router;