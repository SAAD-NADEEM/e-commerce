// ./schemas/product.js
import { Rule } from "sanity";
import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      title: "Product Details",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "tags",
      title: "Product tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "reviewsCount",
      title: "Product Reviews Count",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "subCategory",
      title: "Sub Category",
      type: "reference",
      to: [{ type: "subCategory" }],
    }),
    defineField({
      name: "userReviews",
      title: "User Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "date", title: "Date", type: "datetime" },
            { name: "comment", title: "Comment", type: "text" },
          ],
        },
      ],
    }),
  ],
});
