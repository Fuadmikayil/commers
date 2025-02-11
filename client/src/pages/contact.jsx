export default function ContactPage() {
    return (
      <div className="relative min-h-screen bg-neutral-100 text-neutralWhite-900 flex items-center justify-center p-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}
        ></div>
        
        <div className="relative bg-neutral-950 p-8 rounded-2xl shadow-lg max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold text-neutralWhite-900 mb-4">Contact Us</h1>
          <p className="text-neutralWhite-100 mb-6">
            Have questions? We're here to help. Get in touch with us today!
          </p>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-neutral-800 text-neutralWhite-100 rounded-md shadow-md border border-neutral-700 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-neutral-800 text-neutralWhite-100 rounded-md shadow-md border border-neutral-700 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-neutral-800 text-neutralWhite-100 rounded-md shadow-md border border-neutral-700 focus:outline-none"
                rows="4"
              />
            </div>
            <div>
              <button className="bg-neutral-700 hover:bg-neutral-500 text-neutral-100 font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </div>
          </form>
          
          <div className="border-t border-neutral-100 pt-6 mt-6">
            <h2 className="text-xl font-semibold text-neutral-100">Our Location</h2>
            <p className="text-neutralWhite-100 mt-4">We are located at:</p>
            <p className="text-neutralWhite-100">1234 Fashion Street, City Name, Country</p>
          </div>
        </div>
      </div>
    );
  }
  