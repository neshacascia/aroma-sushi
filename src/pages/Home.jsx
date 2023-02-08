import Header from '../components/Header';
import DeliveryPlatforms from '../components/DeliveryPlatforms';
import Button from '../components/Button';
import AboutImages from '../components/AboutImages';

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
    </section>
  );
}
