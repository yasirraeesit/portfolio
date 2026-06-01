import { personalData } from "../../../utils/data/personal-data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineCloud } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import {
  MdOutlineAutoGraph,
  MdOutlineDashboard,
  MdOutlineIntegrationInstructions,
  MdOutlinePayment,
  MdOutlineSecurity,
  MdOutlineSpeed,
  MdOutlineStorage,
  MdOutlineSupportAgent,
  MdOutlineWebhook,
} from "react-icons/md";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import IconButton from "@/components/ui/IconButton";
import { projectsData } from "@/utils/data/projects-data";

function HeroSection() {
  const services = [
    {
      label: "SaaS app development",
      Icon: HiOutlineCloud,
      gradient: "bg-gradient-to-br from-sky-300 to-indigo-300",
    },
    {
      label: "Dashboards & analytics",
      Icon: MdOutlineDashboard,
      gradient: "bg-gradient-to-br from-amber-300 to-orange-300",
    },
    {
      label: "API development",
      Icon: MdOutlineIntegrationInstructions,
      gradient: "bg-gradient-to-br from-fuchsia-300 to-pink-300",
    },
    {
      label: "Database design",
      Icon: MdOutlineStorage,
      gradient: "bg-gradient-to-br from-emerald-300 to-lime-300",
    },
    {
      label: "Secure auth (JWT/RBAC)",
      Icon: MdOutlineSecurity,
      gradient: "bg-gradient-to-br from-teal-300 to-cyan-300",
    },
    {
      label: "Payments (Stripe)",
      Icon: MdOutlinePayment,
      gradient: "bg-gradient-to-br from-yellow-300 to-rose-300",
    },
    {
      label: "Real-time (WebSockets)",
      Icon: MdOutlineWebhook,
      gradient: "bg-gradient-to-br from-cyan-300 to-blue-300",
    },
    {
      label: "Performance optimization",
      Icon: MdOutlineSpeed,
      gradient: "bg-gradient-to-br from-lime-300 to-emerald-300",
    },
    {
      label: "SEO + landing pages",
      Icon: MdOutlineAutoGraph,
      gradient: "bg-gradient-to-br from-pink-300 to-rose-300",
    },
    {
      label: "Support tooling",
      Icon: MdOutlineSupportAgent,
      gradient: "bg-gradient-to-br from-violet-300 to-fuchsia-300",
    },
    {
      label: "Mobile apps (React Native)",
      Icon: FaMobileAlt,
      gradient: "bg-gradient-to-br from-violet-300 to-purple-300",
    },
  ];

  const marqueeServices = [...services, ...services];
  const featuredProjectsCount = projectsData.filter((p) => p.featured).length;

  return (
    <section className="nb-section pt-28 md:pt-32 nb-hero-grid">
      <div className="nb-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <Badge tone="accent">Open for work</Badge>

            <h1 className="nb-h1 mt-8">I build MERN + NestJS products.</h1>

            <p className="nb-body mt-6 max-w-[46ch]">
              I&apos;m <span className="text-[var(--nb-fg)] font-black">{personalData.name}</span> — a{" "}
              {personalData.designation} who enjoys turning ideas into smooth, production-ready products. I build secure,
              well-structured APIs, analytics dashboards that are easy to understand, and UI that feels fast and
              polished—focused on clean architecture, performance, and the small UX details that make an app feel
              finished.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["2+ years", "MERN + NestJS", "PostgreSQL", "React Native (Expo)"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} size="lg">
                Hire me <MdEmail size={18} />
              </Button>
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                variant="ghost"
                size="lg"
              >
                View projects
              </Button>
              <Button as="a" href={personalData.resume} target="_blank" rel="noreferrer" variant="muted" size="lg">
                Resume <HiDownload size={18} />
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <IconButton as="a" href={personalData.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={18} />
              </IconButton>
              <IconButton as="a" href={personalData.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </IconButton>
            </div>
          </div>

          <div className="lg:col-span-5 lg:self-center">
            <Card className="p-6 md:p-8 max-w-xl mx-auto lg:mx-auto">
              <div className="flex items-start gap-5">
                <img
                  src={personalData.profile}
                  alt={personalData.name}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)]"
                />
                <div className="min-w-0">
                  <p className="nb-h3">{personalData.name}</p>
                  <p className="mt-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
                    {personalData.designation}
                  </p>
                  <p className="mt-4 nb-body">
                    Building SaaS, dashboards, and secure APIs end-to-end.
                  </p>
                  <p className="nb-body mt-4">
                    {personalData.address} • Available remote
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Open to full-time", "Contract", "Remote"].map((t) => (
                      <Badge key={t} className="bg-[var(--nb-bg)] text-[var(--nb-fg)]">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <p className="mt-4 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--nb-muted)]">
                    PKT (UTC+5) • Fast replies
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="border-2 border-[var(--nb-border)] rounded-2xl shadow-[6px_6px_0_0_var(--nb-shadow)] p-4 bg-[var(--nb-bg)]">
                  <p className="text-[26px] font-black leading-none">2+</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">Years</p>
                </div>
                <div className="border-2 border-[var(--nb-border)] rounded-2xl shadow-[6px_6px_0_0_var(--nb-shadow)] p-4 bg-[var(--nb-bg)]">
                  <p className="text-[26px] font-black leading-none">{projectsData.length}+</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
                    Projects
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "NestJS", "PostgreSQL", "React Native"].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
              Services
            </span>
          </div>

          <div className="mt-4 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]">
            <div className="nb-marquee px-6 md:px-10 pb-3">
              <div
                className="nb-marquee-track gap-4"
                style={{ "--nb-marquee-duration": `${Math.max(22, services.length * 3.2)}s` }}
              >
                {marqueeServices.map(({ label, Icon, gradient }, idx) => (
                  <Card
                    key={`${label}-${idx}`}
                    className={[
                      "shrink-0 w-[280px] p-5",
                      gradient,
                      "text-[var(--nb-bg)] border-[var(--nb-border)]",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--nb-bg)_12%,transparent)] border-2 border-[var(--nb-border)] shadow-[4px_4px_0_0_var(--nb-shadow)] grid place-items-center">
                        <Icon size={18} />
                      </div>
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] leading-tight">{label}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
