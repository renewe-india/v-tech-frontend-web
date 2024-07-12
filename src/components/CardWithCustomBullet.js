import React from "react"

const CardWithCustomBullet = ({ title, items }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-6">
      <div className="absolute top-[20px] left-[-16px] w-8 h-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full" />
      <h2 className="text-lg text-theme-default font-bold mb-4">{title}</h2>
      <ul className="mt-3 mx-5 list-none">
        {items.map((item, index) => (
          <li className="flex items-start  gap-4 mt-2" key={index}>
            <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardWithCustomBullet
