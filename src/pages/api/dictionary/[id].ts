import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
// GET /api/dictionary/:id
//Fetching record with given strong number
export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const strongsNumber = req.query.id as string
    if(strongsNumber.toUpperCase().startsWith("H"))
    {
      const record = await prisma.hebrew_Dictionary.findFirst({
        where: { strongsNumber: String(strongsNumber) }
      })
      if(record) {
        return res.json(record)
      }     
    }
    else if(strongsNumber.toLowerCase().startsWith("g"))
    {
      const record = await prisma.greek_Dictionary.findFirst({
        where: { strongsNumber: String(strongsNumber) }
      })
      console.log(record)
      if(record) {
        return res.json(record)
      }
    }
     return res.json({message :'Invalid StrongsNumber'})
  }
