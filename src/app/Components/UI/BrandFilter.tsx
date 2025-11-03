import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function BrandFilter({ defaultValue }: { defaultValue?: string[] }) {
  const brands = ["Gosh", "ST London", "Rimmel London", "Max Factor"];

  return (
    <>
      {brands.map((brand, i) => (
        <div key={i} className="flex gap-3 items-center">
          <Checkbox
            name="brand"
            value={brand}
            id={brand}
            defaultChecked={defaultValue?.includes(brand)}
          />
          <Label htmlFor={brand}>{brand}</Label>
        </div>
      ))}
    </>
  );
}

export default BrandFilter;
