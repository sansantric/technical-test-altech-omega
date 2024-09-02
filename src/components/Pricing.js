import React from "react";

// Pricing plans data
const pricingPlans = [
  {
    tier: "Tier 1 / Basic",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
    ],
    price: "$49",
  },
  {
    tier: "Tier 2 / Business",
    features: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
    ],
    price: "$99",
  },
  {
    tier: "Tier 3 / Entrepreneur",
    features: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
      "Export data ke Excel",
      "AI Prediksi penghasilan",
    ],
    price: "$149",
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pilihan Paket Harga
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Setiap paket
            dilengkapi dengan fitur-fitur terbaik untuk memudahkan pengelolaan
            bisnis Anda.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-10 lg:grid-cols-3 lg:max-w-none">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 p-8 bg-white shadow-lg ring-1 ring-gray-200"
            >
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {plan.tier}
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Harga: {plan.price}
              </p>
              <div className="mt-8">
                <h4 className="text-sm font-semibold leading-6 text-indigo-600">
                  Apa yang termasuk:
                </h4>
                <ul
                  className="mt-4 grid gap-4 text-sm leading-6 text-gray-600"
                >
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-x-3 text-left">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
