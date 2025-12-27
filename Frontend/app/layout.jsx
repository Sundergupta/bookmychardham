import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
