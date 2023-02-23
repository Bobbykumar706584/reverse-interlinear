import type { NextApiRequest, NextApiResponse } from 'next'
import { getLeadingCommentRanges } from 'typescript';
import prisma from '../../../lib/prisma'

// GET /api/dictionary/
//Fetching all records from Greek and Hebrew Dictionary
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    var greek_dictionary = await prisma.greek_Dictionary.findMany({
        select: {
            id             : true,
            lemma          : true,
            strongsNumber  : true,
            transliteration: true,
          },
    });
    var hebrew_dictionary = await prisma.hebrew_Dictionary.findMany({
        select: {
            id             : true,
            lemma          : true,
            strongsNumber  : true,
            transliteration: true,
          },
    });
    var records = [...hebrew_dictionary, ...greek_dictionary]
    return res.json(records)
  }
