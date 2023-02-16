export default function Box(props) {
  return (
    <div className="font-heading font-bold w-fit flex flex-col items-center border-button border-gray-300 py-4 px-12">
      <span className="text-gold font-bolder text-xl">{props.data}</span>
      <span className="font-bolder text-lg">{props.text}</span>
    </div>
  );
}
