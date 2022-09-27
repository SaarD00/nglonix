import { Example, Problem, Solution } from '../typings'

export const fetchSolutions = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSolutions`)

  const data = await res.json()
  const solutions: Solution[] = data.solutions
  return solutions
}