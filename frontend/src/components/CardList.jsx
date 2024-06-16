import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CardList(props) {
  const { img, name, specialization, userId } = props;

  return (
    <>
      <div className="rounded-lg overflow-hidden relative">
        <LazyLoadImage src={img || 'https://placehold.co/600x600?text=Foto+Dokter'} className="rounded-lg aspect-square object-cover bg-sky-300 w-full" alt="Foto Dokter" effect="blur" wrapperClassName="w-full" />

        <p className="text-sm lg:text-lg py-3 ">{name}</p>
        <p className="text-sm text-[--primary]">{specialization}</p>
        <Link to={`/detail-dokter/${userId}`} className="after:absolute after:inset-0"></Link>
      </div>
    </>
  );
}

export default CardList;
