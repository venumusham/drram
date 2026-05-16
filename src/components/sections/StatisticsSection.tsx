import React from 'react';
import { BadgeCheck, Star, Stethoscope, Users } from 'lucide-react';

const stats = [
  { num: '16+', label: 'Years', detail: 'Plastic surgery experience', icon: Stethoscope },
  { num: '6,000+', label: 'Procedures', detail: 'Aesthetic & reconstructive', icon: BadgeCheck },
  { num: '140+', label: 'Reviews', detail: 'Recent Google feedback', icon: Users },
  { num: '5.0', label: 'Rating', detail: 'Google Business Profile', icon: Star },
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-[#f8f6f1] px-4 py-5 md:py-7">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-[#e8dfd2] bg-white shadow-sm">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex min-w-0 flex-col items-center justify-center gap-1 px-1.5 py-3 text-center md:min-h-[104px] md:flex-row md:justify-start md:gap-3 md:px-5 md:text-left ${
                  index < stats.length - 1 ? 'border-r border-[#eee7dc]' : ''
                }`}
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 md:h-9 md:w-9">
                  <Icon size={15} strokeWidth={1.8} className="md:h-[18px] md:w-[18px]" />
                </div>
                <div className="min-w-0">
                  <div className="flex min-w-0 flex-col gap-0.5 md:flex-row md:items-baseline md:gap-1.5">
                    <span className="font-serif text-[1.15rem] font-semibold leading-none text-neutral-950 sm:text-[1.35rem] md:text-3xl">
                      {stat.num}
                    </span>
                    <span className="truncate text-[8px] font-semibold uppercase tracking-[0.06em] text-accent-700 sm:text-[9px] md:text-[11px]">
                      {stat.label}
                    </span>
                  </div>
                  <p className="mt-1 hidden text-[11px] leading-4 text-neutral-500 md:block">
                    {stat.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
