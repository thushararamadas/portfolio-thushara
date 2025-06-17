import React from "react";
import Image from "next/image";
import userData from "../../components/general/userData";
import Timeline from "@/src/components/effects/Timeline";

export default function AboutMe() {

  return (
    <section className="">
      <div className="">
        <div className="text-container max-w-6xl mx-auto pt-20">
           <h1 className="text-8xl text-white mb-[20px]">
          About Me.
          </h1>
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold text-white"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
     <Timeline data={userData.timeline} />
    </section>
  );
}
