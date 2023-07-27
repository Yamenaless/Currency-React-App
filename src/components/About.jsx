import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  const data = [
    {
      id: 1,
      icon: <SiHiveBlockchain size={40} />,
      text: `The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.`,
      title: "Reliable, tamper-proof network",
    },
    {
      id: 2,
      icon: <SiFsecure size={40} />,
      text: `Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.`,
      title: "Seamless connection to any API",
    },
    {
      id: 3,
      icon: <SiStrapi size={40} />,
      text: `Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.`,
      title: "Proven, ready-made solutions",
    },
    {
      id: 4,
      icon: <VscServerProcess size={40} />,
      text: `Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.`,
      title: "Secure off-chain computation",
    },
  ];
  return (
    <div id="about" className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div>
          <h1 className="font-bold text-4xl py-4">
            A Growing Protocol Ecosystem
          </h1>
          <p className="py-4 text-xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>
          {/* Card */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {data.map((item) => (
              <AboutCard
                icon={item.icon}
                text={item.text}
                heading={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
