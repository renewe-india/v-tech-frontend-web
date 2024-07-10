import React from "react";

function OurGoalSection() {
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="text-center underline font-bold text-4xl  text-theme-dark mb-5">
        OUR GOAL
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-9 ">
        <div className="rounded-3xl p-6 bg-[#f2f2f2]">
          <div className="text-2xl font-bold text-theme-dark">Innovation</div>
          <div className="mt-4 text-lg">
            At V-TECH RENEWABLES, innovation is not just a goal; it's a way of
            thinking. We continuously explore cutting-edge solutions to meet the
            evolving needs of our clients.
          </div>
        </div>

        <div className="rounded-3xl p-6 bg-[#f2f2f2]">
          <div className="text-2xl font-bold text-theme-dark">
            Sustainability
          </div>
          <div className="mt-4 text-lg">
            Our dedication to sustainability is at the heart of everything we
            do. We strive to be pioneers in delivering renewable energy
            solutions that make a meaningful impact on the environment.
          </div>
        </div>

        <div className="rounded-3xl p-6 bg-[#f2f2f2]">
          <div className="text-2xl font-bold text-theme-dark">Excellence</div>
          <div className="mt-4 text-lg">
            With a foundation built on excellence, our seasoned team brings
            unmatched expertise and precision to every project we undertake.
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurGoalSection;
