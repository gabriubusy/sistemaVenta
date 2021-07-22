import routerX from 'express-promise-router';
import ingresoController from '../controller/IngresoController';
import auth from '../middlewares/auth';

const router = routerX();

router.post('/add',auth.verifyAlmacenador,ingresoController.add);
router.get('/query',auth.verifyAlmacenador,ingresoController.query);
router.get('/list',auth.verifyAlmacenador,ingresoController.list);
router.get('/grafico',auth.verifyAlmacenador,ingresoController.grafico12meses);
router.get('/consultas',auth.verifyUsuario,ingresoController.consultaFechas);
router.put('/activate',auth.verifyUsuario,ingresoController.activate);
router.put('/deactivate',auth.verifyAlmacenador,ingresoController.deactivate);

export default router;