import { Outfit } from "next/font/google";
import "/styles/globals.css";


const outfit = Outfit({subsets: ['latin'], weight:["400", "500", "600", "700"]})


export const metadata = {
  title: "Dev-Blogs",
  description: "Developed By developerpalakbasak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
