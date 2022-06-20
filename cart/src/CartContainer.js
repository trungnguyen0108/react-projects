import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'


const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext()
    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cart.map((item) => {
                    console.log(item)
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr></hr>
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={() => clearCart()}>
                    clear cart
                </button>
            </footer>
        </section>
    )
}

export default CartContainer