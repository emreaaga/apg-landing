'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { useTranslations } from 'next-intl';

const FAQSection = () => {
  const t = useTranslations('FAQSection');
  const ids = [1, 2, 3, 4, 5, 6];

  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="px-4 md:px-6">
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

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {ids.map((i, idx) => {
              const question = t(`faq${i}_question`);
              const answer   = t(`faq${i}_answer`);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <AccordionItem value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-base">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
