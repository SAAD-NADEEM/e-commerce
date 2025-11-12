import { client } from "@/sanity/lib/client";

export async function best_sellers() {
  const query = `*[_type == "product" && reviewsCount > 5 ][0..10]{
        _id,
        name,
        details,
        price,
        "image": images[0].asset->url,
        reviewsCount,
        isStocked,
        brand
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
        details,
        price,
        "image": images[0].asset->url,
        reviewsCount,
        isStocked,
        brand
    }`;

  try {
    const res = await client.fetch(query);
    // console.log("Fetched best sellers:", res);
    return res;
  } catch (err) {
    console.log("Error fetching best sellers:", err);
  }
}

export async function fetch_search_products(
  q: string,
  m_price: string,
  cate: string[],
  page: number = 1,
  limit: number = 12,
  brands?: string[],
) {
  console.log(q, "this is query");
  console.log(m_price, "this is price");
  console.log(cate, "this is cate");

  const start = (page - 1) * limit
  const end = start + limit

  const query = `*[_type == "product"
  ${q ? `&& (name match $q || details match $q)` : ""}
  ${m_price ? `&& price <= $m_price` : ""}
  ${cate ? `&& (category->name in $cate)` : ""}][${start}...${end}] {
        _id,
        name,
        details,
        price,
        "image": images[0].asset->url,
        reviewsCount,
        isStocked,
        brand
    }`;
  const queryCount = `count(*[_type == "product"
  ${q ? `&& (name match $q || details match $q)` : ""}
  ${m_price ? `&& price <= $m_price` : ""}
  ${cate ? `&& (category->name in $cate)` : ""}])`

  try {
    const cateArray = Array.isArray(cate) ? cate : [cate].filter(Boolean);
    const [res, total] = await Promise.all([
      client.fetch(query, { q, m_price, cate: cateArray }),
      client.fetch(queryCount, { q, m_price, cate: cateArray }),
    ]) 
    return {products: res, total: Math.ceil(total/limit) };
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
        tags,
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
          isStocked,
          brand,
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
