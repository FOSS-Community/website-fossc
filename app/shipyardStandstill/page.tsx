"use client"
import { useEffect, useState } from 'react';
export default function page () {
    const VideoBackground: React.FC = () => {
      return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
          <video className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" autoPlay loop muted>
            <source src="./video.mp4" type="video/mp4"/>
          </video>
        </div>
      );
    };
    const HomePage: React.FC = () => {
      return (
        <div>
          <VideoBackground />
          {/* Return other content */}
        </div>
      );
    };
    
    
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    
    useEffect(() => {
        const targetDate = new Date('2024-05-12T20:00:00'); 
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
    <div>
        <div className="sm:block">
            <div className="mx-auto max-w-3xl text-center w-948 h-133 mt-20 ml-76 text-center text-inter  text-gray-500 font-bold text-5xl leading-tight tracking-tight">
                <p>wait what’s this shipyard thing?</p>
            </div>


            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 p-10">
        <span className="absolute inset-0 border-10 border-dashed border-black" />
        <div className="relative flex h-full transform items-end bg-myColor transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-7 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <img src="/logo192.png" alt="Logo" width={40} height={40} />

            <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                By Fossc
            </h2>
            </div>
            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                SHIPYARD
            </h3>
            <p className="mt-4 text-sm sm:text-base">
            Welcome to Shipyard, our innovative initiative where members convene at  local chapters to collaboratively design, develop, and deploy  groundbreaking products aimed at addressing real-world challenges.  Unlike traditional hackathons, Shipyard prioritizes collaboration over  competition. Whether you join us in person or remotely, you'll be part  of a dynamic community working together towards impactful solutions.
            </p>
            </div>
            </div>
        </a>
        </div>
        
        <div className="mt-5 px-10 text-center"></div>
                

                <div className="mx-auto max-w-screen-xl pl-40 py-20 lg:h-screen lg:items-right text-center">
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
        {/* Shipyard projects */}
    <div className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4">
  <div className="dark:bg-black flex bg-white shadow-lg rounded-lg h-500px my-1 px-1 lg:my-4 lg:px-4 w-full md:w-[47%]">
    <article className="overflow-hidden rounded-lg flex justify-between flex-col bg-neutral-900 transition-colors duration-1000 hover:bg-fosscGreen">
      <div>
        <header className="flex items-center p-2 md:p-4">
          <h1 className="dark:text-white font-semibold text-3xl 1.875 rem 2.25 rem hover:text-stone-950">
            QUICKFIRE
          </h1>
        </header>
        <p className="dark:text-white text-grey-darker font-layout text-xl 1.25rem 1.75rem p-2 md:p-4 hover:text-stone-950">
        Quickfire is a powerful Dart CLI tool that supercharges your Flutter  project setup. With just a few commands,
         you can create a new Flutter  project with all the essential features and configurations, 
         allowing you  to focus on building your app.Craft a feature-rich Flutter project with auth, Bloc architecture, 
         and  onboarding screens, effortlessly deployable on the Play Store without  manual hassles!
        </p>
        <p className="dark:text-white text-grey-darker font-layout text-xl 1.25rem 1.75rem p-2 md:p-4 hover:text-cyan-800">
        Dart, Flutter
        </p>
        
      </div>
      <div className="flex items-center justify-between leading-none  md:p-4 bg-neutral-600 w-1/6 m-4">
          17 stars
        </div>
      
      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
       
        <a
          className="w-full"
          href="https://github.com/FOSS-Community/quickfire"
          target="_blank"
          rel="noreferrer"
        >
          <button className="dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-white w-full font-bold py-3 px-5 rounded mb-3">
            Github link
          </button>
        </a>
      </footer>
    </article>
  </div>
  <div className="dark:bg-black flex bg-white shadow-lg rounded-lg h-500px my-1 px-1 lg:my-4 lg:px-4 w-full md:w-[48%]">
    <article className="overflow-hidden rounded-lg flex justify-between flex-col bg-neutral-900 transition-colors duration-1000 hover:bg-fosscGreen">
      <div>
        <header className="flex items-center p-2 md:p-4">
          <h1 className="dark:text-white font-layout text-3xl 1.875 rem 2.25 rem hover:text-stone-950">
            CHINO
          </h1>
        </header>
        <p className="dark:text-white text-grey-darker font-normal text-xl 1.25rem 1.75rem p-2 md:p-4 hover:text-stone-950">
          Chino is a terminal based chatbot based on ChatGPT.Uses RAG to generate responses based on user-provided documents.A wonderful project to learn about GPT-3 and how it can be used in real-world applications.
          You can use it to prepare for exams , to prepare for a speech and many other activites.

        </p>
        <p className="dark:text-white text-grey-darker font-layout text-xl 1.25rem 1.75rem p-2 md:p-4 hover:text-cyan-800">
        Python
        </p>
      </div>
      <div className="flex items-center justify-between leading-none  md:p-4 bg-neutral-600 w-1/6 m-4">
          13 stars
        </div>
      
      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a
          className="w-full"
          href="https://github.com/SAMAD101/Chino"
          target="_blank"
          rel="noreferrer"
        >
          <button className="dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-white w-full font-bold py-3 px-5 rounded mb-3">
            Github link
          </button>
        </a>
      </footer>
    </article>
  </div>
</div>


    </div>


    );
};