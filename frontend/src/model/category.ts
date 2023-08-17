import * as Yup from "yup";

export const categorySchema = Yup.object({
    name: Yup.string().required("Trường name là bắt buộc"),
    description_long: Yup.string().required("Trường mô tả là bắt buộc"),
    image: Yup.string().required("Trường ảnh là bắt buộc"),
});
export type categoryForm = Yup.InferType<typeof categorySchema>;
