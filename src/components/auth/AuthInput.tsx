interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  rightSlot?: React.ReactNode;
  borderClass?: string;
}

function AuthInput({
  icon,
  rightSlot,
  borderClass = "border-slate-200",
  ...props
}: AuthInputProps) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none">
        {icon}
      </span>
      <input
        className={`w-full pl-12 ${rightSlot ? "pr-12" : "pr-4"} py-3.5 bg-slate-50 border ${borderClass} rounded-xl text-slate-800 text-[15px] placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white`}
        {...props}
      />
      {rightSlot && (
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {rightSlot}
        </span>
      )}
    </div>
  );
}

export default AuthInput;