import { Example, Problem } from '../typings'

export const fetchExamples = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getExamples`)

  const data = await res.json()
  const examples: Example[] = data.examples
  return examples
}