interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
}

function SocialButton({ icon, label }: SocialButtonProps) {
  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-600 hover:bg-white hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200"
    >
      {icon}
      {label}
    </button>
  );
}
export default SocialButton;