
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Flag, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      id: 1,
      title: 'BASEF',
      description: "Bronze Medalists '24 & Finalists '25",
      subtitle: 'ISEF-sponsored',
      icon: <Award className="w-10 h-10 text-xorange" />,
      badge: 'Bronze'
    },
    {
      id: 2,
      title: 'IEEE YESIST12 JE',
      description: 'National Level Winners & 2× Global Finalists',
      flags: ['🇹🇳', '🇲🇾'],
      icon: <Trophy className="w-10 h-10 text-xorange" />
    },
    {
      id: 3,
      title: 'Afro-Asian Forum',
      description: "Silver Medalists '24",
      flags: ['🇯🇴'],
      icon: <Award className="w-10 h-10 text-xorange" />,
      badge: 'Silver'
    },
    {
      id: 4,
      title: 'NCCSI',
      description: "Top 10 National Level Winners '24",
      icon: <Trophy className="w-10 h-10 text-xorange" />
    },
    {
      id: 5,
      title: 'ECPC',
      description: "Top 30 Finalists '24",
      icon: <Trophy className="w-10 h-10 text-xorange" />
    },
    {
      id: 6,
      title: 'Mini Shark Tank Egypt',
      description: "Top 7 Finalists '25",
      subtitle: 'SUTech-sponsored',
      icon: <Trophy className="w-10 h-10 text-xorange" />
    },
    {
      id: 7,
      title: 'ISF',
      description: "1st Place National Winners '25",
      icon: <Trophy className="w-10 h-10 text-xorange" />,
      badge: 'Gold'
    }
  ];

  return (
    <section id="achievements" className="section bg-white dark:bg-xblue-dark/80">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Achievements</h2>
        <p className="section-subtitle text-center">Recognition of our excellence and innovation</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.id}
              className="hover:border-xorange transition-all group animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{achievement.icon}</div>
                
                <h3 className="text-xl font-bold mb-2 text-xblue dark:text-white group-hover:text-xorange transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3">{achievement.description}</p>
                
                {achievement.subtitle && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">({achievement.subtitle})</p>
                )}
                
                <div className="flex items-center justify-center space-x-2 mt-2">
                  {achievement.badge && (
                    <Badge variant={
                      achievement.badge === 'Gold' ? "default" : 
                      achievement.badge === 'Silver' ? "secondary" : "outline"
                    } 
                    className={
                      achievement.badge === 'Gold' ? "bg-yellow-500" : 
                      achievement.badge === 'Silver' ? "bg-gray-400" : 
                      achievement.badge === 'Bronze' ? "bg-amber-700" : ""
                    }>
                      {achievement.badge}
                    </Badge>
                  )}
                  
                  {achievement.flags && achievement.flags.map((flag, i) => (
                    <span key={i} className="text-2xl" role="img" aria-label="Country flag">
                      {flag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
