import { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import Button from './Button';

export default function FeaturedMenuItems() {
  const [featuredItems, setFeaturedItems] = useState([]);

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
    <MenuItems
      key={item.id}
      src={item?.attributes.image.data[0].attributes.url}
      name={item.attributes.name}
      price={item.attributes.price}
      desc={item.attributes.description}
    />
  ));

  return (
    <section className="h-auto px-6 flex flex-col items-center my-16">
      <h2 className="font-heading font-bold text-2xl mb-10">
        FEATURED MENU ITEMS
      </h2>

      <div className="flex flex-col gap-10 mb-14">{featuredMenuItems}</div>

      <Button text="BROWSE FULL MENU" border="true" hover="true" />
    </section>
  );
}
