import { Response, Request } from 'express';
import { prisma } from '../repository/instance';

export class VariableController {

    public async get(req: Request, res: Response) {
        const { limit, page } = req.query
        try {
            const payload = await prisma.variable.findMany({
                select: {
                    id: true,
                    name: true,
                    Values: true
                },
                take: Number(limit),
                skip: (Number(page) - 1) * Number(limit)
            })
            res.send(payload)
        } catch (error) {
            res.send(error)
        }
    }

    public async Add(req: Request, res: Response) {
        const data = req.body

        try {
            const createVariable = prisma.variable.create({
                data: {
                    name: data.name
                }
            })
 
            await prisma.$transaction([createVariable]) 

            res.send('Variable created')
        } catch (error) {
            res.send(error)
        }
    }

    public async addValue(req: Request, res: Response){
        const {name, type, id_variable} = req.body
    
        try{
            const addValue = prisma.values.create({
                data: {
                    name: name,
                    type: type,
                    id_variable: id_variable
                }
            })

            await prisma.$transaction([addValue])
            
            res.send('Valor adicionado')
        }catch(error){
            res.send('Erro interno')
        }
    }
}