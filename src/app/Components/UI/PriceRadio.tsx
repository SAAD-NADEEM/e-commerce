import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function PriceRadio({ defaultValue }: { defaultValue?: string }) {
  const radios = [
    { name: "Any Price", value: "any", label: "r0" },
    { name: "under Rs 500", value: "500", label: "r1" },
    { name: "under Rs 1000", value: "1000", label: "r2" },
    { name: "under Rs 1500", value: "1500", label: "r3" },
    { name: "under Rs 2000", value: "2000", label: "r4" },
    { name: "under Rs 5000", value: "5000", label: "r5" },
    { name: "under Rs 7000", value: "7000", label: "r6" },
  ];

  return (
    <RadioGroup
      name="m_price"
      defaultValue={defaultValue || "any"}
      className="gap-2"
    >
      <h3 className="text-text-primary font-bold text-sm">Price</h3>
      {radios.map((radio, i) => (
        <div key={i} className="flex gap-3 items-center">
          <RadioGroupItem value={radio.value} id={radio.label} />
          <Label htmlFor={radio.label}>{radio.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export default PriceRadio;
