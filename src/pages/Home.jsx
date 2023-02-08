import Header from '../components/Header';
import DeliveryPlatforms from '../components/DeliveryPlatforms';
import Button from '../components/Button';
import AboutImages from '../components/AboutImages';
import FeaturedMenuItems from '../components/FeaturedMenuItems';
import InstagramPhotos from '../components/InstagramPosts';

export default function Home() {
  return (
    <section>
      <Header />
      <DeliveryPlatforms />

      <section className="h-screen flex flex-col justify-center items-center my-10">
        <div className="h-full px-6 flex flex-col justify-center gap-4 mb-10">
          <h2 className="font-heading font-bold text-2xl">
            SOME WORDS ABOUT US
          </h2>
          <p className="text-base text-slate-700">
            Aroma Sushi is a modern sushi restaurant located in the heart of
            Toronto's Financial District. We specialize in importing premium
            fish from Japan every morning. We offer a wide variety of carefully,
            selected fish of the highest quality.
          </p>

          <div className="flex gap-8">
            <Button
              bg="black"
              colour="white"
              text="ABOUT US"
              hoverBg="white"
              change="black"
            />
            <Button
              bg="white"
              colour="black"
              text="BROWSE MENU"
              border="true"
              hoverBg="black"
              hoverText="white"
            />
          </div>
        </div>

        <AboutImages />
      </section>

      <hr />
      <FeaturedMenuItems />
      <hr />

      <section className="font-heading h-full px-6 my-10">
        <div className="bg-black text-white flex flex-col items-center gap-4 py-10 ">
          <h3 className="font-bold text-2xl tracking-widest mb-5">
            OPENING TIMES
          </h3>
          <div className="flex items-center">
            <span>Tuesdays - Sundays</span>
            <hr className="border-line w-6 mx-4" />
            <span>11:00 - 22:00</span>
          </div>

          <div className="flex items-center mb-5">
            <span>Mondays</span>
            <hr className="border-line w-6 mx-4" />
            <span>Closed</span>
          </div>

          <span className="text-center font-bold text-lg tracking-wider mb-5">
            BOOK YOUR TABLE FOR <br /> LUNCH OR DINNER
          </span>

          <Button bg="white" colour="black" text="RESERVE NOW" />
        </div>
      </section>

      <InstagramPhotos />
    </section>
  );
}
