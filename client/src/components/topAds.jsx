import React from 'react'
import { Link } from 'react-router-dom';

const TopAds = ({data}) => {
  return (
    <header className="bg-neutral-900 py-2 flex justify-center items-center gap-1">
      <p className="text-neutralWhite-900 text-sm">
        {data.text}
      </p>
      <Link to={`/${data.btnHref}`} className="text-neutralWhite-900 text-sm border-b border-transparent hover:border-neutralWhite-900 transition">
        {data.btnText}
      </Link>
    </header>
  );
}

export default TopAds