import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, Scale, FileBadge } from 'lucide-react';

export const AnimatedStats = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 25;
    const duration = 1500;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Award size={26} className="text-gold animate-bounce-subtle" />,
      number: `${count}+`,
      label: "Years of Experience",
      sub: "Active Court Standing"
    },
    {
      icon: <Scale size={26} className="text-gold animate-bounce-subtle" />,
      number: "100%",
      label: "Direct Legal Counsel",
      sub: "Personal Advocate Attention"
    },
    {
      icon: <ShieldCheck size={26} className="text-gold animate-bounce-subtle" />,
      number: "Mysuru",
      label: "District Court Standing",
      sub: "Civil & Criminal Bar"
    },
    {
      icon: <FileBadge size={26} className="text-gold animate-bounce-subtle" />,
      number: "Govt. Auth",
      label: "Notary Public Chamber",
      sub: "Vichila Complex, Mysuru"
    }
  ];

  return (
    <div className="stats-banner-wrapper animate-on-scroll">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="stat-icon-wrap">
                {item.icon}
              </div>
              <div className="stat-content">
                <span className="stat-number">{item.number}</span>
                <span className="stat-label">{item.label}</span>
                <span className="stat-sub">{item.sub}</span>
              </div>
              <div className="stat-shimmer-effect" aria-hidden="true"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
