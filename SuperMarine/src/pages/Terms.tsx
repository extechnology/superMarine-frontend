const Terms = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-8 pt-24 font-sans text-gray-800 bg-white">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Terms and Conditions
        </h1>
        <h2 className="text-2xl text-gray-700 mt-2">Super Marine Rental</h2>
        <p className="text-gray-600 mt-2">Updated: August 12, 2025</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          1. Introduction
        </h2>
        <p className="mb-4">
          Welcome to Super Marine Rental ("we," "us," "our"), operating via
          <a
            href="https://supermarinerental.com/"
            className="text-gray-600 hover:underline"
          >
            {" "}
            https://supermarinerental.com/
          </a>
          . These Terms and Conditions ("Terms") govern your use of our website
          and services, including the rental of marine adventure vehicles (e.g.,
          jet skis, boats, kayaks) ("Vehicles") and related services
          ("Services"). By accessing our website, making a booking, or using our
          Services, you agree to comply with these Terms. If you disagree, do
          not use our Services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          2. Definitions
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">"Customer," "You," "Renter":</span>{" "}
            The individual or entity booking a Vehicle.
          </li>
          <li>
            <span className="font-medium">"Vehicle":</span> Any marine equipment
            available for rent (e.g., jet skis, pontoon boats, sailboats).
          </li>
          <li>
            <span className="font-medium">"Booking":</span> A reservation for a
            Vehicle or Service.
          </li>
          <li>
            <span className="font-medium">"Rental Period":</span> The duration
            agreed upon in your Booking.
          </li>
          <li>
            <span className="font-medium">"Security Deposit":</span> A
            refundable fee held against damages.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          3. Eligibility & Account Registration
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Renters must be at least 21 years old with a valid government-issued
            ID and credit card.
          </li>
          <li>
            International renters must present a valid passport and meet local
            licensing requirements.
          </li>
          <li>
            You are responsible for maintaining account confidentiality and
            accuracy.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          4. Booking Process
        </h2>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          4.1. Reservations
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Bookings are confirmed via email.</li>
          <li>Provide accurate trip details (date, duration, Vehicle type).</li>
          <li>
            We reserve the right to cancel Bookings for safety, weather, or
            misrepresentation.
          </li>
        </ul>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          4.2. Pricing & Payment
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>All prices are in USD.</li>
          <li>
            Full payment + Security Deposit (see Section 6) is required at
            booking.
          </li>
          <li>
            Additional fees apply for:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Fuel (Vehicles returned with less than full tanks).</li>
              <li>Late returns ($50/hour).</li>
              <li>Cleaning ($100 if excessively soiled).</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          5. Cancellations & Refunds
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">Cancellation by You:</span>
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>14 days before Rental Period: Full refund.</li>
              <li>7–14 days: 50% refund.</li>
              <li>&lt;7 days: No refund.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Cancellation by Us:</span> Full refund
            if we cancel due to safety, weather, or Vehicle unavailability.
          </li>
          <li>
            <span className="font-medium">No-shows:</span> Non-refundable.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          6. Security Deposit
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A $200–$2,000 deposit (based on Vehicle value) is pre-authorized on
            your credit card.
          </li>
          <li>
            Deductions apply for:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Damage beyond normal wear.</li>
              <li>Late returns or fuel/cleaning fees.</li>
            </ul>
          </li>
          <li>
            Deposits are released within 7 business days post-return if no
            claims arise.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          7. Vehicle Use & Restrictions
        </h2>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          7.1. During Rental
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Use Vehicles only for recreational purposes in designated waterways.
          </li>
          <li>
            <span className="font-medium">Prohibited:</span>
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>
                Operating under the influence of alcohol/drugs (penalty: $500 +
                immediate termination).
              </li>
              <li>
                Commercial use, racing, or towing without written consent.
              </li>
              <li>Violating local maritime laws.</li>
            </ul>
          </li>
          <li>Maximum occupancy/cargo limits must be strictly followed.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          7.2. Maintenance & Breakdowns
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Report mechanical issues immediately. Do not attempt repairs.</li>
          <li>
            If a breakdown results from misuse, you bear recovery/towing costs.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          8. Damage & Liability
        </h2>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          8.1. Accidents/Damage
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            You are liable for:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>
                Damage to the Vehicle (beyond $500, covered by our insurance).
              </li>
              <li>Third-party property damage or bodily injury.</li>
            </ul>
          </li>
          <li>Report accidents to us and local authorities within 1 hour.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          8.2. Insurance
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We provide third-party liability insurance (up to $1M per incident).
          </li>
          <li>
            Physical damage coverage requires a deductible (up to $1,000).
          </li>
          <li>Personal injury/equipment loss is your responsibility.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          9. Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We are not liable for:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>
                Indirect damages (e.g., lost profits, vacation interruption).
              </li>
              <li>
                Injury/death due to negligence, weather, or wildlife encounters.
              </li>
              <li>Theft of personal belongings left in Vehicles.</li>
            </ul>
          </li>
          <li>Total liability cap: $5,000 per Booking.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          10. Indemnification
        </h2>
        <p>You agree to indemnify us against claims arising from:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Your breach of these Terms.</li>
          <li>Misuse of Vehicles.</li>
          <li>Violation of maritime laws.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          11. Intellectual Property
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All website content (logos, text, images) is owned by Super Marine
            Rental.
          </li>
          <li>Unauthorized use/copying is prohibited.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          12. Termination
        </h2>
        <p>We may terminate your Booking/account immediately if you:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Breach safety rules.</li>
          <li>Provide false information.</li>
          <li>Cause intentional damage.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          13. Dispute Resolution & Governing Law
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Disputes resolved via binding arbitration in Miami, FL (under AAA
            rules).
          </li>
          <li>Governed by Florida law.</li>
          <li>Class-action waivers apply.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          14. Amendments
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We may update these Terms at any time.</li>
          <li>Continued use after changes constitutes acceptance.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          15. Force Majeure
        </h2>
        <p>
          Not liable for failures due to events beyond our control (e.g.,
          hurricanes, pandemics, government restrictions).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          16. Contact Us
        </h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Super Marine Rental</p>
          <p>9GC9+X65 - Mussaffah - M3</p>
          <p>Abu Dhabi - United Arab Emirates</p>
          <p>
            Email:{" "}
            <a
              href="mailto:supermarine.jetski@gmail.com"
              className="text-gray-600 hover:underline"
            >
              supermarine.jetski@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;
