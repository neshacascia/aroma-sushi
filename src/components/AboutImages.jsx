import { aboutImagesArr } from '../../data';

export default function AboutImages() {
  return (
    <div className="flex items-center gap-x-4">
      <img src={aboutImagesArr[0]} className="w-aboutImg mr-auto" />
      <div className="h-full flex flex-col gap-4">
        <img src={aboutImagesArr[1]} className="w-aboutImg " />
        <img src={aboutImagesArr[2]} className="w-aboutImg " />
      </div>
    </div>
  );
}
