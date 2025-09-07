'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import PricingSection from "@/components/PricingSection";
import Link from 'next/link';

export default function AccountingServicesPage() {
    const t = useTranslations('AccountingServicesPage');

    return (
        <>
            <PricingSection />
            <div className="text-center max-w-2xl mx-auto my-5">
                <h3 className="text-2xl font-bold mb-4">{t('call_heading')}</h3>
                <p className="text-muted-foreground mb-6">
                    {t('call_subheading')}
                </p>
                <Button asChild variant="default" className={"cursor-pointer"}>
                    <Link href="/contact-us">
                    {t('call_button')}
                    </Link>
                </Button>
            </div>
        </>
    );
}
