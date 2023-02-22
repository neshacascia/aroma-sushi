import {
  faLocationDot,
  faCalendar,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareTwitter,
  faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons';

export const aboutImagesArr = [
  '/assets/about/about-1.jpg',
  '/assets/about/about-2.jpg',
  '/assets/about/about-3.jpg',
];

export const navbarData = [
  {
    id: 'n1',
    title: 'home',
    path: '/',
  },
  {
    id: 'n2',
    title: 'about',
    path: '/about',
  },
  {
    id: 'n3',
    title: 'menu',
    path: '/menu',
  },
  {
    id: 'n4',
    title: 'reservations',
    path: '/reservations',
  },
];
export const footerData = [
  {
    id: 'i1',
    icon: faLocationDot,
    heading: 'Address',
    line1: '123 Yonge St.',
    line2: 'Toronto, Canada',
  },
  {
    id: 'i2',
    icon: faCalendar,
    heading: 'Reservations',
    line1: '+1 123-456-7890',
    line2: 'b**karoma@aromasushi.com',
  },
  {
    id: 'i3',
    icon: faClock,
    heading: 'Opening Hours',
    line1: 'Tue - Sun: 11:00 - 22:00',
    line2: 'Mon: Closed',
  },
];

export const brandIcons = [
  faSquareInstagram,
  faSquareFacebook,
  faSquareTwitter,
  faSquareYoutube,
];

export function getProductData(productsArray, id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData === undefined) {
    return;
  }

  return productData;
}
