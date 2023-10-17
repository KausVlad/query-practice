import { useGetPizzasQuery } from "./store/api/api";

function App() {
  const { data, isLoading } = useGetPizzasQuery();
  console.log(data);
  return (
    <>
      {isLoading
        ? "Loading..."
        : data?.map((pizza) => <div key={pizza.id}>{pizza.pizzaName}</div>)}
    </>
  );
}

export default App;
