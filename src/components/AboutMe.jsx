import React from "react";

export default function AboutMe() {
  return (
    <div>
      <section className="bg-[#c3c3c3] flex flex-col items-center">
        <div className="w-[65%] py-20">
          <h2 className="text-2xl mb-5 font-bold">About Me</h2>
          <div className="flex gap-4 font-medium">
            <p className="w-[55%]">
              I'm Abdelrahman Sayedahmed, a full-stack software developer with a
              passion for building impactful web applications. My journey into
              coding began in high school, where an inspiring robotics class
              introduced me to programming in C++ under the guidance of my
              teacher, Mr. Hans. This experience sparked a fascination with
              software development, leading me to explore block-based coding and
              eventually Python.
              <br />
              <br />
              Though I initially pursued computer science in college, navigating
              the traditional academic path proved challenging. I ultimately
              found my way back to coding through the Pursuit Fellowship, a
              program that focuses on immersive learning and career development
              for aspiring developers. Pursuit gave me the tools, community, and
              hands-on experience to confidently step into full-stack
              development and dive deeper into the tech landscape.
              <br />
              <br />
              Now, I specialize in both front-end and back-end technologies,
              bringing ideas to life with code. I'm excited to continue growing
              as a developer and to contribute to innovative projects that make
              a difference.
            </p>
            <img
              className="w-[40%] rounded-[12px]"
              src="./headshot.png"
              alt="Abdel's headshot"
            />
          </div>
        </div>
      </section>
      <hr className="w-full h-[5px] bg-orange-500 border-0" />
      <section className="bg-[url('./my-car.png')] bg-no-repeat bg-center bg-cover flex flex-col items-center">
        <div className="w-[65%] py-20 text-white">
          <h2 className="text-2xl mb-5 font-bold">Beyond Coding</h2>
          <p className="bg-black bg-opacity-70 rounded-[12px] p-5">
            Outside of programming, I have a passion for working on my car. I
            bought this car at 19, fulfilling a long-held dream of mine.
            Although it was in rough shape — trashed and beaten — it was still
            running. I dedicated countless hours to restoring it, ensuring it
            operated smoothly once again. This car has been incredibly reliable,
            and I plan to keep it until I can pass it down to my child. Despite
            its challenges, I never gave up on it. With perseverance and hard
            work, I brought it back to life, and it serves as a testament to my
            commitment and resilience—values that I carry into my work as a
            developer.
            <br />
            <br />
            In addition to my love for cars, I have a strong passion for working
            on gaming computers. Whether building systems from the ground up or
            upgrading components, I find the process incredibly therapeutic.
            There's something deeply satisfying about assembling each part and
            witnessing the final product come to life. I enjoy learning about
            the function of each component and understanding their importance
            within the overall system. This hands-on experience not only brings
            me joy but also fuels my curiosity and appreciation for technology.
          </p>
        </div>
      </section>
      <hr className="w-full h-[5px] bg-orange-500 border-0" />
      <section>
        <div className="py-20 flex justify-center items-center">
          <h2 className="text-2xl mb-5 font-bold">Skills</h2>
          <ul>
            
          </ul>
        </div>
      </section>
    </div>
  );
}
