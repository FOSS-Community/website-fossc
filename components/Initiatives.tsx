import React from "react";
import Image from "next/image";
import { developer, designer, students, creativeIndividual, conf1, Shipyard, openMic } from "@/assets";
import Card from "../components/ui/Card";

export default function Initiatives () {
  return (
      <div className="flex flex-col gap-16 mb-16">
        <h1 className="text-5xl font-bold text-white text-center py-6">We Include</h1>
        <div className="flex flex-col lg:flex-row justify-evenly text-center lg:text-left text-3xl text-custom-gray2 font-bold">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-0">
            <Image src={developer} alt="developer" width={20} height={20} />
            <h2 className="text-lg lg:text-3xl">Developers</h2>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-0">
            <Image src={designer} alt="designer" width={20} height={20} />
            <h2 className="text-lg lg:text-3xl">Designers</h2>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-0">
            <Image src={students} alt="student" width={20} height={20} />
            <h2 className="text-lg lg:text-3xl">Students</h2>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-0">
            <Image src={creativeIndividual} alt="creativeIndividual" width={20} height={20} />
            <h2 className="text-lg lg:text-3xl">Creative Individuals</h2>
          </div>
        </div>
        <div className="flex justify-center p-4">
            <div className="text-center text-white p-12 text-3xl font-bold rounded-3xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
                We aim to provide a space for students to develop their skills, collaborate with like-minded <br /> 
                individuals, and contribute to FOSS projects. The community welcomes anyone who is <br /> 
                interested in FOSS, regardless of their background or skill level.
            </div>
        </div>
        <h1 className="text-5xl font-bold text-white text-center py-6">What we do?</h1>
        <div className="flex flex-col items-center px-10 gap-10 lg:flex-row justify-evenly">
          <Card
            title="FOSSConf"
            description="Annual open source conference organized by FOSSCU."
            imageUrl={conf1.src}
          />
          <Card
            title="Shipyard"
            description="Build and ship every other weekend with us. Just Ship it 🚀🚀🚀"
            imageUrl={Shipyard.src}
          />
          <Card
            title="Open-mic"
            description="We host Open-mic sessions every other weekend at FOSSCU-K."
            imageUrl={openMic.src}
          />
        </div>

        <h1 className="text-3xl text-white text-center">and much more...</h1>
      </div>
  );
}