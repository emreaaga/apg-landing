'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function HrServicesPage() {
  const t = useTranslations('HrServicesPage');

  const serviceIds = [1, 2, 3, 4, 5];

  const getFeatures = (id) => {
    try {
      const raw = t.raw(`service${id}_features`);
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  };

  return (
    <section className="relative w-full py-16 md:py-20">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {t('heading')}
        </h1>
        <p className="text-muted-foreground mt-4 md:text-lg">
          {t('description')}
        </p>
      </div>

      {/* Карточки услуг */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] w-full px-6 mx-auto mt-10">
        {serviceIds.map((id, idx) => {
          const title = t(`service${id}_title`);
          const price = t(`service${id}_price`);
          const features = getFeatures(id);

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <Card className="relative h-full rounded-2xl bg-background/80 backdrop-blur border border-border/40 shadow-sm hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 h-full pt-0">
                  <ul className="space-y-2">
                    {features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-foreground/80"
                      >
                        <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary font-semibold px-2.5 py-1 text-xs leading-none">
                      {price}
                    </span>
                    <Button asChild size="sm" className="rounded-lg cursor-pointer">
                      <Link
                        href={`/contact-us?service=${encodeURIComponent(title)}`}
                      >
                        {t('plan_cta')}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center max-w-2xl mx-auto my-10 px-6">
        <h3 className="text-2xl font-bold mb-3">{t('call_heading')}</h3>
        <p className="text-muted-foreground mb-5">{t('call_subheading')}</p>
        <Button asChild className="cursor-pointer px-7 py-5 rounded-xl">
          <Link href="/contact-us">{t('call_button')}</Link>
        </Button>
      </div>
    </section>
  );
}
