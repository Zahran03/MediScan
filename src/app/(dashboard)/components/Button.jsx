export default function Button({ text, onClick }) {
  return (
    <button
      className="px-6 py-3 bg-blue-600 text-white text-base font-bold rounded-md border-none cursor-pointer transition-colors duration-300 hover:bg-blue-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
