import heroImg from "../imgs/Hero-Image.png"

export default function HeroSection() {
  return (
    <section className="bg-[#E4EFF0] pt-10 pb-40">
      <div className="mx-auto w-screen max-w-screen-xl flex flex-wrap-reverse space-x-10 justify-center">
        <div className="w-4/5 max-w-[45%] min-w-[270px]">
          <h1 className="text-gray-800 font-bold text-4xl pb-8 w-full">Social made easy, memories made forever</h1>
          <p className="text-gray-800 font-bold text-lg pb-8 w-full">Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Social Plan-it. Events are happening every day—log in to join the fun.</p>
          <button className="bg-gray-800 rounded-3xl py-1 px-8 m-1 text-white hover:bg-emerald-50 hover:text-gray-800 hover:border-2 border-gray-800 uppercase font-semibold">Join</button>
        </div>
        <div className="w-4/5 mb-3 max-w-[600px] flex self-start">
          <img className="w-full" src={heroImg} alt="group of people" />
        </div>
      </div>
    </section>
  )
}