import Image from "next/image";
import Link from "next/link";

function CateHeading({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-3 items-center cursor-default">
        <Image src="/left.png" alt="left arrow" height={12} width={44} />
        <h1 className="md:text-2xl text-xl text-text-primary font-bold">{children}</h1>
        <Image src="/right.png" alt="left arrow" height={12} width={44} />
      </div>
      <Link href={"/"} className="text-text-secondary hover:text-main-primary duration-100">See All</Link>
    </div>
  );
}

export default CateHeading;
