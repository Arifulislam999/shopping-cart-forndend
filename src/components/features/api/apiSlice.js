import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["product"],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => "/product",
            providesTags: ["product"],
        }),
        getProductSingle: builder.query({
            query: (id) => `/product?id=${id}`,
            providesTags: ["product"],
        }),
        getSingleProductList: builder.query({
            query: () => "/product-list",
            keepUnusedDataFor: 600,
            providesTags: ["product"],
        }),
        getProductList: builder.mutation({
            query: (data) => ({
                url: "/product-list",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["product"],
        }),
        productDelete: builder.mutation({
            query: (id) => ({
                url: `/product-list/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["product"],
        }),
        quantatyIncrement: builder.mutation({
            query: ({ data, id }) => ({
                url: `/product-list/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["product"],
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/product",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["product"],
        }),
        updateProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/product/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["product"],
        }),
        updateSingleProductList: builder.mutation({
            query: ({ id, data }) => ({
                url: `/product-list/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["product"],
        }),
    }),
});
export const {
    useGetProductQuery,
    useGetProductSingleQuery,
    useGetProductListMutation,
    useGetSingleProductListQuery,
    useProductDeleteMutation,
    useQuantatyIncrementMutation,
    useAddProductMutation,
    useUpdateProductMutation,
    useUpdateSingleProductListMutation,
} = apiSlice;
