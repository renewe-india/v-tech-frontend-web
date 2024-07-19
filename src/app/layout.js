import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const nunitoFont = Nunito_Sans({
    subsets: ['latin'],
    display: 'swap',
})
export const metadata = {
    title: 'V-TECH RENEWABLES',
    description:
        "V-TECH Renewables (Formerly known as V-TECH Consultancy Services), Founded in 2009 to provide the Services & Solutions in Electrical, Civil, Piping Infrastructure for Residential, Commercial, and Industrial. With over two decades combined experience in the market, we've introduced our new vertical, specializing in “Consultancy Services” for Renewable Energy and Solar Solutions.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={nunitoFont.className}>
                <Navbar />
                <div className="flex flex-col min-h-screen">
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
