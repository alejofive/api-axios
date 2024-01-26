import Api from "./Service/api";

function App() {
  const { characters, loading } = Api();

  console.log(characters);

  return (
    <div className="flex justify-center flex-col w-full items-center bg-gray-200">
      <div className="w-full text-center py-10 bg-white">
        <h1 className="text-6xl font-bold text-black">Rick and Morty</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-10 w-[1000px] gap-5 my-20">
          {characters.map((character) => (
            <div
              key={character.id}
              className="col-span-5 flex bg-gray-100 rounded-xl"
            >
              <img
                src={character.image}
                alt=""
                className="w-[200px] rounded-l-xl"
              />
              <div className="p-4">
                <h1 className="text-white text-lg font-bold">
                  {character.name}
                </h1>
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-lg font-bold">
                    {character.species}
                  </span>

                  <span className="text-zinc-600 text-lg font-bold">
                    {character.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
