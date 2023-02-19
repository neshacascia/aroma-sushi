import useFetch from './hooks/useFetch';
import { Link } from 'react-router-dom';

export default function InstagramPhotos() {
  const { data, isLoading } = useFetch('/instagram-posts?populate=*');

  const posts = data[0]?.attributes.instagram.data.map(img => (
    <img
      src={import.meta.env.VITE_IMG_URL + img.attributes.url}
      key={img.id}
      className="w-instagram h-instagram object-cover"
    />
  ));

  return (
    <section className="flex flex-col items-center gap-6 mt-8">
      <h2 className="font-heading font-bold text-2xl">
        FOLLOW US ON{' '}
        <Link to="#" className="underline hover:text-gold">
          INSTAGRAM
        </Link>
      </h2>
      {!isLoading && data.length > 0 && (
        <div className="flex h-full w-screen overflow-x-scroll gap-2 mb-10">
          {posts}
        </div>
      )}
    </section>
  );
}
