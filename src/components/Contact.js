import React from "react";

const Contact = () => {
  const handleSubmit = () => {
    alert("Contact");
  };
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Hubungi Kami
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Kami senang mendengar dari Anda! Silakan isi formulir di bawah ini
          atau hubungi kami melalui informasi kontak yang tersedia.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">Kirim Pesan</h3>
            <form className="mt-6 space-y-4">
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Anda"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Pesan Anda"
                  className="w-full p-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">
              Informasi Kontak
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-gray-600">
                <svg
                  className="w-6 h-6 mr-2 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm6 0a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zm6 0a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z"
                  />
                </svg>
                Jalan 123, Kota, Negara
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  className="w-6 h-6 mr-2 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657a2 2 0 01-2.828 0l-4-4a2 2 0 010-2.828l4-4a2 2 0 012.828 2.828l-2.828 2.828 2.828 2.828a2 2 0 010 2.828zM12 9.172l-4 4 4 4 4-4-4-4z"
                  />
                </svg>
                (123) 456-7890
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  className="w-6 h-6 mr-2 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  />
                </svg>
                kontak@perusahaananda.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
