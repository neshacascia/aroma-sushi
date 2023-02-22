import CartForm from './CartForm';
import useFetch from '../hooks/useFetch';
import { getProductData } from '../../../data';

export default function CartItem(props) {
  const { data, isLoading } = useFetch('/menus?populate=*');

  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(data, id);

  return (
    <>
      {data.length > 0 && !isLoading && (
        <li className="my-4">
          <div className="font-heading flex gap-6 mx-6">
            <img
              src={
                import.meta.env.VITE_IMG_URL +
                productData?.attributes.image.data.attributes.url
              }
              className="w-cartItem h-cartItem rounded object-cover"
            />

            <div className="flex flex-col">
              <span className="font-bold">{productData?.attributes.name}</span>
              <div className="flex justify-between gap-10">
                <span className="">{`$${productData?.attributes.price} x ${quantity}`}</span>
                <span className="font-bold">
                  ${productData?.attributes.price * quantity.toFixed(2)}
                </span>
              </div>
            </div>

            <CartForm id={id} quantity={quantity} />
          </div>
        </li>
      )}
    </>
  );
}
