// Centralized portfolio data (exact requested content)
export const portfolioData = {
  bio: {
    name: "Bright Oluwagbemiga Ajiboye",
    title: "Embedded Systems & Full-Stack Engineer",
  },
  education: [
    "Electronics & Computer Engineering, Lagos State University",
    "Computer Science, University of the People",
  ],
  contact: {
    emails: ["Boyenedict@gmail.com", "ajiboyebrightbenedict@gmail.com"],
    phones: ["+2348109214707", "+2349045630246"],
    location: "Lagos, Nigeria",
    privacyPolicy:
      "https://www.privacypolicies.com/live/92d0030e-3298-4fde-bb97-7a0aefa1e046",
  },
  techStack: {
    hardwareEmbedded: [
      "ESP32",
      "SIM800L",
      "NEO-6M GPS",
      "KiCad",
      "Sensors (Ultrasonic/Piezoelectric)",
      "Circuit Assembly",
    ],
    softwareWeb: [
      "React",
      "Vite",
      "JavaScript",
      "Firebase Firestore",
      "Tailwind CSS",
      "Vercel/Render",
    ],
  },
  projects: [
    {
      title: "Automated IoT Flood Alert & Telemetry System",
      description:
        "Real-time flood monitoring telemetry system using ESP32, SIM800L cellular, NEO-6M GPS, and HC-SR04 ultrasonic sensors.",
      tags: ["IoT", "Embedded", "KiCad", "ESP32"],
      image: "/images/iot-flood-alert.jpg",
      liveUrl: "https://example.com/iot-flood-alert",
      repoUrl: "https://github.com/boyenedict-pixel/iot-flood-alert",
      domainBadge: "IoT Prototype",
    },
    {
      title: "Digital Overture",
      description:
        "Modern full-stack web application built for clean user experience with persistent storage.",
      tags: ["React", "Vite", "Firebase", "Tailwind"],
      image: "/images/digital-overture.jpg",
      liveUrl: "https://example.com/digital-overture",
      repoUrl: "https://github.com/boyenedict-pixel/digital-overture",
      domainBadge: "Full-Stack Web App",
    },
  ],
  certifications: [
    "All-On Youth Renewable Energy Hackathon Participant (2026)",
    "Nigeria Energy Forum Attendee & Certificate Holder (2026)",
  ],
};

export default portfolioData;
