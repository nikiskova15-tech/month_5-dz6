import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { createProduct, getProducts } from "../api/products";


export function AddProductForm() {

    const queryClient = useQueryClient();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")

    const { data: products = [], isLoading, error: queryError, } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const { mutate, isPending, isError, error: mutationError, } = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            setTitle("")
            setPrice("")
            queryClient.invalidateQueries({ queryKey: ["products"] }); //?
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ title: title.trim(), price: Number(price), category: "phones", rating: 0, })
    };

    if (isLoading) return <p>Загрузка товаров...</p>;
    if (queryError) return <p>Ошибка загрузки: {queryError.message}</p>;

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название" required />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" type="number" min="0" required />
            <button type="submit" disabled={isPending}>{isPending ? "Сохраняем..." : "Добавить"}</button>
            {isError && <p>Ошибка добавления: {mutationError.message}</p>}

            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title} — {product.price} — рейтинг: {product.rating}</li>
                ))}
            </ul>
        </form>
    )
}