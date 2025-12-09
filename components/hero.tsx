function Hero() {
  return (
    <div
      className="bg-primary px-0 md:px-20 pt-16 md:pt-24 pb-32 md:pb-40"
    >
      <div className="px-4 md:px-8">
        <div>
          <div>
            <p
              className="text-tertiery text-sm md:text-md flex justify-center"
            >Pricing</p>
            <h1
              className="text-white font-bold text-xl md:text-2xl flex justify-center"
            >Pricing plans</h1>
          </div>
          <p
            className="text-tertiery flex justify-center text-sm md:text-md"
          >Simple, transparent pricing that grows <br className="block md:hidden"/>with you. Try any plan free for 30 days.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero;