// import '../css/prism-classes.css'

export const metadata = {
  title: "Readme",
  description: "JonathanBytes's website",
};

export default function Layout({ children }) {
  return (
    <main>
      <article>{children}</article>
    </main>
  );
}
