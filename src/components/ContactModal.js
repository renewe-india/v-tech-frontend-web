'use client'

import axios from '@/lib/axios'
import React, { useState } from 'react'

function ContactModal({ isModalOpen, setIsModalOpen }) {
    const [selectedOption, setSelectedOption] = useState('Services')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        const formData = {
            name: name,
            email: email,
            mobile: phone,
            service: selectedOption,
            content: message,
        }

        try {
            await axios.post('api/form-submit/form-submitted', formData)
            setName('')
            setPhone('')
            setEmail('')
            setMessage('')
            setSelectedOption('Services')
            setIsModalOpen(false)
        } catch (error) {
            setError(error.response?.data?.message || 'Error submitting form')
        }
    }

    return (
        <div
            className={`z-50 fixed inset-0 flex justify-center items-center ${
                isModalOpen ? 'visible backdrop-blur-md' : 'invisible'
            }`}>
            <div className="modal-box relative lg:w-96 p-8 mx-2 rounded-lg shadow-lg bg-white">
                <form onSubmit={handleSubmit}>
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                        onClick={() => setIsModalOpen(false)}>
                        ✕
                    </button>
                    <div className="flex flex-col gap-4">
                        <label className="pt-0 label label-text font-semibold">
                            <span>Drop Us a Message</span>
                        </label>
                        <select
                            className={`border rounded-lg border-gray-300 block w-full p-3 text-lg ${
                                selectedOption === 'Services'
                                    ? 'text-gray-400'
                                    : 'text-black'
                            }`}
                            value={selectedOption}
                            onChange={e => setSelectedOption(e.target.value)}
                            required>
                            <option value="Services" disabled>
                                Services
                            </option>
                            <option value="Design & Engineering">
                                Design & Engineering
                            </option>
                            <option value="Project Management Consultancy">
                                Project Management Consultancy
                            </option>
                            <option value="Procurement Consultancy">
                                Procurement Consultancy
                            </option>
                            <option value="Owners Engineers">
                                Owners Engineers
                            </option>
                            <option value="Quality Inspection">
                                Quality Inspection
                            </option>
                            <option value="IMS">IMS</option>
                            <option value="ESG">ESG</option>
                            <option value="EPC">EPC</option>
                            <option value="Investment for PPA">
                                Investment for PPA
                            </option>
                            <option value="Other">Other</option>
                        </select>
                        <input
                            type="text"
                            className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
                            placeholder="Your Name *"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
                            placeholder="Your Phone *"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
                            placeholder="Your Email *"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
                            placeholder="Your Message *"
                            rows="4"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            type="submit"
                            className="bg-theme-default px-4 py-2 text-lg text-white rounded-lg">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactModal
