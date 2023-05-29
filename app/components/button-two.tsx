import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "reakit/Button";

const buttonStyles = cva("rounded-md font-medium focus:outline-none", {
  variants: {
    intent: {
      primary:
        "bg-blue-500 text-white shadow-lg hover:bg-blue-400 focus:bg-blue-400 focus:ring-blue-500",
      secondary:
        "bg-gray-200 text-gray-800 shadow hover:bg-gray-300 focus:bg-gray-300 focus:ring-gray-500",
      danger:
        "bg-red-500 text-white shadow-lg tracking-wider hover:bg-red-400 focus:bg-red-400 focus:ring-red-500",
      text: "text-slate-700 tracking-wider hover:underline hover:text-slate-600 hover:bg-slate-900/5 focus:text-slate-600 focus:ring-slate-500",
    },
    size: {
      small: "px-3 py-1.5 text-sm focus:ring-2 focus:ring-offset-1",
      medium: "px-5 py-3 focus:ring-2 focus:ring-offset-2",
      large: "px-8 py-4 text-lg focus:ring focus:ring-offset-2",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface Props extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
}

export function ReakitButton({ intent, size, fullWidth, ...props }: Props) {
  return (
    <Button className={buttonStyles({ intent, size, fullWidth })} {...props} />
  );
}
