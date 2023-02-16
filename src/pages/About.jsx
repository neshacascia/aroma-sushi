import Box from '../components/about/Box';
import AboutImages from '../components/AboutImages';
import Reviews from '../components/Reviews';
import OpeningTimes from '../components/OpeningTimes';
import Footer from '../components/Footer';

import restaurant from '/assets/about/about-4.jpg';
import akiraSignature from '/assets/about/chef-akira-signature.png';

export default function About() {
  return (
    <section className="flex flex-col gap-4 pt-40">
      <section className="flex flex-col gap-6">
        <h2 className="font-heading font-bold text-2xl px-6">
          ABOUT AROMA SUSHI
        </h2>
        <p className="text-base text-slate-700 px-6">
          Aroma Sushi is a modern sushi restaurant located in the heart of
          Toronto's Financial District. We offer a wide variety of carefully,
          selected fish of the highest quality. Our mission is to bring
          exceptional taste and quality to our valued guests.
        </p>

        <div className="flex justify-around pt-2 pb-4">
          <Box data="2002" text="FOUNDED" />
          <Box data="100%" text="SATISFACTION" />
        </div>

        <img src={restaurant} />
      </section>

      <section className="flex flex-col gap-4 px-6 py-12">
        <h2 className="font-heading font-bold text-2xl text-center">
          OUR STORY
        </h2>
        <p className="text-base text-slate-700">
          Meet Chef Akira, a passionate and talented sushi chef with over a
          decade of experience in the art of sushi-making. Fueled by his love
          for the craft, Chef Akira has founded a fine dining restaurant that
          showcases modern dishes created by his team of outstanding sushi
          chefs.
        </p>
        <p className="text-base text-slate-700">
          At Aroma Sushi, diners can expect a culinary experience that combines
          traditional techniques with innovative flavors and presentation.
          Whether you choose to dine in or order takeout, the attention to
          detail in each dish is evident.{' '}
        </p>
        <p className="text-base text-slate-700">
          Come taste the flavors of Japan at Chef Akira's restaurant and
          experience the passion and artistry of one of the world's finest sushi
          chefs.
        </p>

        <img src={akiraSignature} className="w-32 self-center" />
      </section>

      <AboutImages />
      <hr className="mt-12" />

      <section className="mt-8">
        <h2 className="font-heading font-bold text-2xl text-center px-6">
          WHAT OUR CUSTOMERS SAY
        </h2>

        <Reviews />
      </section>

      <OpeningTimes />
      <Footer />
    </section>
  );
}
