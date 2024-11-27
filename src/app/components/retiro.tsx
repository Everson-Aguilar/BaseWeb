// components/RefundPolicy.tsx
"use client";

const RefundPolicy = () => {
  return (
    <section className="mt-5 max-w-3xl mx-auto p-6 bg-message shadow-lg rounded-lg">
      <header>
        <h2 className="text-3xl font-BebasNeue text-center text-title mb-4">
          Changed Your Mind? Sell Your Design!
        </h2>
      </header>
      <article>
        <p className="text-title mb-4">
          At <strong>Your Digital Business</strong>, we understand that every customer is unique and their needs may change. Thats why we offer flexible options to help you make the most of your investment in 3D digital products.
        </p>
        
        <h3 className="text-2xl font-BebasNeue text-title mb-2">How It Works</h3>
        
        <section className="mb-4">
          <h4 className="font-BebasNeue text-title mb-2">Sell on Our Marketplace</h4>
          <p className="text-title">
            If you decide that our 3D digital design no longer fits your needs, you can list it for sale on our marketplace. Youll earn a percentage of the profits every time someone buys your design. This option allows you to recover your investment and generate additional income.
          </p>
        </section>
        
        <section className="mb-4">
          <h4 className="font-BebasNeue text-title mb-2">Sell Directly to Our Company</h4>
          <p className="text-title">
            If the project is still active and nearly finished, you can opt to sell it directly to <strong>Your Digital Business</strong>. This option is subject to availability and evaluation of the design by our team.
          </p>
        </section>

        <h3 className="text-2xl font-BebasNeue text-title mb-2">Benefits for You</h3>
        
        <ul className="list-disc list-inside text-title mb-4">
          <li>Flexibility: You decide what to do with your design.</li>
          <li>Additional Earnings: If your design is sold on our marketplace, you ll earn extra income effortlessly.</li>
          <li>Direct Sale Option: Simplify the process by selling your design directly to us if you prefer to receive a direct offer.</li>
        </ul>
      </article>
      <footer>
        <p className="text-title">
          At <strong>Your Digital Business</strong>, we are committed to offering you fair and flexible options, so you can make informed decisions and maximize the value of your 3D digital designs.
        </p>
      </footer>
    </section>
  );
};

export default RefundPolicy;
