import React from 'react'

const FeatureCard = ({item}) => {
  return (
    <div className="flex flex-col items-center md:items-start ">
      <div className="p-3 bg-neutralWhite-100 rounded-full">
        <img className="w-6 y-6" src={item.img} alt="" />
      </div>
      <h2 className="mt-6 mb-3 text-neutral-800 font-semibold">{item.title}</h2>
      <p className="text-neutral-500 text-sm text-center md:text-start max-w-[85%]">
        {item.subtitle}
      </p>
    </div>
  );
}

export default FeatureCard