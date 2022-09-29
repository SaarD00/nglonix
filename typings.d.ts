interface SanityBody {
    _createdAt: string
    _id: string
    _rev: string
    _updatedAt: string
}


export interface Problem extends SanityBody {
    _type: "problem"
    title: string
    difficulty: string
    question: string
    example: Example[]
    solution: Solution[]
}

export interface Solution extends SanityBody {
    _type: "solution"
    firstCode: string
    secondCode: string
    thirdCode: string
    fourthCode: string
}


export interface Example extends SanityBody {
    _type: "example"
    input1: string
    input2: string
    output: string
}