import { getGithubRepo } from "@/lib/getGithubRepos";
import ShowcaseHero from "../components/showcaseHero";
import ZoomableImage from "@/app/components/ZoomableImage";
import Image from "next/image";

export const metadata = {
  title: "Totally Biased",
  description: "A subjective sort app to rank by taste, bias and gut instinct.",
};

export default async function TotallyBiasedPage() {
  const repoData = await getGithubRepo("totally-biased");
  return (
    <main>
      <ShowcaseHero repo={repoData} customName={"Totally biased"} />
      <p>
        Totally Biased is a fun and simple web app that helps you create a
        ranked list of your favorite things. Whether it's movies, books, snacks,
        or anything else, this tool makes it easy to see how your preferences
        stack up. You provide the list, and through a series of one-on-one
        comparisons, we'll help you build your ultimate, totally biased ranking.
      </p>
      <a
        href={repoData.homepage}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-2/3 block mx-auto my-12"
      >
        <Image
          src="/assets/projects/totally-biased-homepage.webp"
          alt="Totally Biased Homepage"
          width={944}
          height={500}
          className="rounded-2xl border border-[var(--color-altbg)] grayscale-[80%] hover:grayscale-0 transition-all duration-500 shadow-xl"
        />
      </a>

      <div className="space-y-24 max-w-4xl mx-auto">
        {/* Comparison Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Interactive Ranking
            </h2>
            <div className="space-y-4 text-[var(--color-foreground)] opacity-90">
              <p>
                <strong>Simple Interface:</strong> Just paste your list and
                start comparing immediately. No complex setup required.
              </p>
              <p>
                <strong>Decide Your Bias:</strong> The app breaks down your list
                into simple one-on-one comparisons. With smooth animations, you
                choose between items two at a time, making it easier to decide
                what you truly prefer.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/totally-biased-ranking.webp"
              alt="Ranking Interface"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Results Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Enhanced Results
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-foreground)] opacity-90">
              <li>Copy your final ranked list to clipboard instantly</li>
              <li>Save rankings directly to your account</li>
              <li>Generate shareable public links for friends</li>
              <li>Share as plain text or let others try sorting your list</li>
            </ul>
          </div>
          <div className="md:order-1 rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/totally-biased-ranked.webp"
              alt="Results Screen"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* User Accounts Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Persistence & Accounts
            </h2>
            <p className="text-[var(--color-foreground)] opacity-90">
              Create an account to save your completed rankings perpetually.
              Access all your saved lists on a dedicated dashboard, revisit old
              favorites, or update your rankings as your tastes change.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-altbg)] shadow-lg">
            <ZoomableImage
              src="/assets/projects/totally-biased-lists.webp"
              alt="User Lists Dashboard"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
