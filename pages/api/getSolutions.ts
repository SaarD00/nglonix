import type {NextApiRequest, NextApiResponse} from "next"
import {groq } from "next-sanity"; 
import {sanityClient } from "../../sanity";
import { Example, Problem, Solution } from "../../typings";


const query = groq`
*[_type == "solution"] {
  ...,
}
`

type Data = {
   solutions: Solution[]
}


export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
 ) {

   const solutions: Solution[] = await sanityClient.fetch(query)
   res.status(200).json({ solutions})
 }
 