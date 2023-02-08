import { useState, useEffect } from 'react';

export default function FeaturedMenuItems() {
  const [featuredItems, setFeaturedItems] = useState([]);

  // import.meta.env.VITE_API_URL
  // import.meta.env.VITE_API_TOKEN
  // import.meta.env.VITE_IMG_URL
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/featured-items?populate=*`,
          {
            headers: {
              Authorization: 'bearer ' + import.meta.env.VITE_API_TOKEN,
            },
          }
        );

        const data = await res.json();
        setFeaturedItems(data.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const featuredMenuItems = featuredItems.map(item => (
    <div className="w-max flex items-center gap-4">
      <img
        src={
          import.meta.env.VITE_IMG_URL +
          item?.attributes.image.data.attributes.url
        }
        className="w-menuImg h-menuImg rounded-full object-cover"
      />{' '}
      <div className="flex flex-col font-heading">
        <div className="w-80 flex justify-between">
          <h3 className="font-bold">{item.attributes.name}</h3>
          <div className="px-16 menu-items"></div>
          <span className="font-bold">${item.attributes.price}</span>
        </div>

        <span className="text-gray-600 text-sm w-80 mt-2">
          {item.attributes.description}
        </span>
      </div>
    </div>
  ));

  return (
    <section className="h-auto px-6 flex flex-col items-center my-20">
      <h2 className="font-heading font-bold text-2xl mb-10">
        FEATURED MENU ITEMS
      </h2>

      <div className="flex flex-col gap-10">{featuredMenuItems}</div>
    </section>
  );
}
