export default function Topic({ topic }) {
  return (
    <li className="w-[30%] h-80 text-white">
      <div className="w-full h-2/3 grid place-items-center bg-gray-600">
        <span className="text-6xl">{topic.symbol}</span>
      </div>
      <div className="p-4 border border-gray-600">
        <p className="mb-4 text-xl">{topic.name}</p>
        <p className="flex justify-between text-gray-400">
          <span className="text-gray-200">{topic.author}</span>
          <span>{topic.created}</span>
        </p>
      </div>
    </li>
  );
}
