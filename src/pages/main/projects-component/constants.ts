import type { Project } from "./types";

export const Constants = {
  PROJECT_DATA: [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.",
      link: "https://github.com/johnnyo/ecommerce-platform",
      skills: ["React", "Node.js", "PostgreSQL", "Stripe API", "JWT"],
    },
    {
      title: "Task Management App",
      description:
        "iOS task management application built with SwiftUI. Includes real-time collaboration, push notifications, and offline synchronization capabilities.",
      link: "https://github.com/johnnyo/task-manager-ios",
      skills: [
        "Swift",
        "SwiftUI",
        "Core Data",
        "Firebase",
        "Push Notifications",
      ],
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with interactive maps and forecasting. Built with React, TypeScript, and integrated with multiple weather APIs.",
      link: "https://github.com/johnnyo/weather-dashboard",
      skills: [
        "React",
        "TypeScript",
        "Chart.js",
        "Weather API",
        "Tailwind CSS",
      ],
    },
  ] as Project[],
};
