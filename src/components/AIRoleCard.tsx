interface AIRoleCardProps {
  name: string;
  role: string;
  roleType: 'defendant' | 'judge' | 'random';
  logoSrc: string;
}

export const AIRoleCard = ({ name, role, roleType, logoSrc }: AIRoleCardProps) => {
  const badgeClass = {
    defendant: 'role-badge-defendant',
    judge: 'role-badge-judge',
    random: 'role-badge-random',
  }[roleType];

  return (
    <div className="role-card">
      <img
        src={logoSrc}
        alt={`${name} Logo`}
        className="w-20 h-20 rounded-xl mb-4 object-cover"
      />
      <span className={`role-badge ${badgeClass} mb-3`}>{role}</span>
      <span className="text-foreground font-semibold">{name}</span>
    </div>
  );
};
