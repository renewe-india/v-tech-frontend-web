'use client'

import axios from '@/lib/axios'
import React, { useState } from 'react'

function Page() {
    const [selectedOption, setSelectedOption] = useState('Services')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

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
            setSuccess(true)
            setTimeout(() => setSuccess(false), 5000)
        } catch (error) {
            setError(error.response?.data?.message || 'Error submitting form')
        }
    }

    return (
        <div className="my-32 mx-auto container px-4">
            <div className="text-theme-dark text-4xl mt-2">
                Drop Us a Message
            </div>

            {success && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <p className="text-lg">
                            Thank you for reaching out. Your message has been
                            received, and our team will promptly review it. You
                            can expect to hear from us within the next 24 hours.
                        </p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="mt-12">
                <div className="flex flex-col md:flex-row md:gap-10 gap-5">
                    <div className="flex flex-col gap-5 lg:w-1/2">
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
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-5">
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

                        <textarea
                            name=""
                            id=""
                            placeholder="Your Message *"
                            className="border rounded-lg border-gray-300 block w-full p-3 text-lg"
                            style={{ height: '130px' }}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        />
                        <div>
                            {error && <p className="text-red-500">{error}</p>}
                            <button
                                type="submit"
                                className="bg-theme-default px-4 py-3 text-lg lg:text-lg text-center font-sans text-white rounded-lg overflow-hidden">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Page
