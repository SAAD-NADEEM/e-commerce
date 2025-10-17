function BrandLogo({ invert }: { invert?: boolean }) {
  return (
    <div>
      <h1
        className={`text-2xl font-medium tracking-tight ${
          invert ? "text-main-background" : "text-text-primary"
        }`}
      >
        <span className="text-main-primary">Bloom</span> Beauty
      </h1>
    </div>
  );
}

export default BrandLogo;
