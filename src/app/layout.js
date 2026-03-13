import Header from '../components/Header'
import "./globals.css";
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
  display: 'swap',
})
export const metadata = {
  title: "Compare & Review",
  description: "Powered by nextJS and Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header/>
          {children}
      </body>
    </html>
  );
}
