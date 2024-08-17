import BillingForm from "../../components/Billingform"
import { getUserSubscriptionPlan } from "../../lib/stripe"

const Page = async () => {
    const subscriptionPlan = await getUserSubscriptionPlan()

    return <BillingForm subscriptionPlan={subscriptionPlan} /> 
}

export default Page