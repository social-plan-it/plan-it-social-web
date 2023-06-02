import benefitImg1 from "../imgs/Feature-Image-1.png"
import benefitImg2 from "../imgs/Feature-Image-2.png"
import benefitImg3 from "../imgs/Feature-Image-3.png"

export default function BenefitsSection(){
    return(
        <>
            <section className="bg-gray-800 pt-10 pb-40 text-white font-sans flex justify-center content-center">
                <div className="max-w-screen-xl flex flex-wrap content-between justify-center gap-y-4 gap-x-4 grid-cols-3" >
                    <a href="">
                        <div className="flex flex-col p-5 text-center max-w-xs">
                            <div className="w-full">
                                <img className="w-full" src={benefitImg1} alt="group of people" />
                            </div>
                            <h1 className="text-4xl font-bold mb-2">Join a group</h1>
                            <p className="text-lg" >Do what you love, meet others who love it, find your community. The rest is history!</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="flex flex-col p-5 text-center max-w-xs">
                            <div className="w-full">
                                <img className="w-full" src={benefitImg2} alt="group of people" />
                            </div>
                            <h1 className="text-4xl font-bold mb-2">Find an event</h1>
                            <p className="text-lg" >Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="flex flex-col p-5 text-center max-w-xs">
                            <div className="w-full">
                                <img className="w-full" src={benefitImg3} alt="group of people" />
                            </div>
                            <h1 className="text-4xl font-bold mb-2">Start a group</h1>
                            <p className="text-lg" >You don’t have to be an expert to gather people together and explore shared interests.</p>
                        </div>
                    </a>
                </div>
            </section>  
        </>
    )
}