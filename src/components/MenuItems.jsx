import { useContext } from 'react';
import { StateContext } from '../context/StateContext';

export default function MenuItems(props) {
  const { setItemOpened, setSelectedItem } = useContext(StateContext);

  function openItemModal() {
    setItemOpened(true);
    setSelectedItem({ ...props });
  }

  return (
    <div className="w-max flex items-center gap-4" key={props.id}>
      <img
        src={import.meta.env.VITE_IMG_URL + props.src}
        className="w-menuImg h-menuImg rounded-full object-cover"
      />{' '}
      <div className="flex flex-col font-heading">
        <div className="w-80 flex justify-between">
          <h3
            className="font-bold cursor-pointer hover:text-gold"
            onClick={() => openItemModal()}
          >
            {props.name}
          </h3>
          <div className="px-16 menu-items"></div>
          <span className="font-bold">${props.price}</span>
        </div>

        <span className="text-gray-600 text-sm w-80 mt-2">{props.desc}</span>
      </div>
    </div>
  );
}
