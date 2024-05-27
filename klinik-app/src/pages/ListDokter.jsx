import React, { useState } from "react";
import CardList from "../components/CardList";
import ButtonGroup from "../components/ButtonGroup";
import IcoAll from "../assets/dotmenu.png";
import IcoAnak from "../assets/child.png";
import IcoParu from "../assets/paru.png";
import IcoLambung from "../assets/lambung.png";
import IcoMata from "../assets/eye.png";
import IcoJantung from "../assets/jantung.png";
import IcoTHT from "../assets/ear.png";

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
              img={IcoAll}
              title="Semua Dokter"
              onClick={() => handleFilter("all")}
            />
            <ButtonGroup
              img={IcoAnak}
              title="Kesehatan Anak"
              onClick={() => handleFilter("anak")}
            />
            <ButtonGroup
              img={IcoParu}
              title="Paru-paru"
              onClick={() => handleFilter("paru-paru")}
            />
            <ButtonGroup
              img={IcoLambung}
              title="Lambung"
              onClick={() => handleFilter("lambung")}
            />
            <ButtonGroup
              img={IcoMata}
              title="Mata"
              onClick={() => handleFilter("mata")}
            />
            <ButtonGroup
              img={IcoJantung}
              title="Jantung"
              onClick={() => handleFilter("jantung")}
            />
            <ButtonGroup
              img={IcoTHT}
              title="THT"
              onClick={() => handleFilter("THT")}
            />
          </div>
        </section>
        {filter === "all" && (
          <section className="mt-10">
            <h1 className="text-xl lg:text-2xl font-semibold">
              Dokter Terbaik Kami
            </h1>
            <div className="flex flex-row flex-wrap gap-4 lg:gap-7 py-6">
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
            <div className="flex flex-row flex-wrap gap-4 lg:gap-7 py-6">
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
