'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function LegalServicesPage() {
  const t = useTranslations('LegalServicesPage');
  const serviceIds = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">{t('heading')}</h2>
        <p className="text-muted-foreground mt-4">
          {t('description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {serviceIds.map((id, idx) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card className="relative overflow-hidden h-full border border-border/40 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-b from-background to-muted/10 backdrop-blur rounded-xl">
              <CardHeader>
                <CardTitle>
                  {t(`service${id}_title`)}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-4 h-full">
                <p className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-xl w-fit mt-auto">
                  {t(`service${id}_price`)}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold">
          {t('call_heading')}
        </h3>
        <p className="text-muted-foreground mt-2">
          {t('call_subheading')}
        </p>
        <Button
          className="mt-4 px-8 py-4 text-lg rounded-lg shadow-lg cursor-pointer"
          onClick={() => (window.location.href = '/contact-us')}
        >
          {t('call_button')}
        </Button>
      </motion.div>
    </section>
  );
}
