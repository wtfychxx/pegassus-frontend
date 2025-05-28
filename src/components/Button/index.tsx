export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  block?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

export const PrimaryButton = ({
  type,
  onClick,
  children,
  block,
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`p-4 ${
        isLoading
          ? "bg-primary-200"
          : "bg-primary-600 hover:cursor-pointer hover:bg-primary-700"
      } flex justify-center gap-2 items-center text-white rounded-md font-bold duration-150 transition-all ${
        block ? "w-full" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {isLoading && <span>loading</span>} {children}
    </button>
  );
};
