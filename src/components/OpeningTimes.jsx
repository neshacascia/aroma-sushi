import Button from './Button';

import location from '/assets/location.png';

export default function OpeningTimes() {
  return (
    <section className="font-heading h-full">
      <section className="px-6 my-10">
        <div className="bg-black text-white flex flex-col items-center gap-4 py-10">
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

          <Button border="true" text="RESERVE NOW" />
        </div>
      </section>

      <img src={location} className="-mb-4" />
    </section>
  );
}
