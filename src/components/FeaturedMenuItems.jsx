import useFetch from './hooks/useFetch';
import MenuItems from './MenuItems';
import Button from './Button';

export default function FeaturedMenuItems() {
  const { data, isLoading } = useFetch('/featured-items?populate=*');

  const featuredMenuItems = data.map(item => (
    <MenuItems
      key={item.id}
      id={item.id}
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

      {!isLoading && data.length > 0 && (
        <div className="flex flex-col gap-10 mb-14">{featuredMenuItems}</div>
      )}

      <Button text="BROWSE FULL MENU" border="true" hover="true" />
    </section>
  );
}
