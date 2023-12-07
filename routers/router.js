const router = require('express').Router();

const moxfqController = require('../controller/moxfq_controller');
const sfController = require('../controller/sf_controller');
const pcsController = require('../controller/pcs_controller');
const doctorController = require('../controller/doctor_controller');
const medDataController = require('../controller/meddata_controller');
const patientController = require('../controller/patient_controller');
const eqController = require('../controller/eq_controller');
const diagnoController = require('../controller/diagnostica_controller');
const idcodeController = require('../controller/idcode_controller');
const imageController = require('../controller/image_controller');

router.post('/idcode', idcodeController.idcode);

router.post('/registeration',patientController.register);
router.post('/login',patientController.login);
router.post('/phone',patientController.verifyphone);
router.post('/update',patientController.update);
router.post('/changepassword',patientController.changePassword);
router.post('/resetpassword',patientController.resetPassword);
router.delete('/delete',patientController.delete);
router.get('/getpatient',patientController.getEmail);
router.get('/getpatients',patientController.getpatients);

router.post('/doctor', doctorController.register);
router.post('/doctorlogin', doctorController.login);
router.get('/getdoctor', doctorController.get)
router.get('/getdoctor1', doctorController.getAdmin);
router.get('/getemail', doctorController.getEmail);
router.put('/updatedoctor', doctorController.Update);
router.delete('/deletedoctor', doctorController.delete);
router.put('/updatePassword/:email', doctorController.UpdatePassword);

router.post('/moxfq',moxfqController.submitMoxfqAnswer);
router.post('/fetmoxfq',moxfqController.fetmoxfq);
router.get('/getmoxfq',moxfqController.getEmail);
router.delete('/deletemoxfq',moxfqController.delete);

router.post('/sf',sfController.submitSfAnswer);
router.post('/fetsf',sfController.fetsf);
router.get('/getsf',sfController.getEmail);
router.delete('/deletesf',sfController.delete);

router.post('/pcs',pcsController.submitPcsAnswer);
router.post('/fetpcs',pcsController.fetpcs);
router.get('/getpcss',pcsController.getData);
router.delete('/deletepcs',pcsController.delete);

router.post('/meddata',medDataController.submutMedData);
router.get('/getmeddata',medDataController.getEmail);
router.delete('/deletemeddata',medDataController.delete);

router.post('/eq',eqController.submitEqAnswer);
router.post('/feteq',eqController.feteq);
router.get('/geteq',eqController.getEmail);
router.delete('/deleteeq',eqController.delete);

router.post('/data',diagnoController.create);
router.get('/getdatas',diagnoController.getData);

router.get('/getimage',imageController.getEmail);
router.delete('/deleteimage',imageController.delete);


module.exports = router;   