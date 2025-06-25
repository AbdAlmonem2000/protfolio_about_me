import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const metadata = {
  title: 'About Me | Abdelmonem Ahmed',
  description: 'Learn more about Abod Ahmed, a passionate software engineer specializing in modern web development.',
}

export default function RootLayout({ children }) {


  return (



    <html lang="en">
      <head>


      </head>
      <body>




        {children}




        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>

      </body>
    </html>
  );
}
