import { Request, Response, Router } from "express";
import Log from "../models/logSchema";

const router = Router()

router.post('/log', async (req: Request, res: Response): Promise<any> => {

  try {
    const { message } = req.body
    const sessionId = req.ip

    if (!message) {
      return res.sendStatus(400)
    }

    const log = new Log({
      sessionId: sessionId,
      message: message
    })

    await log.save()

    console.log(`[${log.createdAt}] | ${sessionId} HAS ${message}`)

    return res.sendStatus(200)

  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
})

export default router
