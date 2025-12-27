// /Users/admin/Documents/gautam/gautam-portfolio/components/experience-timeline.tsx
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { experienceData } from "@/data/experience";

export function ExperienceTimeline() {
  const timelineData = experienceData.map((exp) => ({
    title: exp.period,
    content: (
      <div>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={exp.logo}
            alt={`${exp.company} logo`}
            width={60}
            height={60}
            className="rounded-lg object-contain bg-white p-2 shadow-sm"
          />
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {exp.company} — {exp.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {exp.location}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          {exp.achievements.map((achievement, index) => (
            <p key={index} className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              • {achievement}
            </p>
          ))}
        </div>
      </div>
    ),
  }));

  return <Timeline data={timelineData} />;
}