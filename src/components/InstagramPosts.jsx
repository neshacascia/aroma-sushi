import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function InstagramPhotos() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + '/instagram-posts?populate=*',
          {
            headers: {
              Authorization: 'bearer ' + import.meta.env.VITE_API_TOKEN,
            },
          }
        );
        const data = await res.json();
        setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const instagramPosts = posts[0]?.attributes.instagram.data.map(img => (
    <img
      src={import.meta.env.VITE_IMG_URL + img.attributes.url}
      key={img.id}
      className="w-instagram h-instagram object-cover"
    />
  ));

  return (
    <section className="flex flex-col items-center gap-6">
      <h2 className="font-heading font-bold text-2xl">
        FOLLOW US ON{' '}
        <Link to="#" className="underline hover:text-gold">
          INSTAGRAM
        </Link>
      </h2>
      <div className="flex h-full w-screen overflow-x-scroll gap-2 mb-10">
        {instagramPosts}
      </div>
    </section>
  );
}
