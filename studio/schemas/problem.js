export default {
  name: "problem",
  title: "Problem",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "difficulty",
      title: "Diffculty",
      type: "string",
    },
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "attempts",
      title: "Attempts",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "example",
      title: "Example",
      type: "array",
      of: [{ type: "reference", to: { type: "example" } }],
    },
    {
      name: "solution",
      title: "Solution",
      type: "array",
      of: [{ type: "reference", to: { type: "solution" } }],
    },
    {
      name: "answer",
      title: "Answer",
      type: "string",
    },
  ],
};
