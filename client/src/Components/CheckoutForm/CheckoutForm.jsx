import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState();
    const [transactionId, setTransactionId] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const navigate = useNavigate();

    useEffect(() => {

        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res?.data?.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            // console.log(error);
            setError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })


        if (confirmError) {
            console.log('confirm error')
        } else {
            if (paymentIntent.status === 'succeeded') {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment sucessful",
                    showConfirmButton: false,
                    timer: 2000
                });

                setTransactionId(paymentIntent.id);

                // Save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // UTC Date if your customar are world wide, use moment.js for that
                    cartIds: cart?.map(item => item?._id),
                    menuItemIds: cart?.map(item => item?.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);

                console.log('payment saved ', res);
                refetch();
                navigate('/dashbord/paymentHistory');
            }
            console.log('payment intent ', paymentIntent)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {/* <button type="submit" disabled={!stripe}>
                Pay
            </button> */}
            <div className="flex items-center justify-center mt-9">
                <button type="submit" disabled={!stripe || !clientSecret} className="bg-blue-800 w-1/3 p-3 rounded mt-3 text-white font-semibold">Pay</button>
            </div>
            <p className="text-red-400">{error}</p>
            {transactionId && <p className="text-lg font-semibold text-green-400">Your transaction id is: {transactionId}</p>}
        </form>
    )
}

export default CheckoutForm