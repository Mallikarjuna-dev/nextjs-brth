import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ data }) {
  const [event, setEvent] = useState(data);
  const router = useRouter();

  const handleFilter = async () => {
    const res = await fetch("http://localhost:8080/events?category=sports");
    const data = await res.json();
    setEvent(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <h2>Event lists</h2>
      <button onClick={handleFilter}>Sports</button>
      {event.map((el) => {
        return (
          <div key={el.id}>
            <p>
              {el.id} {el.title} | {el.category}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryStr = category ? "category=sports" : "";
  const res = await fetch(`http://localhost:8080/events?${queryStr}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
