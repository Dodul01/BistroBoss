import SectionHeading from "../../../../Components/SectionHeading/SectionHeading"
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../../../../Components/CheckoutForm/CheckoutForm";

// TODO : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const Payment = () => {
    return (
        <div>
            <SectionHeading heading={'payment'} subHeading={' Bed Price Good Food '} />

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    )
}

export default Payment