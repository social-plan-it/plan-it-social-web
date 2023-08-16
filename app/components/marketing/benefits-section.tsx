import { Link } from "@remix-run/react";

const benefits = [
    {
        title: "Join a group",
        message: "Do what you love, meet others who love it, find your community. The rest is history!",
        imgUrl: "https://res.cloudinary.com/dxctpvd8v/image/upload/v1687225039/SocialPlan-it/Feature-Image-1_clboti.png", 
        imgAlt: "Group of women collaborating on a computer",
        link: "/groups",
    },
    {
        title: "Find an event",
        message: "Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.",
        imgUrl: "https://res.cloudinary.com/dxctpvd8v/image/upload/v1687225039/SocialPlan-it/Feature-Image-2_c5mgcb.png", 
        imgAlt: "Five members sitting on a ledge bench",
        link: "/events", 

    },
    {
        title: "Start a group",
        message: "You don’t have to be an expert to gather people together and explore shared interests.",
        imgUrl: "https://res.cloudinary.com/dxctpvd8v/image/upload/v1687225039/SocialPlan-it/Feature-Image-3_vpibsv.png", 
        imgAlt: "Multiple people conversing on the steps",
        link: "/groups/new",
    },
];

export function BenefitsSection() {
    return (
        <section className="bg-gray-800 pt-5 pb-5 text-white font-sans flex justify-center content-center">
            <div className="max-w-screen-xl flex flex-wrap content-between justify-center gap-y-8 gap-x-16 grid-cols-3">
                {benefits.map((benefit, index) => (
                    <Link key={index} to={benefit.link}>
                        <div className="flex flex-col p-5 text-start max-w-xs">
                            <div className="w-full pb-5">
                                <img className="w-full" src={benefit.imgUrl} alt={benefit.imgAlt} />
                            </div>
                            <h1 className="text-4xl font-bold mb-2">{benefit.title}</h1>
                            <p className="text-lg">{benefit.message}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}