import { Request, Response } from 'express'
import { prisma } from '../repository/instance'

export class RulesController {

    public async List(req: Request, res: Response) {
        const { page, limit } = req.query
        try {
            const payload = await prisma.rules.findMany({
                select: {
                    name: true,
                    id: true,
                    Condition: true
                },
                take: Number(limit),
                skip: (Number(page) - 1) * Number(limit)
            })

            res.send(payload)
        } catch (error) {
            res.send(error)
        }
    }

    public async NewRule(req: Request, res: Response) {
        const { name, Condition } = req.body

        try {
            const addRule = prisma.rules.create({
                data: {
                    name: name,
                }
            })

            const addCondiciotional = prisma.condition.createMany({
                data: Condition
            })

            await prisma.$transaction([addRule, addCondiciotional])

            res.send('Rule created')
        } catch (error) {
            res.send(error)
        }
    }

    public async UpdateRule({ body, params }: Request, res: Response) {
        const { idRule, name, Condition } = body
        const { id } = params
        const numberID = Number(id)

        try {
            await prisma.rules.update({
                where: {
                    id: numberID
                },
                data: {
                    id: Number(idRule),
                    name: name
                }
            })

            for (var i = 0; i < Condition.length; i++) {
                await prisma.condition.updateMany({
                    where: { id_rule: numberID, id: Condition[i].id },
                    data: Condition[i]
                })
            }

            res.send('Rule updated')
        } catch (error) {
            console.log("error: ", error);
            res.send(error)
        }
    }
}