import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { createProduct, getProducts } from "../api/products";


export function AddProductForm() {

    const queryClient = useQueryClient();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            setTitle('')
            setPrice('')
            alert('успешно создан продукт')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ title, price: Number(price), category: 'phones', rating: 0 })
    }

    const { data = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(),
        placeholderData: keepPreviousData
    })

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" type="number" />
            <button disabled={isPending}>{isPending ? 'Сохраняем...' : 'Добавить'}</button>
            {isError && <p>Ошибка: {error.message}</p>}

            <ul>
                {(data ?? []).map((p) => (
                    <li key={p.id}>{p.title} - {p.price} {p.rating}</li>
                ))}
            </ul>
        </form>
    )
}