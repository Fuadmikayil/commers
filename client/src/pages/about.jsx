export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-neutral-100 text-neutralWhite-900 flex items-center justify-center p-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}
      ></div>
      
      <div className="relative bg-neutral-950  p-8 rounded-2xl shadow-lg max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-neutralWhite-900 mb-4">About Us</h1>
        <p className="text-neutralWhite-100 mb-6">
          Fresh Arrivals Online - Discover Our Newest Collection Today.
        </p>
        
        <button className="bg-neutral-700 hover:bg-neutral-500 text-neutral-100 font-bold py-2 px-4 rounded">
          View Collection
        </button>
        
        <div className="border-t border-neutral-100 pt-6 mt-6">
          <h2 className="text-xl font-semibold text-neutral-100">Our Commitment</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-100">Satisfaction Guarantee</h3>
              <p className="text-neutralWhite-100">Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-100">Secure Payment</h3>
              <p className="text-neutralWhite-100">Your security is our priority. Your payments are secure with us.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-100">Free Shipping</h3>
              <p className="text-neutralWhite-100">Upgrade your style today and get FREE shipping on all orders! Don't miss out.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
