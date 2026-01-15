"use client"

import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code,
  Database,
  Palette,
  Briefcase,
  Award,
  GraduationCap,
  Mic,
  Languages,
  Users,
  X,
  Server,
  Terminal,
  Network,
  Star,
} from "lucide-react"

export default function ResumePage() {
  const [showImageModal, setShowImageModal] = useState(false)

  return (
    <div className="w-full bg-black/90 text-gray-800 font-sans print:bg-white print:text-black print:m-0 print:p-0">
      <div className="max-w-5xl mx-auto bg-white shadow-xl print:shadow-none print:max-w-none print:w-full print:mx-0">
        <div className="h-10 bg-gradient-to-r from-[#a71c1c] via-[#e75321] to-[#ba1b1b] print:h-4 relative overflow-hidden print:bg-[#a71c1c]" />

        <header className="flex flex-col md:flex-row px-8 pt-10 pb-8 relative print:flex-row print:pt-3 print:pb-3 print:px-6 bg-gradient-to-b from-gray-50 to-white print:bg-white">
          <div className="w-36 h-36 overflow-hidden rounded-full border-4 border-white shadow-lg mr-6 mb-4 md:mb-0 flex-shrink-0 absolute md:relative top-0 md:top-auto transform -translate-y-1/2 md:transform-none md:translate-y-0 left-8 md:left-auto bg-white print:w-24 print:h-24 print:relative print:transform-none print:translate-y-0 print:left-auto print:shadow-none print:border-2 print:mr-4 ring-4 ring-red-100 ring-opacity-50 print:ring-0">
            <img
              src="https://assets.ludovick.space/uploads/ludovick-konyo.png"
              alt="Ludovick Konyo - Software Architect and Technology Manager professional photo"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setShowImageModal(true)}
              loading="eager"
              width={144}
              height={144}
            />
          </div>
          <div className="flex-grow text-center md:text-left md:pl-6 mt-12 md:mt-0 print:text-left print:pl-4 print:mt-0">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight print:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#a71c1c] to-[#e75321] mb-1 print:mb-0.5">
              LUDOVICK KONYO
            </h1>
            <h2 className="text-xl font-semibold mb-3 print:text-base print:mb-1.5 text-[#ba1b1b] tracking-wide">
              Software Architect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-3 print:grid-cols-3 print:gap-1 print:text-xs print:mb-2">
              <div className="flex items-center justify-center md:justify-start bg-red-50 rounded-full px-3 py-1.5 shadow-sm">
                <Mail className="text-[#e75321] w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700 font-medium" itemProp="email">
                  developer.ludovic@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start bg-red-50 rounded-full px-3 py-1.5 shadow-sm">
                <Phone className="text-[#e75321] w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700 font-medium" itemProp="telephone">
                  +255746828843
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start bg-red-50 rounded-full px-3 py-1.5 shadow-sm">
                <MapPin className="text-[#e75321] w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700 font-medium" itemProp="address">
                  Dar-es-salaam, Tanzania
                </span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 print:justify-start print:space-x-3 print:mt-2 print:text-xs">
              <a
                href="https://www.linkedin.com/in/ludovick-konyo/"
                className="text-[#ba1b1b] hover:text-[#a71c1c] flex items-center print:no-underline bg-white py-1.5 px-3 rounded-md shadow-sm hover:shadow transition-all duration-200 border border-red-100"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Visit Ludovick Konyo's LinkedIn profile"
                itemProp="sameAs"
              >
                <Linkedin className="text-[#e75321] w-5 h-4 mr-1" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/developer006tz"
                className="text-[#ba1b1b] hover:text-[#a71c1c] flex items-center print:no-underline bg-white py-1.5 px-3 rounded-md shadow-sm hover:shadow transition-all duration-200 border border-red-100"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Visit Ludovick Konyo's GitHub profile"
                itemProp="sameAs"
              >
                <Github className="text-[#e75321] w-5 h-4 mr-1" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </header>

        <div className="px-8 print:px-6">
          <section className="mb-6 mt-4 print:mb-4 print:mt-3">
            <h3 className="text-lg font-bold text-[#a71c1c] mb-3 pb-1 border-b-2 border-red-100 flex items-center print:text-base print:mb-2">
              <Code className="text-[#ba1b1b] w-5 h-5 mr-2" />
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-sm leading-relaxed print:text-xs print:leading-snug">
              Technology Manager with 4+ years of progressive software engineering experience, now leading
              cross-functional teams and driving technology strategy in agile environments. Proven track record of
              scaling development operations from individual contributor to managing full-stack engineering teams.
              Expert in modern development practices including CI/CD pipelines, sprint planning, and iterative delivery.
              Successfully delivered scalable web and mobile applications while implementing agile methodologies that
              improved team velocity and delivery timelines. Combines hands-on technical expertise across multiple
              technology stacks with strategic technology leadership. Known for bridging business requirements with
              technical solutions and fostering high-performing engineering cultures.
            </p>
          </section>

          <section className="mb-6 print:mb-4">
            <h3 className="text-lg font-bold text-[#a71c1c] mb-3 pb-1 border-b-2 border-red-100 flex items-center print:text-base print:mb-2">
              <Star className="text-[#ba1b1b] w-6 h-6 mr-2" />
              TECHNICAL EXPERTISE
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 print:p-3 print:bg-white print:border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm print:gap-3 print:text-xs">
                <div>
                  <div className="mb-6 print:mb-4">
                    <h4 className="font-semibold mb-2 text-[#ba1b1b] flex items-center print:text-sm print:mb-1.5">
                      <Code className="text-[#ba1b1b] w-5 h-5 mr-2" />
                      Frontend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-50 text-[#a71c1c] rounded text-xs">React.js</span>
                      <span className="px-2 py-1 bg-red-50 text-[#a71c1c] rounded text-xs">Next.js</span>
                      <span className="px-2 py-1 bg-red-50 text-[#a71c1c] rounded text-xs">Vue.js</span>
                      <span className="px-2 py-1 bg-red-50 text-[#a71c1c] rounded text-xs">Nuxt.js</span>
                      <span className="px-2 py-1 bg-red-50 text-[#a71c1c] rounded text-xs">JavaScript/TypeScript</span>
                      <span className="px-2 py-1 bg-red-50 text-[#a71c1c] rounded text-xs">Flutter</span>
                      <span className="px-2 py-1 bg-red-50 text-[#a71c1c] rounded text-xs">React Native</span>
                    </div>
                  </div>

                  <div className="mb-6 print:mb-4">
                    <h4 className="font-semibold mb-2 text-emerald-700 flex items-center print:text-sm print:mb-1.5">
                      <Server className="text-emerald-700 w-5 h-5 mr-2" />
                      Backend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-50 text-green-800 rounded text-xs">Java (Spring Boot)</span>
                      <span className="px-2 py-1 bg-red-50 text-green-800 rounded text-xs">Node.js</span>
                      <span className="px-2 py-1 bg-red-50 text-green-800 rounded text-xs">Nest.js</span>
                      <span className="px-2 py-1 bg-red-50 text-green-800 rounded text-xs">Express.js</span>
                      <span className="px-2 py-1 bg-red-50 text-green-800 rounded text-xs">PHP (Laravel)</span>
                      <span className="px-2 py-1 bg-red-50 text-green-800 rounded text-xs">RESTful API</span>
                      <span className="px-2 py-1 bg-red-50 text-green-800 rounded text-xs">SOAP</span>
                      <span className="px-2 py-1 bg-red-50 text-green-800 rounded text-xs">GraphQL</span>
                    </div>
                  </div>

                  <div className="mb-6 print:mb-4">
                    <h4 className="font-semibold mb-2 text-amber-700 flex items-center print:text-sm print:mb-1.5">
                      <Database className="text-amber-700 w-5 h-5 mr-2" />
                      Databases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">PostgreSQL</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">MySQL</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">MongoDB</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Redis</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">RabbitMQ</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Apache Kafka</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6 print:mb-4">
                    <h4 className="font-semibold mb-2 text-teal-700 flex items-center print:text-sm print:mb-1.5">
                      <Terminal className="text-teal-700 w-5 h-5 mr-2" />
                      Dev Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Git</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">GitHub</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Gitlab</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">CI/CD Pipelines</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Docker</span>
                    </div>
                  </div>

                  <div className="mb-6 print:mb-4">
                    <h4 className="font-semibold mb-2 text-purple-700 flex items-center print:text-sm print:mb-1.5">
                      <Network className="text-purple-700 w-5 h-5 mr-2" />
                      Architecture & System Design
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Lucidchart</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Visio</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Draw.io</span>
                    </div>
                  </div>

                  <div className="mb-6 print:mb-4">
                    <h4 className="font-semibold mb-2 text-pink-700 flex items-center print:text-sm print:mb-1.5">
                      <Palette className="text-pink-700 w-5 h-5 mr-2" />
                      Graphics & Designs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">Illustrator</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">Photoshop</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">Premiere Pro</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">After Effects</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">UI/UX Design</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-[#a71c1c] mb-3 pb-1 border-b-2 border-red-100 flex items-center print:text-base print:mb-2">
              <Briefcase className="text-[#ba1b1b] w-5 h-5 mr-2" />
              PROFESSIONAL EXPERIENCE
            </h3>

            <div className="relative border-l-2 border-red-200 pl-6 ml-3">
              <div className="mb-6 relative print:mb-4">
                <div className="absolute w-4 h-4 bg-[#ba1b1b] rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900 print:text-sm">Applications Programmer</h4>
                    <p className="text-[#ba1b1b] font-medium text-sm print:text-xs">Government of Tanzania</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-red-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">
                    December 2025 - Present
                  </span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                  <li>
                    Design, develop, and maintain government software applications and systems to support public sector
                    operations.
                  </li>
                  <li>
                    Collaborate with government departments to analyze requirements and deliver digital transformation
                    solutions.
                  </li>
                  <li>
                    Ensure compliance with government IT policies, security standards, and data protection regulations.
                  </li>
                  <li>
                    Provide technical support and training to government staff on developed applications and systems.
                  </li>
                </ul>
              </div>

              <div className="mb-6 relative print:mb-4">
                <div className="absolute w-4 h-4 bg-[#ba1b1b] rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900 print:text-sm">Technology Manager</h4>
                    <p className="text-[#ba1b1b] font-medium text-sm print:text-xs">Evmak Tanzania</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-red-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">
                    April 2025 - Present
                  </span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                  <li>
                    Lead and mentor cross-functional engineering teams of developers, implementing agile methodologies
                    to improve delivery velocity and team performance.
                  </li>
                  <li>
                    Drive technology strategy and roadmap planning, aligning technical initiatives with business
                    objectives and organizational goals.
                  </li>
                  <li>
                    Oversee the complete software development lifecycle from requirements gathering through deployment,
                    ensuring quality deliverables and timely project completion.
                  </li>
                  <li>
                    Establish and enforce coding standards, development best practices, and CI/CD processes across
                    multiple technology stacks.
                  </li>
                  <li>
                    Manage technology budgets, vendor relationships, and infrastructure decisions to optimize
                    development operations and cost efficiency.
                  </li>
                  <li>
                    Collaborate with stakeholders to translate business requirements into technical specifications and
                    project timelines.
                  </li>
                </ul>
              </div>

              <div className="mb-6 relative print:mb-4">
                <div className="absolute w-4 h-4 bg-[#ba1b1b] rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900 print:text-sm">Senior Software Engineer</h4>
                    <p className="text-[#ba1b1b] font-medium text-sm print:text-xs">Ona Africa Limited</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-red-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">
                    May 2024 - April 2025
                  </span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                  <li>Architected and developed Ona Sasa Social Network, implementing real-time features.</li>
                  <li>Designed and implemented scalable backend services and APIs for core product features.</li>
                  <li>Mentored junior engineers, providing technical guidance and conducting code reviews.</li>
                  <li>
                    Collaborated with cross-functional teams to define technical specifications and project roadmaps.
                  </li>
                </ul>
              </div>

              <div className="mb-6 relative print:mb-4 print:mt-0 print:pt-6 print:break-before-page">
                <div className="absolute w-4 h-4 bg-[#ba1b1b] rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900 print:text-sm">Seasonal Software Engineer</h4>
                    <p className="text-[#ba1b1b] font-medium text-sm print:text-xs">
                      <a
                        href="https://conveyance.co.tz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Conveyance Logistics Limited
                      </a>
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 bg-red-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">
                    October 2023 - Current
                  </span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                  <li>
                    Developed internal Logistics Management System, and Hr Management System for seamless operations
                  </li>
                  <li>
                    Architect, designed and implemented scalable backend services and APIs for core product features.
                  </li>
                  <li>
                    Developed and maintained self-service online platform that connect their products with online
                    marketplaces that enable customer to generate quotes, and select products directly.
                  </li>
                  <li>
                    Advised on best practices for software development and project management, implemente security
                    measures to protect sensitive data.
                  </li>
                  <li>Transform company operations from paper-based to digital, improving efficiency by 70%</li>
                </ul>
              </div>

              <div className="relative print:mb-4">
                <div className="absolute w-4 h-4 bg-[#ba1b1b] rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900 print:text-sm">Software Engineer</h4>
                    <p className="text-[#ba1b1b] font-medium text-sm print:text-xs">
                      <a
                        href="https://gpitg.co.tz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Gpitg Limited
                      </a>
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 bg-red-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">
                    January 2024 - June 2024
                  </span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                  <li>Developed Afya EHMS, a comprehensive health management system</li>
                  <li>Designed and implemented RESTful APIs for third-party integrations</li>
                  <li>Engineered secure data storage solutions for sensitive medical information</li>
                  <li>Optimized database queries, reducing system response time by 45%</li>
                </ul>
              </div>

              <div className="relative print:mb-4">
                <div className="absolute w-4 h-4 bg-[#ba1b1b] rounded-full -left-8 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900 print:text-sm">Software Developer</h4>
                    <p className="text-[#ba1b1b] font-medium text-sm print:text-xs">
                      <a
                        href="https://shulesoft.africa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Shulesoft Limited
                      </a>
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 bg-red-50 px-3 py-1 rounded-full font-medium mt-1 md:mt-0 print:text-xs print:px-2 print:py-0.5">
                    November 2022 - October 2023
                  </span>
                </div>
                <ul className="list-disc list-outside text-sm text-gray-700 mt-2 space-y-1 print:text-xs print:space-y-0.5">
                  <li>
                    Contributed in Development of Shulesoft School Management System , among the largest School
                    Management Systems in Tanzania
                  </li>
                  <li>Translate customer requirements to technical specifications and implement them</li>
                  <li>Bug fixes and performance improvements</li>
                  <li>Documented system architecture and components for future maintenance</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-6 print:mb-4 print:mt-0 print:pt-6 print:break-before-page">
            <h3 className="text-lg font-bold text-[#a71c1c] mb-3 pb-1 border-b-2 border-red-100 flex items-center print:text-base print:mb-2">
              <Award className="text-[#ba1b1b] w-5 h-5 mr-2" />
              NOTABLE PROJECTS
            </h3>

            <div className="space-y-4 print:space-y-3">
              <div className="bg-white border border-red-100 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow print:p-3 print:shadow-none print:mt-0 print:pt-6 print:break-before-page">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-[#ba1b1b] mb-1 print:text-sm">
                    <a
                      href="https://sasa.ona.africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Ona Sasa Social Network
                    </a>
                  </h4>
                  <span className="text-xs px-2 py-1 bg-red-50 text-[#ba1b1b] rounded-full whitespace-nowrap ml-2 print:px-1.5 print:py-0.5">
                    2024
                  </span>
                </div>
                <p className="text-gray-700 text-sm print:text-xs">
                  Engineered and deployed Ona Sasa, a social network platform that connects users and facilitates
                  community engagement. Focused on real-time features, scalable architecture, and user experience.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6 print:mb-4">
            <h3 className="text-lg font-bold text-[#a71c1c] mb-3 pb-1 border-b-2 border-red-100 flex items-center print:text-base print:mb-2">
              <GraduationCap className="text-[#ba1b1b] w-5 h-5 mr-2" />
              EDUCATION
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 print:text-sm">
                Bachelor Degree in Information Technology & Computer Programming
              </h4>
              <p className="text-[#ba1b1b] font-medium text-sm print:text-xs">National Insitute of Tansport (NIT)</p>
              <div className="flex items-center mt-2">
                <span className="text-xs px-2 py-1 bg-red-50 text-[#ba1b1b] rounded-full">2019 - 2022</span>
              </div>
            </div>
          </section>

          <section className="mb-8 print:mb-4">
            <h3 className="text-lg font-bold text-[#a71c1c] mb-3 pb-1 border-b-2 border-red-100 flex items-center print:text-base print:mb-2">
              <Languages className="text-[#ba1b1b] w-5 h-5 mr-2" />
              LANGUAGES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-2">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#ba1b1b] mr-2"></span>
                <span className="font-medium text-sm print:text-xs">English</span>
                <span className="text-gray-600 text-sm ml-2 print:text-xs">(Fluent)</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#ba1b1b] mr-2"></span>
                <span className="font-medium text-sm print:text-xs">Swahili</span>
                <span className="text-gray-600 text-sm ml-2 print:text-xs">(Native)</span>
              </div>
            </div>
          </section>
        </div>

        <footer className="text-center py-4 px-8 bg-white print:py-3 print:px-6">
          <h3 className="text-lg font-bold text-[#a71c1c] mb-3 pb-1 border-b-2 border-red-100 flex items-center justify-center print:text-base print:mb-2">
            <Users className="text-[#ba1b1b] w-5 h-5 mr-2" />
            REFEREES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full print:grid-cols-2 print:gap-2">
            <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center shadow-sm w-full print:bg-white print:shadow-none print:p-1.5">
              <div className="w-8 h-8 bg-[#ba1b1b] rounded-full flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
                EK
              </div>
              <div className="text-left">
                <p className="font-medium text-md text-gray-800 print:text-sm">Elisate Kanza</p>
                <p className="text-md text-gray-600 print:text-xs">Director, Conveyance Logistics Limited</p>
                <p className="text-md text-[#ba1b1b] print:text-xs">info@conveyance.co.tz</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center shadow-sm w-full print:bg-white print:shadow-none print:p-1.5">
              <div className="w-8 h-8 bg-[#ba1b1b] rounded-full flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
                PS
              </div>
              <div className="text-left">
                <p className="font-medium text-md text-gray-800 print:text-sm">Peter Sanga</p>
                <p className="text-md text-gray-600 print:text-xs">Officer, GPSA, Tanzania</p>
                <p className="text-md text-[#ba1b1b] print:text-xs">perersanga@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mt-6 md:mb-0 print:mt-4">
            <p className="font-medium print:text-xs">Last updated: December 2025</p>
          </div>
        </footer>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowImageModal(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-xl mx-auto">
            <div className="relative">
              <div className="rounded-full overflow-hidden border-8 border-white/20 shadow-2xl w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <img
                  src="https://assets.ludovick.space/uploads/ludovick-konyo.png"
                  alt="Ludovick Konyo"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowImageModal(false)
                }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
