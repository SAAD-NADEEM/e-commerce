import { client } from "@/sanity/lib/client";

export async function best_sellers() {
  const query = `*[_type == "product" && reviewsCount > 5 ][0..10]{
        _id,
        name,
        price,
        "image": images[0].asset->url,
        reviewsCount,
    }`;

  try {
    const res = await client.fetch(query);
    // console.log("Fetched best sellers:", res);
    return res;
  } catch (err) {
    console.log("Error fetching best sellers:", err);
  }
}

export async function new_arrivals() {
  const query = `*[_type == "product"] | order(_createdAt desc)[0..10]{
        _id,
        name,
        price,
        "image": images[0].asset->url,
        reviewsCount,
    }`;

  try {
    const res = await client.fetch(query);
    // console.log("Fetched best sellers:", res);
    return res;
  } catch (err) {
    console.log("Error fetching best sellers:", err);
  }
}

export async function single_product(id: string, img: number = 0) {
  const query = `*[_type == "product" && _id == $id ][0]{
        _id,
        name,
        "image": images[${img}].asset->url,
        details,
        tags
    }`;

  try {
    const res = await client.fetch(query, { id });
    // console.log("Fetched single product:", res);
    return res;
  } catch (err) {
    console.log("Error fetching single product:", err);
  }
}

export async function product_details(id: string) {
  const query = `*[_type == "product" && _id == $id ][0]{
          _id,
          price,
          reviewsCount,
          name,
          "image": images[].asset->url,
          details,
          tags,
          category->{
            name
          },
          subcategory->{
            name
          }
        }`;

  try {
    const res = await client.fetch(query, { id });
    // console.log("Fetched product details:", res);
    return res;
  } catch (err) {
    console.log("Error fetching single product:", err);
  }
}
