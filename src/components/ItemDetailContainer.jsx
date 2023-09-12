import { useState, useEffect } from 'react';
import React from "react";
import { getProduct } from "../products";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
            .then((response) => {
                setItem(response);
            })
            .catch(() => {
                setItem(null)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);


    return <ItemDetail product={product} isLoading={isLoading} />;
};

export default ItemDetailContainer;