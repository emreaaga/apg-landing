'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BadgeCheckIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SpecialistsPage() {
  const t = useTranslations('SpecialistsPage');
  const ids = [1, 2, 3, 4, 5, 6];
  const heading = t('heading');
  const description = t('description');
  const callHeading = t('call_heading');
  const callDescription = t('call_description');
  const callButton = t('call_button');

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <p className="text-muted-foreground mt-4">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {ids.map((i, idx) => {
          const name = t(`specialist${i}_name`);
          const role = t(`specialist${i}_role`);
          const desc = t(`specialist${i}_description`);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between border border-border/40 shadow-lg relative">
                <CardContent className="flex flex-col space-y-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-left">
                      <h3 className="text-lg font-semibold flex items-center gap-1">
                        {name}
                        <BadgeCheckIcon className="text-blue-700 w-4 h-4" />
                      </h3>
                      <Badge variant="secondary" className="w-fit mt-2">
                        {role}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h3 className="text-2xl font-bold">{callHeading}</h3>
        <p className="text-muted-foreground mt-2">{callDescription}</p>
        <Link href="/contact-us" passHref>
          <Button className="mt-4 px-8 py-4 text-lg rounded-lg shadow-lg cursor-pointer">
            {callButton}
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
