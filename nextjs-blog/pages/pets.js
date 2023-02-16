import Image from "next/image";

function Pets() {
  return (
    <div>
      <h1>Pets</h1>
      {["1", "2", "3", "4", "5"].map((el) => {
        return (
          <div key={el}>
            <Image src={`/${el}.jpg`} alt="pet" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
}

export default Pets;
