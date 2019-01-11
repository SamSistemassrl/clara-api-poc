import CompanyController from './controller';
import Class from '../../service/model/company/class';
import * as express from 'express';
import Logger from '../../logger';

const router = express.Router();

Logger.info('Route /companies');

// TODO: Change paths.
router.get('/name', async (req, res) => {
    const company: Class = await CompanyController.getByName(req.body.email);
    res.status(200).send(company);
});

router.post('/', async (req, res) => {
    const company: Class = await CompanyController.create(req, res);
    res.status(201).send(company);
});

router.get('/id', async (req, res) => {
    const company: Class = await CompanyController.getById(req.body.id);
    res.status(200).send(company);
});





export default router;
