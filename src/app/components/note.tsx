// components/RefundPolicy.tsx
"use client";

const RefundPolicy = () => {
  return (
    <section className="mt-5 max-w-3xl mx-auto p-6 bg-green shadow-lg rounded-lg">
      <header>
        <h2 className="text-3xl font-BebasNeue text-center text-title mb-4">
          OUR SYSTEM CONNECTS PROFESSIONAL ARTISTS TO CREATE HIGH-QUALITY 3D ENVIRONMENTS
        </h2>
      </header>
      <article>
        <p className="text-title mb-4">
          We aim to <strong>CREATE SOMETHING ORIGINAL AND AUTHENTIC FOR YOU.</strong> Our team can handle this part of your business remotely so you can move forward with your commercial project more easily and with peace of mind.
        </p>
        
        <h3 className="text-2xl font-BebasNeue text-title mb-2">FLEXIBLE PRICING</h3>
        
        <section className="mb-4">
          <h4 className="font-BebasNeue text-title mb-2">Our organization...</h4>
          <p className="text-title">
            allows us to assign various tasks to different professionals, then bring it all together to deliver a solid, limitless project.
          </p>
        </section>
        
        <section className="mb-4">
          <h4 className="font-BebasNeue text-title mb-2">YOUR SATISFACTION MATTERS TO US — IT SPEAKS FOR OUR WORK AND HELPS US BOTH GROW.</h4>
          <p className="text-title">
            Our identity, <strong>makmapa.com</strong>, is specialized in 3D environment creation, offering a wide range of 3D services and general visual design expertise.
          </p>
        </section>

        <h3 className="text-2xl font-BebasNeue text-title mb-2">Benefits for You</h3>
        
        <ul className="list-disc list-inside text-title mb-4">
          <li>It can be more cost-effective</li>
          <li>The results will be high-quality</li>
          <li>Highly artistic and competitive in the global market</li>
        </ul>
      </article>
      <footer>
        <p className="text-title">
          Have any questions? <strong>Contact us</strong> — we re ready to help you with anything you need.
        </p>
      </footer>
    </section>
  );
};

export default RefundPolicy;

