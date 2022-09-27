import type {NextApiRequest, NextApiResponse} from "next"
import {groq } from "next-sanity"; 
import {sanityClient } from "../../sanity";
import { Example, Problem } from "../../typings";


const query = groq`
*[_type == "example"] {
  ...,
}
`

type Data = {
   examples: Example[]
}


export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
 ) {

   const examples: Example[] = await sanityClient.fetch(query)
   res.status(200).json({ examples})
 }
 