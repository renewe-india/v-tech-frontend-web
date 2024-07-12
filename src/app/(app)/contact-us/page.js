"use client"

import React, { useState } from "react"

function page() {
  const [selectedOption, setSelectedOption] = useState("Services")
  return (
    <div className="my-32 mx-auto container px-4">
      <div className="text-theme-dark text-4xl mt-2">Drop Us a Message</div>

      <form action="some action" className="mt-12">
        <div className="flex flex-col md:flex-row md:gap-10 gap-4">
          <div className="flex flex-col gap-3 lg:w-1/2">
            <select
              className={`border rounded-lg border-gray-300 block w-full p-3 text-lg ${
                selectedOption === "Services" ? "text-gray-400" : "text-black"
              }`}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Services" disabled>
                Services
              </option>
              <option value="Design & Engineering">Design & Engineering</option>
              <option value="Project Management Consultancy">
                Project Management Consultancy
              </option>
              <option value="Procurement Consultancy">
                Procurement Consultancy
              </option>
              <option value="Owners Engineers">Owners Engineers</option>
              <option value="Quality Inspection">Quality Inspection</option>
              <option value="IMS">IMS</option>
              <option value="ESG">ESG</option>
              <option value="EPC">EPC</option>
              <option value="Investment for PPA">Investment for PPA</option>
            </select>
            <input
              type="text"
              className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
              placeholder="Message Subject *"
            />
            <input
              type="text"
              className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
              placeholder="Your Name *"
            />
            <input
              type="text"
              className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
              placeholder="Your Phone *"
            />
            <input
              type="text"
              className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
              placeholder="Your Email *"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-3">
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Your Message *"
              className="border rounded-lg  border-gray-300 block w-full p-3 text-lg"
             />
            <div>
              <button className="bg-theme-default px-4 py-3 text-lg lg:text-lg text-center font-sans text-white rounded-lg overflow-hidden">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default page
