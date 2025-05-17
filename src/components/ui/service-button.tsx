
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

interface ServiceButtonProps extends ButtonProps {
  linkType: 'whatsapp' | 'scroll';
  targetId?: string;
  children: React.ReactNode;
}

const ServiceButton = ({ 
  linkType, 
  targetId, 
  children, 
  className,
  ...props 
}: ServiceButtonProps) => {
  
  const handleClick = () => {
    if (linkType === 'whatsapp') {
      window.open('https://wa.me/201015175618', '_blank', 'noopener,noreferrer');
    } else if (linkType === 'scroll' && targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <Button
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ServiceButton;
