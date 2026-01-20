import Image from "next/image";
import ZoomableImage from "@/app/components/ZoomableImage";
import ShowcaseHero from "../components/showcaseHero";

export const metadata = {
  title: "Climaware",
  description:
    "Real-time environmental monitoring system with Firebase integration and IoT sensors.",
};

const repoData = {
  name: "ambient-sensor-esp-web",
  html_url: "#",
  homepage: "https://climaware.jonathanbytes.com",
  description:
    "Web dashboard for Climaware, an IoT environmental monitoring system using ESP32 and Firebase.",
  stargazers_count: 1,
  forks_count: 0,
  language: "TypeScript",
  topics: [
    "iot",
    "esp32",
    "firebase",
    "realtime-database",
    "environment-monitoring",
    "whatsapp-notifications",
  ],
};

export default async function ClimawarePage() {
  // const repoData = await getGithubRepo("ambient-sensor-esp-web");
  return (
    <main>
      <ShowcaseHero repo={repoData} customName={"Climaware"} />
      <p>
        Climaware is a comprehensive IoT environmental monitoring solution that
        combines custom hardware with a powerful web dashboard. It provides
        real-time tracking of temperature and humidity through ESP32-based
        sensors, offering instant notifications and detailed historical data
        visualization for informed decision-making.
      </p>
      <a
        href={repoData?.homepage || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-2/3 block mx-auto my-12"
      >
        <Image
          src="/assets/projects/climaware-dashboard.webp"
          alt="Climaware Dashboard"
          width={944}
          height={500}
          className="rounded-2xl border border-[var(--color-altbg)] grayscale-[80%] hover:grayscale-0 transition-all duration-500 shadow-xl"
        />
      </a>

      <div className="space-y-24 max-w-4xl mx-auto">
        {/* Real-time Monitoring Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Real-Time Monitoring
            </h2>
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p>
                <strong>Live Data Updates:</strong> Monitor temperature and
                humidity in real-time through an intuitive dashboard powered by
                Firebase Realtime Database.
              </p>
              <p>
                <strong>Multi-Device Support:</strong> Connect and manage
                multiple sensors simultaneously, switching between devices
                seamlessly to monitor different locations or environments.
              </p>
              <p>
                <strong>Instant Alerts:</strong> Receive WhatsApp notifications
                when environmental conditions exceed predefined thresholds,
                ensuring quick response to critical changes.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/climaware-charts.webp"
              alt="Real-time Charts"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Hardware Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Custom IoT Hardware
            </h2>
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p>
                <strong>ESP32 Microcontroller:</strong> Powered by the versatile
                ESP32 platform, providing WiFi connectivity and reliable
                performance.
              </p>
              <p>
                <strong>DHT22 Sensor:</strong> High-precision digital sensor
                measuring temperature (±0.5°C) and humidity (±2-5% RH) with
                excellent long-term stability.
              </p>
              <p>
                <strong>Custom 3D Enclosure:</strong> Professionally designed
                housing protects the electronics while allowing proper airflow
                for accurate readings.
              </p>
            </div>
          </div>
          <div className="md:order-1 rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/climaware-prototype.webp"
              alt="Climaware Prototype"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Data Visualization Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Interactive Data Visualization
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-foreground)] opacity-90">
              <li>Historical trend analysis with interactive charts</li>
              <li>Customizable time ranges for data exploration</li>
              <li>Temperature and humidity correlation views</li>
              <li>Export data for further analysis</li>
              <li>Responsive design for desktop and mobile monitoring</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/climaware-login.webp"
              alt="Dashboard Login"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Device Management Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Device Management
            </h2>
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p>
                <strong>Easy Setup:</strong> Streamlined device registration
                process with QR code support for quick sensor deployment.
              </p>
              <p>
                <strong>Device Status:</strong> Monitor connection status,
                battery levels, and last update times for all registered
                sensors.
              </p>
              <p>
                <strong>User Authentication:</strong> Secure access with
                Firebase Auth, ensuring your data remains private and protected.
              </p>
            </div>
          </div>
          <div className="md:order-1 rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/climaware-new-device.webp"
              alt="Add New Device"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Notifications Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Smart Notifications
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-foreground)] opacity-90">
              <li>WhatsApp integration for instant alerts</li>
              <li>Customizable threshold settings per device</li>
              <li>Temperature and humidity limit notifications</li>
              <li>Connection loss alerts</li>
              <li>Daily summary reports</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/climaware-whatsapp-notifications.webp"
              alt="WhatsApp Notifications"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="bg-[var(--color-altbg)] rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Frontend
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-foreground)] opacity-90">
                <li>React with TypeScript</li>
                <li>Next.js for server-side rendering</li>
                <li>Tailwind CSS for styling</li>
                <li>Lightweight Charts for data visualization</li>
                <li>Firebase SDK for real-time data</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Backend & Infrastructure
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-foreground)] opacity-90">
                <li>Firebase Realtime Database</li>
                <li>Firebase Authentication</li>
                <li>Cloud Functions for notifications</li>
                <li>Automated data retention policies</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Hardware
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-foreground)] opacity-90">
                <li>ESP32 Development Board</li>
                <li>DHT22 Temperature/Humidity Sensor</li>
                <li>Custom 3D-printed enclosure</li>
                <li>USB-C power supply</li>
                <li>Status LED indicators</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Features
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-foreground)] opacity-90">
                <li>Real-time data synchronization</li>
                <li>Historical data analysis</li>
                <li>Multi-device management</li>
                <li>WhatsApp notifications</li>
                <li>Responsive web dashboard</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hardware Images Grid */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center">
            Hardware Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
              <ZoomableImage
                src="/assets/projects/climaware-prototype-on.webp"
                alt="Prototype in Operation"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
              <ZoomableImage
                src="/assets/projects/climaware-prototype-inside.webp"
                alt="Internal Components"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
              <ZoomableImage
                src="/assets/projects/climaware-3d-model.webp"
                alt="3D Model Design"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
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
                Home Monitoring
              </h3>
              <p className="text-[var(--color-foreground)] opacity-90">
                Track indoor climate conditions to optimize comfort, prevent
                mold growth, and ensure ideal conditions for houseplants and
                electronics.
              </p>
            </div>
            <div className="bg-[var(--color-altbg)] rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Industrial Applications
              </h3>
              <p className="text-[var(--color-foreground)] opacity-90">
                Monitor warehouses, server rooms, and manufacturing facilities
                where environmental control is critical for product quality and
                equipment longevity.
              </p>
            </div>
            <div className="bg-[var(--color-altbg)] rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Climate Research
              </h3>
              <p className="text-[var(--color-foreground)] opacity-90">
                Deploy multiple sensors for environmental studies, collecting
                long-term data on temperature and humidity patterns across
                different locations.
              </p>
            </div>
            <div className="bg-[var(--color-altbg)] rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                Agriculture & Greenhouses
              </h3>
              <p className="text-[var(--color-foreground)] opacity-90">
                Maintain optimal growing conditions by monitoring and receiving
                alerts when environmental parameters deviate from ideal ranges.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
