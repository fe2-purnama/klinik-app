import React, { useState } from "react";
import CardList from "../components/CardList";
import ButtonGroup from "../components/ButtonGroup";

function ListDokter() {
  const [filter, setFilter] = useState("all");
  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <section className="py-10 px-4 lg:px-20">
        <section>
          <h1 className="text-xl lg:text-2xl font-semibold">Spesialisasi</h1>
          <div className="py-6 flex flex-row gap-2 lg:gap-4 overflow-x-auto items-center justify-evenly">
            <ButtonGroup
              img="fa-grip"
              title="Semua Dokter"
              isSelected={filter === "all"}
              onClick={() => handleFilter("all")}
            />
            <ButtonGroup
              img="fa-child"
              title="Kesehatan Anak"
              isSelected={filter === "anak"}
              onClick={() => handleFilter("anak")}
            />
            <ButtonGroup
              img="fa-lungs"
              title="Paru-paru"
              isSelected={filter === "paru-paru"}
              onClick={() => handleFilter("paru-paru")}
            />
            <ButtonGroup
              img="fa-stomach"
              title="Lambung"
              isSelected={filter === "lambung"}
              onClick={() => handleFilter("lambung")}
            />
            <ButtonGroup
              img="fa-eye"
              title="Mata"
              isSelected={filter === "mata"}
              onClick={() => handleFilter("mata")}
            />
            <ButtonGroup
              img="fa-heartbeat"
              title="Jantung"
              isSelected={filter === "jantung"}
              onClick={() => handleFilter("jantung")}
            />
            <ButtonGroup
              img="fa-ear"
              title="THT"
              isSelected={filter === "THT"}
              onClick={() => handleFilter("THT")}
            />
          </div>
        </section>
        {filter === "all" && (
          <section className="mt-10">
            <h1 className="text-xl lg:text-2xl font-semibold">
              Dokter Terbaik Kami
            </h1>
            <div className="flex flex-row flex-wrap gap-4 lg:gap-5 py-6">
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
            </div>
          </section>
        )}
        {(filter === "all" || filter === "anak") && (
          <section className="mt-10">
            <h1 className="text-xl lg:text-2xl font-semibold">
              Dokter Kesehatan Anak
            </h1>
            <div className="flex flex-row flex-wrap gap-4 lg:gap-5 py-6">
              <CardList />
              <CardList />
              <CardList />
              <CardList />
            </div>
          </section>
        )}
      </section>
    </>
  );
}

export default ListDokter;
