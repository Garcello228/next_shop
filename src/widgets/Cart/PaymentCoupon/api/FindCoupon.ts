


async function FindCoupon(CouponTry : string)
{
    try {
        const responce = await fetch(`/api/coupon?name=${encodeURIComponent(CouponTry)}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })

        if (!responce.ok) {
            const errorData = await responce.json();
            throw new Error(errorData.error);
        }

        return responce.json()
    } catch(err) {
        throw err
    }
}

export default FindCoupon