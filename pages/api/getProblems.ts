import type {NextApiRequest, NextApiResponse} from "next"
import {groq } from "next-sanity"; 
import {sanityClient } from "../../sanity";
import { Problem } from "../../typings";


const query = groq`
*[_type == "problem"] {
  ...,
  example[]->{
    ...,
  },
solution[]->{
  ...,
}

}  | order(_createdAt asc)
`

type Data = {
   problems: Problem[]
}


export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
 ) {

   const problems: Problem[] = await sanityClient.fetch(query)
   res.status(200).json({ problems})
 }
 