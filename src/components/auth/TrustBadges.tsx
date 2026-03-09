interface TrustBadgeProps {
  icon: React.ReactNode;
  label: string;
}

function TrustBadge({ icon, label }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-white/80">
      {icon}
      {label}
    </div>
  );
}
export default TrustBadge;