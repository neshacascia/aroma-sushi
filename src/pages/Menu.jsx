import { useState, useEffect } from 'react';
import Button from '../components/Button';
import MenuItems from '../components/MenuItems';

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL +
            `/menus?filters[initialCategory][$eq]=all&populate=*`,
          {
            headers: {
              Authorization: 'bearer ' + import.meta.env.VITE_API_TOKEN,
            },
          }
        );

        const data = await res.json();
        setMenuItems(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMenu();
  }, []);

  async function fetchByCategory(category) {
    let urlId;

    try {
      if (category === 'all') {
        urlId = '[initialCategory][$eq]=all';
      } else if (category === 'starters') {
        urlId = '[category][$eq]=starters';
      } else {
        urlId = '[category][$eq]=main';
      }

      const res = await fetch(
        import.meta.env.VITE_API_URL + `/menus?filters${urlId}&populate=*`,
        {
          headers: {
            Authorization: 'bearer ' + import.meta.env.VITE_API_TOKEN,
          },
        }
      );

      const data = await res.json();
      setMenuItems(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const menuItemsEl = menuItems.map(item => (
    <MenuItems
      key={item.id}
      id={item.id}
      src={item.attributes.image.data?.attributes.url}
      name={item.attributes.name}
      price={item.attributes.price}
      desc={item.attributes.description}
    />
  ));

  return (
    <section className="flex flex-col items-center gap-8 pt-32">
      <h1 className="font-heading font-bold text-3xl px-6">OUR MENU</h1>
      <div className="flex gap-6 mb-6">
        <Button
          text="ALL"
          menu="true"
          all="true"
          onClick={() => fetchByCategory('all')}
        />
        <Button
          text="STARTERS"
          menu="true"
          onClick={() => fetchByCategory('starters')}
        />
        <Button
          text="MAIN"
          menu="true"
          onClick={() => fetchByCategory('main')}
        />
      </div>

      <div className="flex flex-col gap-6 mb-14">{menuItemsEl}</div>
    </section>
  );
}
