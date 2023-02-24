import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
const grammar = require("usfm-grammar");

// GET /api/bible/:bookCode
//Fetching usfm with given bookCode
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [bookCode, chapter, verse] = req.query.bible as string[];
  const bibleDirectory = path.join(process.cwd(), "bible");
  const usfmValue = await fs.readFile(
    bibleDirectory + "/" + bookCode + ".usfm",
    "utf8"
  );
  const myUSFMParser = new grammar.USFMParser(usfmValue);
  var jsonOutput = myUSFMParser.toJSON();
  const chapterText = jsonOutput.chapters[parseInt(chapter) - 1];
  res.status(200).json(chapterText);
}
