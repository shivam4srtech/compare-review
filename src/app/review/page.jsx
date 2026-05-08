import ProductHero from "@/components/ProductHero";
import RelatedReviews from "@/components/RelatedReviews";
import ReviewContent from "@/components/ReviewContent";
import ReviewCoupon from "@/components/ReviewCoupon";
import ReviewFaqs from "@/components/ReviewFaqs";
export default function ReviewPage(){
    return(
        <>
            <ProductHero/>
            <ReviewCoupon/>
            <ReviewContent/>
            <ReviewFaqs/>
            <RelatedReviews/>
        </>
    )
}