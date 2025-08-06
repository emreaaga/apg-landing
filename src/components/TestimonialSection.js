'use client';

import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const TestimonialSection = () => {
  const t = useTranslations('TestimonialSection');
  const ids = [1, 2, 3, 4, 5, 6];
  const rating = 5;

  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            {t('badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ids.map((i, idx) => {
            const quote = t(`testimonial${i}_quote`);
            const author = t(`testimonial${i}_author`);
            const role = t(`testimonial${i}_role`);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-4">
                      {Array(rating)
                        .fill(0)
                        .map((_, j) => (
                          <Star
                            key={j}
                            className="size-4 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                    </div>
                    <p className="text-lg mb-6 flex-grow">{quote}</p>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                      <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                        {author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{author}</p>
                        <p className="text-sm text-muted-foreground">{role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
