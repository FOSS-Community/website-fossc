"use client"
import { useEffect, useState } from 'react';
export default function page () {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    
    useEffect(() => {
        const targetDate = new Date('2024-04-20T19:00:00'); 
        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate.getTime() - now.getTime();
            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                setCountdown({ days, hours, minutes });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
                <>
                <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 p-10">
            <span className="absolute inset-0 border-10 border-dashed border-black" />
            <div className="relative flex h-full transform items-end bg-myColor transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-7 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    <img src="/logo192.png" alt="Logo" width={40} height={40} />

                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        Welcome to Shipyard, our innovative initiative where members convene at  local chapters to collaboratively design, develop, and deploy  groundbreaking products aimed at addressing real-world challenges.  Unlike traditional hackathons, Shipyard prioritizes collaboration over  competition. Whether you join us in person or remotely, you'll be part  of a dynamic community working together towards impactful solutions.  Connect with us on Discord at #shipyard for further details
                    </h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        SHIPYARD
                    </h3>
                    <p className="mt-4 text-sm sm:text-base">
                        By Fossc
                    </p>
                </div>
            </div>

            <h1
                className=" mt-7 py-1 px-5 bg-gradient-to-r cursor-grab from-[#2b422d] via-[#2d472f] to-gray-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Time Left....
            </h1>

            </a><div className="mt-14 px-10 text-center"></div><div className="mx-auto max-w-screen-xl pl-10 py-2 lg:min-h-14 lg:items-right text-center">
                    <div className="p-4 w-2/6 h-1/6  mx-auto rounded-tl-22 rounded-tr-none rounded-br-none rounded-bl-none mx-auto bg-fosscGreen overflow-hidden">
                        <div className="flex justify-center mt-4">
                            <div className="flex items-center mr-4">
                                <div className="text-4xl font-bold text-black">{countdown.days}</div>
                                <div className="ml-1 text-xl text-black">Days</div>
                            </div>
                            <div className="flex items-center mr-4">
                                <div className="text-4xl font-bold text-black">{countdown.hours}</div>
                                <div className="ml-1 text-xl text-black">Hours</div>
                            </div>
                            <div className="flex items-center mr-4">
                                <div className="text-4xl font-bold text-black">{countdown.minutes}</div>
                                <div className="ml-1 text-xl text-black">Minutes</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='mt-20 px-2 text-center'>
            <button className="mt-1 py-3 px-6 bg-fosscGreen text-white rounded-lg hover:bg-white hover:text-black transition-colors">
                Submit
            </button>
            </div>
     </>


    );
}