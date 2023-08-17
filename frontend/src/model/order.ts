import * as Yup from "yup";

export const orderSchema = Yup.object({
    fullName: Yup.string().required("Trường name là bắt buộc"),
    email: Yup.string().email().required("Trường email là bắt buộc"),
    phoneNumber: Yup.string().required("Trường số điện thoại là bắt buộc"),
    address: Yup.string().required("Trường địa chỉ là bắt buộc"),
    note: Yup.string().required("Trường ảnh là bắt buộc"),
    userId: Yup.string()
    // orderDate: Yup.date().default(() => new Date()),
    // totalMoney: Yup.number()
});
export type orderForm = Yup.InferType<typeof orderSchema>;
