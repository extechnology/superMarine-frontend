
const RefundPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-8 pt-24 font-sans text-gray-800">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Super Marine Rental Refund Policy
        </h1>
        <p className="text-gray-600 mt-2">Last Updated: August 12, 2025</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          1. Introduction
        </h2>
        <p className="mb-4">
          This Refund Policy ("Policy") governs all cancellations, refunds, and
          adjustments related to bookings made through
          <a
            href="https://supermarinerental.com/"
            className="text-gray-600 hover:underline"
          >
            {" "}
            https://supermarinerental.com/
          </a>
          ("Website"). By booking our marine adventure vehicles (e.g., jet skis,
          boats, kayaks) or services ("Services"), you agree to this Policy. All
          transactions are processed in AED (UAE Dirhams).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          2. General Principles
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Refunds are issued only under the conditions outlined below.</li>
          <li>Processing Time: 7–14 business days after approval.</li>
          <li>Refunds are issued to the original payment method.</li>
          <li>
            All requests require written notice to{" "}
            <a
              href="mailto:supermarine.jetski@gmail.com"
              className="text-gray-600 hover:underline"
            >
              supermarine.jetski@gmail.com
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          3. Cancellation by Customer
        </h2>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          3.1. Standard Cancellations
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Timeframe Before Rental Start
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Refund Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">15+ days</td>
                <td className="border border-gray-300 px-4 py-2">
                  100% refund
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">7–14 days</td>
                <td className="border border-gray-300 px-4 py-2">50% refund</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Less than 7 days
                </td>
                <td className="border border-gray-300 px-4 py-2">No refund</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium text-gray-600 mb-3">3.2. Process</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Email cancellation request to{" "}
            <a
              href="mailto:supermarine.jetski@gmail.com"
              className="text-gray-600 hover:underline"
            >
              supermarine.jetski@gmail.com
            </a>{" "}
            with booking ID.
          </li>
          <li>Refund processed within 14 business days.</li>
          <li>A 5% administrative fee (min. AED 50) applies to all refunds.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          4. Cancellation by Super Marine Rental
        </h2>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          4.1. Covered Scenarios
        </h3>
        <p className="mb-3">We may cancel bookings due to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Severe weather (high winds, storms, red flags).</li>
          <li>Vehicle mechanical failure.</li>
          <li>Safety/regulatory directives (e.g., coastguard restrictions).</li>
          <li>Suspected fraud or identity misrepresentation.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          4.2. Refund Entitlement
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Full refund if cancellation occurs &gt;24 hours before rental.
          </li>
          <li>50% refund if cancellation occurs ≤24 hours before rental.</li>
          <li>Rescheduling priority at no extra cost.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          5. Weather-Related Cancellations
        </h2>

        <h3 className="text-xl font-medium text-gray-600 mb-3">5.1. Policy</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Decisions are made by 7:00 AM on the rental day.</li>
          <li>
            If we cancel due to unsafe conditions: Full refund or rescheduling.
          </li>
          <li>
            If you cancel due to weather without official advisories: Standard
            cancellation fees apply.
          </li>
        </ul>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          5.2. "Weather Guarantee" Option
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Add AED 150/day to booking for flexible cancellation:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>
                Cancel for any weather concern up to 2 hours before rental.
              </li>
              <li>90% refund (10% administrative fee retained).</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          6. Security Deposit Refunds
        </h2>
        <p className="mb-3">
          Amount: AED 500–AED 7,000 (based on vehicle value).
        </p>
        <p className="mb-3">
          Timeline: Refunded within 7 business days post-return.
        </p>
        <p className="font-medium mb-2">Deductions Apply For:</p>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Reason
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Fee Structure
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Damage beyond normal wear
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Repair cost + 20% service fee
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  Late return
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  AED 200/hour
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Inadequate fuel
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  AED 50 + refueling cost
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  Excessive cleaning
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  AED 150–AED 500
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm italic">
          • Itemized deduction reports are emailed within 48 hours.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          7. No-Shows & Early Returns
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            No-shows: Automatic forfeiture of total rental cost + deposit.
          </li>
          <li>
            Early Returns:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>No refunds for unused rental time.</li>
              <li>
                Late penalties waived only if vehicle is returned &gt;1 hour
                early.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          8. Service Interruptions During Rental
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Mechanical Failure:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Pro-rated refund for unused rental time.</li>
              <li>Free replacement vehicle (if available).</li>
            </ul>
          </li>
          <li>
            Customer-Induced Breakdowns:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>No refunds.</li>
              <li>
                Customer liable for recovery/repair costs (deducted from
                deposit).
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          9. Special Circumstances
        </h2>

        <h3 className="text-xl font-medium text-gray-600 mb-3">
          9.1. Force Majeure
        </h3>
        <p className="mb-2">No refunds for events beyond our control:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Government travel bans.</li>
          <li>Natural disasters.</li>
          <li>Pandemics/epidemics.</li>
        </ul>
        <p>Solution: 12-month credit voucher issued.</p>

        <h3 className="text-xl font-medium text-gray-600 mt-4 mb-3">
          9.2. Medical Emergencies
        </h3>
        <p>
          Full refund with valid medical certificate (issued ≤48 hours
          post-cancellation).
        </p>
        <p>10% processing fee applies.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          10. Booking Modifications
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Date/Time Changes:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>
                7 days notice: Free first modification; AED 100 fee thereafter.
              </li>
              <li>&lt;7 days: Treated as cancellation + rebooking.</li>
            </ul>
          </li>
          <li>Vehicle Downgrades: Price difference refunded minus 10% fee.</li>
          <li>Upgrades: Pay additional cost; no modification fees.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          11. Third-Party Bookings
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Bookings via affiliates (e.g., tourism agencies, hotels):
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Follow their refund policy initially.</li>
              <li>
                Super Marine Rental processes refunds only after receiving funds
                from the partner.
              </li>
            </ul>
          </li>
          <li>Allow 21–30 business days for processing.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          12. Disputes & Claims
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Refund Disputes: Email{" "}
            <a
              href="mailto:supermarine.jetski@gmail.com"
              className="text-gray-600 hover:underline"
            >
              supermarine.jetski@gmail.com
            </a>{" "}
            within 30 days with evidence.
          </li>
          <li>
            Chargeback Penalty: AED 300 fee for bank-initiated chargebacks
            without prior contact.
          </li>
          <li>Resolution Timeline: 15 business days for investigation.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          13. Governing Law
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            This Policy adheres to UAE Federal Law No. 24 of 2006 (Consumer
            Protection).
          </li>
          <li>Disputes subject to Abu Dhabi courts.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          14. Policy Updates
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Revised policies effective immediately upon Website posting.</li>
          <li>Email notifications sent for material changes.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          15. Contact Information
        </h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Super Marine Rental</p>
          <p>
            Email:{" "}
            <a
              href="mailto:supermarine.jetski@gmail.com"
              className="text-gray-600 hover:underline"
            >
              supermarine.jetski@gmail.com
            </a>
          </p>
          <p>Address: 9GC9+X65 - Mussaffah - M3, Abu Dhabi, UAE</p>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
