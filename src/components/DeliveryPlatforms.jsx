import uberEatsLogo from '/assets/delivery-logos/uber-eats-logo.svg';
import doorDashLogo from '/assets/delivery-logos/door-dash-logo.svg';
import skipTheDishesLogo from '/assets/delivery-logos/skip-the-dishes-logo.svg';

export default function DeliveryPlatforms() {
  return (
    <div className="bg-black text-white font-heading font-normal w-screen h-36 flex flex-col justify-center items-center gap-6">
      <span>Available on all delivery platforms</span>

      <div className="flex gap-8">
        <img src={uberEatsLogo} className="w-32" />
        <img src={doorDashLogo} className="w-32" />
        <img src={skipTheDishesLogo} className="w-24" />
      </div>
    </div>
  );
}
