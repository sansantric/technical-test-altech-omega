import React, { useEffect, useState } from "react";

function Home() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
      console.log(navbar.offsetHeight);
    }
  }, []);
  return (
    <section 
      id="home"
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/blob-scene-haikei.svg)",
        marginTop: `-${navbarHeight}px`,
      }}
    >
      <div className="flex items-center justify-center h-full flex flex-col p-20">
        <h1 className="text-black text-2xl font-semibold">
          Transformasi Bisnis Anda dengan Solusi ERP Terintegrasi
        </h1>
        <h1 className="text-black text-md font-semibold">
          Meningkatkan Efisiensi dan Mengoptimalkan Kinerja Operasional Anda
        </h1>
      </div>
    </section >
  );
}

export default Home;
