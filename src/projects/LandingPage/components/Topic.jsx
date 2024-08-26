export default function Topic({ topic }) {
  return (
    <li className="h-80 text-white rounded-xl cursor-pointer hover:scale-105 duration-100">
      <div className="w-full h-2/3 grid place-items-center rounded-ss-lg rounded-se-lg bg-gray-600">
        <span className="text-6xl font-bold">{topic.symbol}</span>
      </div>
      <div className="p-4 border border-gray-600 rounded-es-lg rounded-ee-lg">
        <p className="mb-4 text-2xl">{topic.name}</p>
        <p className="flex justify-between text-gray-400">
          <span className="text-gray-200">{topic.author}</span>
          <span>{topic.created}</span>
        </p>
      </div>
    </li>
  );
}
