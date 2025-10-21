import { Rule } from "sanity";

export default {
  name: "subCategory",
  title: "Sub Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Sub Category Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "parentCategory",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
