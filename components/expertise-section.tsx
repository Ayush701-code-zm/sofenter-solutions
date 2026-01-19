"use client";

import FadeInSection from "./fade-in-section";

interface Technology {
  name: string;
  icon: string;
}

interface TechCategory {
  category: string;
  technologies: Technology[];
}

const expertiseData: TechCategory[] = [
  {
    category: "QA",
    technologies: [
      { name: "JIRA XRay", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "JIRA Zephyr", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "BrowserStack", icon: "https://cdn.worldvectorlogo.com/logos/browserstack.svg" },
      { name: "Appium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appium/appium-original.svg" },
      { name: "Maestro", icon: "https://maestro.mobile.dev/img/logo.svg" },
      { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
      { name: "Chrome", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "Inspect", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
    ]
  },
  {
    category: "Frontend",
    technologies: [
      { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Vue JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Next JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Ext JS", icon: "https://docs.sencha.com/extjs/7.0.0/images/logo.png" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ]
  },
  {
    category: "Native",
    technologies: [
      { name: "iOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    ]
  },
  {
    category: "Cross Platform",
    technologies: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg" },
      { name: "Ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
      { name: "Cordova", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ]
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-white py-20 px-[4.5rem] md:px-[8vw]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side - Heading */}
          <FadeInSection className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-['Inter'] text-[2.5rem] md:text-[3rem] font-bold text-[#FFD700] mb-4 leading-tight">
                Our Expertise
              </h2>
              <p className="text-[rgba(0,0,0,0.7)] text-lg leading-relaxed">
                Modern technologies for stable, scalable, and secure solutions.
              </p>
            </div>
          </FadeInSection>

          {/* Right side - Technology cards */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {expertiseData.map((category, categoryIndex) => (
                <FadeInSection key={category.category} delay={categoryIndex * 0.1}>
                  <div className="bg-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-[#000000] font-['Inter'] text-base font-semibold mb-6 uppercase tracking-wide opacity-70">
                      {category.category}
                    </h3>
                    
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {category.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-200 transition-all duration-300 group cursor-pointer"
                        >
                          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-[#000000] text-xs font-medium text-center leading-tight">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

