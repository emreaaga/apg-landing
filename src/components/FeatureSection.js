'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import features from '@/data/feature.data';
import { Badge } from './ui/badge';

const FeatureSection = ({ container, item }) => {
  // Пространство имён, где лежат переводы:
  const t = useTranslations('features');

  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="px-4 md:px-6">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge variant="secondary">{t('badge')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            {t('description')}
          </p>
        </motion.div>

        {/* Карточки */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.key} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Иконка */}
                  <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  {/* Перевод заголовка */}
                  <h3 className="text-xl font-bold mb-2">
                    {t(`${feature.key}.title`)}
                  </h3>
                  {/* Перевод описания */}
                  <p className="text-muted-foreground">
                    {t(`${feature.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
