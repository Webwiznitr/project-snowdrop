import React from "react";
import Image from "next/image";

const eventItems = [
    {
        id: 1,
        image: "/image/HO.png",
        title: "Code your way to a good time!",
        desc: "Hackodisha is brought to you by Webwiz on the occasion of the Diamond Jubilee celebration of NIT Rourkela. It is a community based virtual hackathon that is not limited only to Odisha but is meant for the students and coding enthusiasts all around the country. Scheduled on 18-19th September, Hackodisha is a 36 hour event where participants can showcase their unique ideas and expand their boundaries with sparkles of creativity.",
    },
    {
        id: 2,
        image: "/image/HO.png",
        title: "Code your way to a good time!",
        desc: "Hackodisha is brought to you by Webwiz on the occasion of the Diamond Jubilee celebration of NIT Rourkela. It is a community based virtual hackathon that is not limited only to Odisha but is meant for the students and coding enthusiasts all around the country. Scheduled on 18-19th September, Hackodisha is a 36 hour event where participants can showcase their unique ideas and expand their boundaries with sparkles of creativity.",
    },
    {
        id: 3,
        image: "/image/HO.png",
        title: "Code your way to a good time!",
        desc: "Hackodisha is brought to you by Webwiz on the occasion of the Diamond Jubilee celebration of NIT Rourkela. It is a community based virtual hackathon that is not limited only to Odisha but is meant for the students and coding enthusiasts all around the country. Scheduled on 18-19th September, Hackodisha is a 36 hour event where participants can showcase their unique ideas and expand their boundaries with sparkles of creativity.",
    },
];

export default function EventsPage(){
    return(
        <div className="w-full pt-10">
            <h1 className="mx-auto mb-14 text-center py-4 text-xl font-semibold
            w-32 rounded-full border-2 border-purple-900">
                Events
            </h1>

            <div className="event-wrapper xl:w-4/5 w-[90%] space-y-14 mx-auto">
                {eventItems.map((item) => 
                <div key={item.id} className="lg:flex even:flex-row-reverse justify-between">

                    <Image src={item.image} alt="" width={453} height={316}
                    className="md:w-[453px] md:h-[296px] w-[320px] h-[200px] lg:mx-0 mx-auto rounded-md object-cover border-2 border-purple-900" />

                    <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
                        <div className="lg:text-left text-center">
                        <h2 className="md:text-3xl text-xl font-bold 
                        inline-block text-transparent bg-clip-text
                        bg-gradient-to-r from-[#8C6CEA] via-[#FF5E69] to-[#FFA84B]">
                            {item.title}
                        </h2>
                        </div>
                        <p className="md:text-lg text-sm mt-4">{item.desc}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};