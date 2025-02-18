
  return (
    <div className="relative min-h-screen bg-neutral-100 text-neutralWhite-900 flex items-center justify-center p-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}
      ></div>
      
      <div className="relative bg-neutral-950  p-8 rounded-2xl shadow-lg max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-neutralWhite-900 mb-4">{aboutUs.Title}</h1>
        <p className="text-neutralWhite-100 mb-6">
        {aboutUs.SubTitle}
        </p>
        
        <button className="bg-neutral-700 hover:bg-neutral-500 text-neutral-100 font-bold py-2 px-4 rounded">
        {aboutUs.buttonText}
        </button>
        
        <div className="border-t border-neutral-100 pt-6 mt-6">
          <h2 className="text-xl font-semibold text-neutral-100">{aboutUs.Commitment}</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-100">{aboutUs.GuaranteeTitle}</h3>
              <p className="text-neutralWhite-100">{aboutUs.GuaranteeSubTitle}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-100">{aboutUs.PaymentTitle}</h3>
              <p className="text-neutralWhite-100">{aboutUs.PaymentSubTitle}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-100">{aboutUs.ShippingTitle}</h3>
              <p className="text-neutralWhite-100">{aboutUs.ShippingSubTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
