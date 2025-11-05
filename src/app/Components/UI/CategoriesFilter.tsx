import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function CategoriesFilter({ defaultValue }: { defaultValue?: string[] }) {
  const cates = ["Eye", "Foundation", "Primer", "Blush", "Face"];

  return (
    <>
      {cates.map((cate, i) => (
        <div key={i} className="flex gap-3 items-center">
          <Checkbox
            name="cate"
            value={cate}
            id={cate}
            defaultChecked={defaultValue?.includes(cate)}
          />
          <Label htmlFor={cate}>{cate}</Label>
        </div>
      ))}
    </>
  );
}

export default CategoriesFilter;
