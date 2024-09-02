import React from "react";

function About() {
  return (
    <section id="about" className="py-16 bg-white" >
      <div className="container mx-auto px-6 md:px-20 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001220] mb-6">
          About
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Selamat datang di{" "}
          <span className="font-semibold">[Nama Perusahaan]</span>, sebuah
          startup yang berkomitmen untuk mendukung pertumbuhan bisnis Anda
          melalui solusi ERP (Enterprise Resource Planning) yang inovatif dan
          mudah digunakan. Kami percaya bahwa setiap perusahaan, baik skala
          kecil, menengah, maupun besar, memiliki potensi besar untuk berkembang
          dengan manajemen yang tepat dan efisien.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Di <span className="font-semibold">[Nama Perusahaan]</span>, kami
          menghadirkan platform ERP yang terintegrasi untuk membantu bisnis Anda
          dalam mengelola operasi harian dengan lebih baik, dari pengelolaan
          inventaris, keuangan, sumber daya manusia, hingga layanan pelanggan,
          semuanya di satu tempat.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kami selalu berinovasi untuk menciptakan teknologi yang mudah diakses
          dan mudah digunakan, sehingga Anda dapat fokus pada apa yang paling
          penting - pertumbuhan bisnis Anda. Bersama kami, mari wujudkan potensi
          bisnis Anda secara maksimal.
        </p>
      </div>
    </section>
  );
}

export default About;
