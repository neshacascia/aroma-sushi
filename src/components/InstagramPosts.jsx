import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
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
    <div className="flex h-full w-screen overflow-x-scroll gap-2 mb-10">
      {instagramPosts}
    </div>
  );
}
