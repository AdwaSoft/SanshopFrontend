import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/managment/products",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product", id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    getProduct: builder.query({
      query: (productId) => `/managment/products/${productId}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    addNewProduct: builder.mutation({
      query: (initialProduct) => ({
        url: "/managment/productscreate",
        method: "POST",
        body: initialProduct,
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...product }) => ({
        url: `/managment/products/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
      // invalidatesTags: [{ type: "Product", id: "LIST" }],
      // transformResponse: (response, meta, arg) => response.data,
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/managment/products`,
        method: "DELETE",
        body: { id },
      }),

      invalidatesTags: (result, error, { id }) => [
        { type: "Product", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddNewProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = shopApi;
