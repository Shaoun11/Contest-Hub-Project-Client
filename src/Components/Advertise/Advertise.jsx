

const Advertise = () => {
    return (
        <section className="overflow-hidden mt-24 bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Enter our contest, showcase talent, win prizes
            </h2>
      
            <p className="hidden text-gray-500 md:mt-4 md:block">
            Unleash your creativity in our thrilling contest! Showcase skills, win prizes. Join now & let your talent shine. Don't miss out!"
            </p>
      
            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      
        <img
          alt="Student"
          src="https://i.ibb.co/G3fY4Pc/business-competition-winner-on-podium-with-winner-lifting-trophy-free-vector.jpg"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
    );
};

export default Advertise;