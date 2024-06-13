/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import CardList from "../components/CardList";

function ListDokter() {
  const [filter, setFilter] = useState("Semua");
  const [data, setData] = useState([]);
  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const getDoctors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/doctor/all"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
      <section className="py-10 px-4 lg:px-20">
        <section>
          <h1 className="text-xl lg:text-2xl font-semibold">Spesialisasi</h1>
          <div className="py-6 flex flex-row gap-2 lg:gap-4 overflow-x-auto items-center justify-evenly">
            <ButtonGroup
              img="fa-grip"
              title="Semua Dokter"
              isSelected={filter === "Semua"}
              onClick={() => handleFilter("Semua")}
            />
            <ButtonGroup
              img="fa-child"
              title="Umum"
              isSelected={filter === "Umum"}
              onClick={() => handleFilter("Umum")}
            />
            <ButtonGroup
              img="fa-lungs"
              title="Paru-Paru"
              isSelected={filter === "Paru-Paru"}
              onClick={() => handleFilter("Paru-Paru")}
            />
            <ButtonGroup
              img="fa-stomach"
              title="Lambung"
              isSelected={filter === "Lambung"}
              onClick={() => handleFilter("Lambung")}
            />
            <ButtonGroup
              img="fa-eye"
              title="Mata"
              isSelected={filter === "Mata"}
              onClick={() => handleFilter("Mata")}
            />
            <ButtonGroup
              img="fa-heartbeat"
              title="Jantung"
              isSelected={filter === "Jantung"}
              onClick={() => handleFilter("Jantung")}
            />
            <ButtonGroup
              img="fa-ear"
              title="THT"
              isSelected={filter === "THT"}
              onClick={() => handleFilter("THT")}
            />
            <ButtonGroup
              img="fas fa-bone"
              title="Tulang"
              isSelected={filter === "Tulang"}
              onClick={() => handleFilter("Tulang")}
            />
            <ButtonGroup
              img="fas fa-tooth"
              title="Gigi"
              isSelected={filter === "Gigi"}
              onClick={() => handleFilter("Gigi")}
            />
          </div>
        </section>
        <h1 className="text-xl my-4 lg:text-2xl font-semibold">
          {filter === "Semua" ? "Semua Dokter" : filter}
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 my-4">
          {filter === "Semua" &&
            data.map((data) => (
              <CardList
                key={data.doctor_id}
                name={data.name}
                specialization={data.specialization}
                img={data.imgUrl}
                userId={data.user_id}
              />
            ))}

          {filter !== "Semua" &&
            data
              .filter((data) => data.specialization === filter)
              .map((data) => (
                <CardList
                  key={data.doctor_id}
                  name={data.name}
                  specialization={data.specialization}
                  img={data.imgUrl}
                  userId={data.user_id}
                />
              ))}
        </section>
      </section>
    </>
  );
}

export default ListDokter;
