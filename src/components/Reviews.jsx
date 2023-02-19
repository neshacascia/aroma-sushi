import useFetch from './hooks/useFetch';

export default function Reviews() {
  const { data, isLoading } = useFetch('/customer-reviews?populate=*');

  const reviews = data.map(review => (
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
    <section className="px-6 mt-10">
      {!isLoading && data.length > 0 && (
        <div className="flex flex-col gap-6">{reviews}</div>
      )}
    </section>
  );
}
