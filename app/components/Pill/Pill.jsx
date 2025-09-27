import Link from "next/link";
import categories from "@/data/categories.json";

function Pill(props) {
  const categoryColor = categories[props.category]?.color;
  return (
    <div
      className="shadow-md ml-2 px-2.5 py-1 w-fit rounded-full inline-flex"
      id="pill"
      style={{
        backgroundColor: `var(--${categoryColor || "green"})`,
      }}
    >
      <Link
        title={`Ir a la sección de ${categories[props.category]?.display}`}
        className="text-xs font-sans"
        href={`/blog/category/${props.category}`}
      >
        {categories[props.category]?.display}
      </Link>
    </div>
  );
}

export const PillCategories = ({ categories }) => {
  return categories.map((category) => (
    <Pill key={category} category={category} />
  ));
};
