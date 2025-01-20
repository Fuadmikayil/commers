import React from 'react'

const Hero = ({data}) => {
  return (
    <main className="bg-neutralWhite-100">
      <div className="container pt-[80px] sm:pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10">
        <div>
          <h2 className="text-neutral-800 text-3xl font-semibold mb-3">
            {data?.title}
          </h2>
          <p className="text-neutral-600 text-sm mb-12">{data?.subTitle}</p>
          <button className="bg-neutral-900 rounded px-6 py-2 text-neutralWhite-900 text-sm font-medium">
            {data?.buttonText}
          </button>
        </div>
        <img
          className=" w-[80%] ml-auto sm:mx-0 max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px]"
          src={`http://localhost:1337${data?.heroImg.url}`}
        />
      </div>
    </main>
  );
}

export default Hero