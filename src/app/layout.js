import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'V-TECH RENEWABLES',
    description:
        "V-TECH Renewables (Formerly known as V-TECH Consultancy Services), Founded in 2009 to provide the Services & Solutions in Electrical, Civil, Piping Infrastructure for Residential, Commercial, and Industrial. With over two decades combined experience in the market, we've introduced our new vertical, specializing in “Consultancy Services” for Renewable Energy and Solar Solutions.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon.ico"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon.ico"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon.ico"
                />

                {/* <link rel="manifest" href="/site.webmanifest" /> */}
                {/* <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} /> */}
            </head>
            <body className="bg-gray-50 text-gray-900 text-lg">
                <Navbar />
                <div className="flex flex-col min-h-screen">
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
