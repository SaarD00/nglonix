import { Problem } from '../typings'

export const fetchProblems = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getProblems`)

  const data = await res.json()
  const problems: Problem[] = data.problems
  return problems
}