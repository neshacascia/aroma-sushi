export default function Button(props) {
  return (
    <button
      className={`font-display tracking-wider font-light bg-${props.bg} text-${
        props.colour
      } ${props.border ? 'border-black border-2' : undefined} px-8 py-4`}
    >
      {props.text}
    </button>
  );
}
