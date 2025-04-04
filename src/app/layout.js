import "@/styles/globals.scss";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export const metadata = {
    title: "Revival Cave",
    description: "Revival Cave, located in Tampa, FL strives to create a personalized experience for each individual client by combining great bodywork and skincare with exceptional hospitality.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="shortcut icon" href="/logos/new-logo.png" />
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
