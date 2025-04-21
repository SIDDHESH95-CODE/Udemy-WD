import { useEffect, useState } from "react";

export const Effect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(raw => raw.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h1>List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
