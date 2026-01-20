import Image from "next/image";
import ZoomableImage from "@/app/components/ZoomableImage";
import ShowcaseHero from "../components/showcaseHero";

export const metadata = {
  title: "SATMA",
  description:
    "Early Warning and Environmental Monitoring System for real-time hydrological data and automated alerts.",
};

export default function SATMAPage() {
  // Manual repo data since the repository is private
  const repoData = {
    name: "SATMA",
    html_url: "#",
    homepage: "https://devsatmadokploy.jonathanbytes.com",
    description:
      "Sistema de Alertas Tempranas y Monitoreo Ambiental - High-performance environmental monitoring platform",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    topics: [
      "nextjs",
      "react",
      "fastapi",
      "environmental-monitoring",
      "real-time",
      "geospatial",
      "hydrological-data",
      "early-warning-system",
      "docker",
      "mysql",
    ],
  };

  return (
    <main>
      <ShowcaseHero repo={repoData} customName={"SATMA"} />
      <p>
        SATMA (Sistema de Alertas Tempranas y Monitoreo Ambiental) is a
        cutting-edge environmental monitoring platform that provides critical
        hydrological data, station monitoring, and automated alerts for
        environmental safety. Built with a modern bleeding-edge tech stack, it
        delivers real-time insights with enterprise-grade performance and
        security.
      </p>
      <div className="w-full md:w-2/3 block mx-auto my-12">
        <Image
          src="/assets/projects/satma-dashboard.webp"
          alt="SATMA Dashboard"
          width={944}
          height={500}
          className="rounded-2xl border border-[var(--color-altbg)] grayscale-[80%] hover:grayscale-0 transition-all duration-500 shadow-xl"
        />
      </div>

      <div className="space-y-24 max-w-4xl mx-auto">
        {/* Interactive Geospatial Monitoring Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Interactive Geospatial Monitoring
            </h2>
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p>
                <strong>Real-time Map Interface:</strong> High-performance
                station visualization using Leaflet with custom marker
                clustering for optimal performance even with hundreds of
                monitoring stations.
              </p>
              <p>
                <strong>Live Status Updates:</strong> Instant visual feedback of
                station health and environmental parameters directly on the map,
                enabling quick assessment of critical situations.
              </p>
              <p>
                <strong>Side Panel Insights:</strong> Quick access to station
                metadata and recent telemetry without leaving the map view,
                streamlining the monitoring workflow.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/satma-mobile-map-stations.webp"
              alt="Interactive Map with Stations"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Advanced Data Visualization Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Advanced Data Visualization
            </h2>
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p>
                <strong>High-Frequency Charts:</strong> Integration with
                Lightweight Charts (TradingView) for smooth, high-performance
                time-series data rendering capable of handling thousands of data
                points.
              </p>
              <p>
                <strong>Custom Range Switching:</strong> Interactive time-scale
                toggles (1H, 1D, 1W, etc.) for comprehensive historical data
                analysis and pattern recognition.
              </p>
              <p>
                <strong>Bocatoma Dashboard:</strong> Specialized monitoring for
                water intake structures, displaying flow rates and critical
                water levels with real-time updates.
              </p>
            </div>
          </div>
          <div className="md:order-1 rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/satma-advanced-charts.webp"
              alt="Advanced Charts Interface"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Environmental Bulletins Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Environmental Bulletins
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-foreground)] opacity-90">
              <li>Explorer interface with file-tree navigation</li>
              <li>Seamless document viewing and management</li>
              <li>Cloudflare R2 integration for scalable, secure storage</li>
              <li>Automated bulletin generation and distribution</li>
              <li>Version control and historical archive access</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/satma-file-explorer.webp"
              alt="File Explorer Interface"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Enterprise Security Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Enterprise-Grade Security
            </h2>
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p>
                <strong>Better Auth Integration:</strong> Modern authentication
                workflows including email/password, password reset, and
                comprehensive session management for maximum security.
              </p>
              <p>
                <strong>Admin Suite:</strong> Comprehensive dashboard for user
                management, role assignment, and system configuration with
                granular permission controls.
              </p>
              <p>
                <strong>Transaction Emails:</strong> Automated notifications via
                Resend for critical alerts, account operations, and
                environmental warnings.
              </p>
            </div>
          </div>
          <div className="md:order-1 rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/satma-user-manager.webp"
              alt="User Management Dashboard"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Mobile Experience Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Responsive Mobile Experience
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-foreground)] opacity-90">
              <li>Fully responsive design optimized for field work</li>
              <li>Touch-optimized chart interactions</li>
              <li>Mobile-first map navigation</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/satma-mobile-charts.webp"
              alt="Mobile Charts Interface"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Technical Stack Section */}
        <section className="bg-[var(--color-altbg)] rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            Modern Tech Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Frontend (Modern & Fast)
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-foreground)] opacity-90">
                <li>React 19 & Next.js 16 with App Router</li>
                <li>Bun for fast package management</li>
                <li>Tailwind CSS v4 with JIT engine</li>
                <li>Drizzle ORM for type-safe DB interactions</li>
                <li>Framer Motion for fluid animations</li>
                <li>Biome for high-performance linting</li>
                <li>Leaflet for geospatial visualization</li>
                <li>Lightweight Charts (TradingView)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Backend (Robust & Scalable)
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-foreground)] opacity-90">
                <li>Python 3.12 with FastAPI</li>
                <li>SQLAlchemy & Asyncmy for async DB</li>
                <li>Pandas & NumPy for data processing</li>
                <li>Cloudflare R2 object storage</li>
                <li>UV for fast Python package management</li>
                <li>Resend for transactional emails</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Infrastructure
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-foreground)] opacity-90">
                <li>Docker</li>
                <li>MySQL relational database</li>
                <li>Railway/Fly.io deployment ready</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Developer Experience
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-foreground)] opacity-90">
                <li>End-to-end type safety</li>
                <li>Optimized build workflows</li>
                <li>Scalable architecture</li>
                <li>Independent service scaling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center">
            Architecture Overview
          </h2>
          <div className="bg-[var(--color-altbg)] rounded-2xl p-8">
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p className="text-center mb-6">
                <strong>Multi-Service Containerized Architecture</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[var(--color-primary)]">
                    Frontend Layer
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Next.js 16 UI with Server Components</li>
                    <li>• Better Auth for authentication</li>
                    <li>• Direct MySQL queries via Drizzle</li>
                    <li>• Real-time chart updates</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[var(--color-primary)]">
                    Backend Layer
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• FastAPI REST endpoints</li>
                    <li>• Async data processing</li>
                    <li>• Pandas/NumPy calculations</li>
                    <li>• R2 document management</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[var(--color-primary)]">
                    Data Layer
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• MySQL for structured data</li>
                    <li>• Cloudflare R2 for objects</li>
                    <li>• Resend for email delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Management */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              User & Profile Management
            </h2>
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p>
                <strong>Comprehensive User Profiles:</strong> Full-featured user
                management system with customizable profiles, avatar uploads,
                and preference settings.
              </p>
              <p>
                <strong>Role-Based Access Control:</strong> Granular permissions
                system allowing administrators to control access to specific
                system features.
              </p>
              <p>
                <strong>Activity Logging:</strong> Complete audit trail of user
                actions for compliance and security monitoring.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/satma-edit-profile.webp"
              alt="Edit Profile Interface"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-altbg)] rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Flood Early Warning
              </h3>
              <p className="text-[var(--color-foreground)] opacity-90">
                Monitor water levels and flow rates in real-time to provide
                early warnings for potential flooding events, enabling timely
                evacuations and disaster preparedness.
              </p>
            </div>
            <div className="bg-[var(--color-altbg)] rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Water Resource Management
              </h3>
              <p className="text-[var(--color-foreground)] opacity-90">
                Track water availability, quality, and distribution across
                multiple intake points (bocatomas) for optimal resource
                allocation and conservation planning.
              </p>
            </div>
            <div className="bg-[var(--color-altbg)] rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Hydroelectric Operations
              </h3>
              <p className="text-[var(--color-foreground)] opacity-90">
                Monitor flow rates and water levels critical for hydroelectric
                plant operations, ensuring optimal power generation while
                maintaining safety standards.
              </p>
            </div>
            <div className="bg-[var(--color-altbg)] rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Environmental Research
              </h3>
              <p className="text-[var(--color-foreground)] opacity-90">
                Collect and analyze long-term hydrological data for
                environmental studies, climate change research, and ecosystem
                health assessment across multiple monitoring stations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
