import { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + '/customer-reviews?populate=*',
          {
            headers: {
              Authorization: 'bearer ' + import.meta.env.VITE_API_TOKEN,
            },
          }
        );

        const data = await res.json();

        setReviews(data.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const reviewsElements = reviews.map(review => (
    <div
      className="text-gray-600 font-heading text-base border-button p-8"
      key={review.id}
    >
      <img
        src={
          import.meta.env.VITE_IMG_URL +
          review.attributes.platform.data.attributes.url
        }
        className="mb-6"
      />
      <p className="mb-6">"{review.attributes.review}"</p>
      <div className="flex items-center gap-4">
        <img
          src={
            import.meta.env.VITE_IMG_URL +
            review.attributes.avatar.data.attributes.url
          }
          className="w-reviewsImg h-reviewsImg object-cover rounded-full"
        />
        <span className="text-black text-xl font-bold">
          {review.attributes.name.toUpperCase()}
        </span>
      </div>
    </div>
  ));

  return (
    <section className="flex flex-col gap-6 px-6 mt-10">
      {reviewsElements}
    </section>
  );
}
