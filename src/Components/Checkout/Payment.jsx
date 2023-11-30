import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout";

// TODO: add publishable key
const stripePromise = loadStripe(
"pk_test_51OHpPbHeHzAXsbmyxMFYTVmlfNiH1dO0sXlwehorwb14mbLUyyJH1iPr3pT7tzrToBoWX5dwRIDFHd4GuSXqZb3O00IdnKFLOr"
);
const Payment = () => {
    return (
        <div>
         
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;