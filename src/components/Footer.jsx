import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { footerData, brandIcons } from '../../data';

export default function Footer() {
  const footerItems = footerData.map(item => (
    <li key={item.id} className="flex flex-col mb-8">
      <span className="font-bold text-lg mb-4">
        <FontAwesomeIcon icon={item.icon} className="mr-2"></FontAwesomeIcon>
        {item.heading}
      </span>{' '}
      <span className="text-gray-400 text-sm font-light pl-6">
        {item.line1}
      </span>{' '}
      <span className="text-gray-400 text-sm font-light pl-6">
        {item.line2}
      </span>
    </li>
  ));

  const brandItems = brandIcons.map((icon, ind) => (
    <Link to="#" key={ind}>
      <FontAwesomeIcon
        icon={icon}
        className="w-6 h-6 text-gray-300"
      ></FontAwesomeIcon>
    </Link>
  ));

  return (
    <footer className="bg-black text-white font-heading h-auto flex flex-col py-20 px-6">
      <ul className="h-auto flex flex-col justify-center mb-4">
        {footerItems}
      </ul>

      <hr />

      <div className="mt-10">
        <span className="text-gray-400 text-sm font-light">
          2022 Aroma Sushi Restaurant - All rights reserved
        </span>
        <div className="flex gap-2 mt-6">{brandItems}</div>
      </div>
    </footer>
  );
}
