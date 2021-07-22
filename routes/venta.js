import routerX from 'express-promise-router';
import ventaController from '../controller/VentaController';
import auth from '../middlewares/auth';

const router = routerX();

router.post('/add',auth.verifyVendedor,ventaController.add);
router.get('/query',auth.verifyVendedor,ventaController.query);
router.get('/list',auth.verifyVendedor,ventaController.list);
router.get('/grafico',auth.verifyUsuario,ventaController.grafico12meses);
router.get('/consultas',auth.verifyUsuario,ventaController.consultaFechas);
router.put('/activate',auth.verifyVendedor,ventaController.activate);
router.put('/deactivate',auth.verifyVendedor,ventaController.deactivate);

export default router;