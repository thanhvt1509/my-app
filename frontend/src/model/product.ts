import * as Yup from "yup";

export const productSchema = Yup.object({
    name: Yup.string().required("Trường name là bắt buộc"),
    categoryId: Yup.string().required("Trường thương hiệu không được để trống"),
    description_long: Yup.string().required("Trường mô tả là bắt buộc"),
    price: Yup.number()
        .min(1, "Giá phải lớn hơn 0")
        .required("Trường giá là bắt buộc"),
    images: Yup.string().required("Trường ảnh là bắt buộc"),
});
export type productForm = Yup.InferType<typeof productSchema>;
