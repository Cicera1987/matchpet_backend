import {Router} from 'express'
import {VariableController} from '../controller/variableController'
import { RulesController } from '../controller/rulesController'

const router = Router()

const {get,Add,addValue} = new VariableController()
const {List, NewRule,UpdateRule} = new RulesController()

router.get('/variable',get)
router.post('/variable',Add)
router.put('/addValue',addValue)

router.get('/rules', List)
router.post('/rules', NewRule)
router.put('/rules/:id', UpdateRule)

export default router 