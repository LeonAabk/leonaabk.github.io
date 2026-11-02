import {
  CreditCard,
  UtensilsCrossed,
  ArrowLeftRight,
  Plane,
  Calculator,
  BookOpen,
  TrainFront,
  Briefcase,
} from 'lucide-react';
import { IconName } from '../data/projects';

interface ProjectIconProps {
  name: IconName;
  size?: number;
}

export function ProjectIcon({ name, size = 20 }: ProjectIconProps) {
  const strokeWidth = 1.75;

  switch (name) {
    case 'credit-card':
      return <CreditCard size={size} strokeWidth={strokeWidth} />;
    case 'utensils':
      return <UtensilsCrossed size={size} strokeWidth={strokeWidth} />;
    case 'routing':
      return <ArrowLeftRight size={size} strokeWidth={strokeWidth} />;
    case 'plane':
      return <Plane size={size} strokeWidth={strokeWidth} />;
    case 'calculator':
      return <Calculator size={size} strokeWidth={strokeWidth} />;
    case 'book-open':
      return <BookOpen size={size} strokeWidth={strokeWidth} />;
    case 'train':
      return <TrainFront size={size} strokeWidth={strokeWidth} />;
    case 'briefcase':
      return <Briefcase size={size} strokeWidth={strokeWidth} />;
  }
}
