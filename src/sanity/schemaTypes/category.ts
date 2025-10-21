import { Rule } from "sanity";

export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
