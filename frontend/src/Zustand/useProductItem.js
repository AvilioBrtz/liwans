import { create } from "zustand"

const useProductItem = create((set) => ({
    product: JSON.parse(localStorage.getItem("product")) || null,
    setProduct: (product) => set({ product })
}))

export default useProductItem