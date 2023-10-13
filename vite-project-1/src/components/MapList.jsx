export default function MapList() {
  // const list = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];
  const list = [
    { id: "ele-1", name: "Element 1" },
    { id: "ele-2", name: "Element 2" },
    { id: "ele-3", name: "Element 3" },
    { id: "ele-4", name: "Element 4" },
    { id: "ele-5", name: "Element 5" },
  ];
  return (
    <>
      <ul>
        {list.map((ele) => (
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
    </>
  );
}
