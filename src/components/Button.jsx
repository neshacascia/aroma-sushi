export default function Button(props) {
  return props.menu ? (
    <button
      onClick={props.onClick}
      className={`text-black bg-white border-black border-2 active:bg-black focus:bg-black focus:text-white after:bg-black hover:text-white px-8 py-4 btn-fade`}
    >
      {props.text}
    </button>
  ) : (
    <button
      className={`${
        props.border && props.hover
          ? `text-black bg-white border-black border-2 after:bg-black hover:text-white`
          : props.border
          ? `text-black bg-white border-black border-2`
          : `bg-black text-white after:bg-white hover:text-black hover:border-2 hover:border-black`
      } px-8 py-4 btn-fade`}
    >
      {props.text}
    </button>
  );
}
