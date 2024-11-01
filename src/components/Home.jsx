import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-[#c3c3c3] flex flex-col items-center">
        <div className="w-[65%] py-[20px]">
          <h2 className="text-[24px] mb-[20px] font-bold">About me</h2>
          <div className="flex gap-4 font-medium">
            <p>
              I'm Abdelrahman Sayedahmed, a full-stack software developer with a
              passion for building impactful web applications. My journey into
              coding began in high school, where an inspiring robotics class
              introduced me to programming in C++ under the guidance of my
              teacher, Mr. Hans. This experience sparked a fascination with
              software development, leading me to explore block-based coding and
              eventually Python. Though I initially pursued computer science in
              college, navigating the traditional academic path proved
              challenging. I ultimately found my way back to coding through the
              Pursuit Fellowship, a program that focuses on immersive learning
              and career development for aspiring developers. Pursuit gave me
              the tools, community, and hands-on experience to confidently step
              into full-stack development and dive deeper into the tech
              landscape. Now, I specialize in both front-end and back-end
              technologies, bringing ideas to life with code. I'm excited to
              continue growing as a developer and to contribute to innovative
              projects that make a difference.
            </p>
            <img
              className="w-[45%] rounded-[12px]"
              src="./headshot.png"
              alt="Abdel's headshot image"
            />
          </div>
        </div>
        <hr class="w-full h-[5px] bg-orange-500 border-0" />
      </div>
      <div className="bg-[url('./my-car.png')] bg-no-repeat bg-center bg-[100%_auto] flex flex-col items-center">
        <div className="w-[65%] py-[20px] text-white">
          <h2 className="text-[24px] mb-[20px] font-bold">Beyond Coding</h2>
          <div className="flex gap-4 font-medium">
            <p className="bg-white bg-opacity-50 rounded-[12px] p-5">
              Outside of programming, I have a passion for working on my car. I
              bought this car at 19, fulfilling a long-held dream of mine.
              Although it was in rough shape —trashed and beaten— it was still
              running. I dedicated countless hours to restoring it, ensuring it
              operated smoothly once again. This car has been incredibly
              reliable, and I plan to keep it until I can pass it down to my
              child. Despite its challenges, I never gave up on it. With
              perseverance and hard work, I brought it back to life, and it
              serves as a testament to my commitment and resilience—values that
              I carry into my work as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
