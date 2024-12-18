import React, { useEffect, useState } from "react";
import { getSkills } from "../functions";

export default function AboutMe() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <section className="bg-[#c3c3c3] flex flex-col items-center">
        <div className="lg:w-[65%] lg:py-20 w-[90%] py-3">
          <h2 className="text-2xl mb-5 font-bold">About Me</h2>
          <div className="flex flex-col gap-4 font-medium lg:flex-row">
            <p className="lg:w-[55%]">
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
              className="lg:w-[40%] lg:h-[40%] rounded-[12px]"
              src="/images/headshot.png"
              alt="Abdel's headshot"
            />
          </div>
        </div>
      </section>
      <hr className="w-full h-[5px] bg-orange-500 border-0" />
      <section className="bg-[url('/images/my-car.png')] bg-no-repeat bg-center bg-cover flex flex-col items-center">
        <div className="lg:w-[65%] lg:py-20 w-[90%] py-5 text-white">
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
      <section className="flex items-center justify-center">
        <div className="w-full sm:w-[65%] py-10 px-4">
          <h2 className="text-xl sm:text-2xl mb-5 font-bold text-center">
            Skills
          </h2>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {skills.length === 0 ? (
              <div className="flex justify-center items-center text-xl font-semibold text-gray-500">
                Loading...
              </div>
            ) : (
              skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex w-auto items-center border border-2 border-[orange] rounded-lg px-3 sm:px-[20px] py-[5px] text-[14px] sm:text-[18px] font-semibold"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name}'s icon`}
                    className="w-5 h-5 mr-2"
                  />
                  {skill.name}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
