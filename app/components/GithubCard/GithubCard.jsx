import Image from "next/image";

const githubCard = ({ name }) => {
  return (
    <a href={`https://github.com/JonathanBytes/${name}`} className="">
      <Image
        width={400}
        height={200}
        src={`https://gh-card.dev/repos/JonathanBytes/${name}.svg`}
        alt={`JonathanBytes ${name} Github repository card`}
      />
    </a>
  );
};

export default githubCard;
