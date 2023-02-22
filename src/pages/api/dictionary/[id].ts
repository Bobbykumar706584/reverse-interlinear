import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// GET /api/dictionary/:id
//Fetiching record with given strong number
export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const strongsNumber = req.query.id as string
    if(strongsNumber.startsWith("H"))
    {
      const record = await prisma.hebrew_Dictionary.findFirst({
        where: { strongsNumber: String(strongsNumber) }
      })
      return res.json(record)
    }
    else if(strongsNumber.startsWith("g"))
    {
      const record = await prisma.greek_Dictionary.findFirst({
        where: { strongsNumber: String(strongsNumber) }
      })
      return res.json(record)
    }
     return res.json({message :'Invalid StrongsNumber'})

  }