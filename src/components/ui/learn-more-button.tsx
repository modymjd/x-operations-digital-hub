// Enhanced Learn More Button Component
import { smoothScrollTo } from '@/lib/navigation';

interface LearnMoreButtonProps {
  targetId: string;
  className?: string;
}

export function LearnMoreButton({ targetId, className = '' }: LearnMoreButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };
  
  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors ${className}`}
    >
      أعرف المزيد
    </button>
  );
}
