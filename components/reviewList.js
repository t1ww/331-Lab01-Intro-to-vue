const reviewList = {
    /*html*/
    template:`
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
            <p v-if="review.recommend === 'Yes'">this user recommend this product</p>
            <p v-else>this user doesn't recommend this product</p>
        </li>
        </ul>
    </div>
    `,
    props: {
        reviews: {
            type: Array
        }
    },
    setup(props){
        const reviews = props.reviews
        return {
            reviews
        }
    }
}