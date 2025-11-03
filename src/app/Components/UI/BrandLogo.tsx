import Link from "next/link";

function BrandLogo({ invert }: { invert?: boolean }) {
  return (
    <Link href={"/"}>
      <h1
        className={`text-2xl font-medium tracking-tight cursor-pointer ${
          invert ? "text-main-background" : "text-text-primary"
        }`}
      >
        <span className="text-main-primary">Bloom</span> Beauty
      </h1>
    </Link>
  );
}

export default BrandLogo;
