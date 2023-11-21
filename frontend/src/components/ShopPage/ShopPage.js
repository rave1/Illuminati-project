import React from "react";
import { useAuth } from "../../context/useAuth";

export const ShopPage = () => {
    const {token} = useAuth()
    return (
        <div>
            <ul>
                <li>{token}</li>
                <li>{token}</li>
                <li>Shop</li>
                <li>Shop</li>
                <li>Shop</li>
                <li>Shop</li>
                <li>Shop</li>
                <li>Shop</li>
                <li>Shop</li>
                <li>{token}</li>
            </ul>
        </div>
  )
}
