'use client';

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const PricingSection = () => {
  const tAcc = useTranslations("AccountingServicesPage");

  const tariffIds = [1, 2, 3];

  const getIncludes = (id) => {
    try {
      const raw = tAcc.raw(`tariff${id}_includes`);
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  };

  const buildPlans = () =>
    tariffIds.map((id) => ({
      name: tAcc(`tariff${id}_title`),
      price: tAcc(`tariff${id}_price`),
      features: getIncludes(id),
      cta: tAcc(`plan_cta`),
      popular: id === 2,
    }));

  const monthlyPlans = buildPlans();
  const annualPlans = buildPlans();

  return (
    <section id="pricing" className="w-full py-20 md:py-15 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            {tAcc("heading")}
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-sm md:text-lg">
            {tAcc("description")}
          </p>
        </motion.div>
        <div className="mx-auto max-w-[1400px] w-full">
          <Tabs defaultValue="monthly" className="w-full">
            <TabsContent value="monthly">
              <PlanGrid plans={monthlyPlans} periodLabel={tAcc("per_month")} mostPopularLabel={tAcc("most_popular")} />
            </TabsContent>

            <TabsContent value="annually">
              <PlanGrid plans={annualPlans} periodLabel={tAcc("per_month")} mostPopularLabel={tAcc("most_popular")} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

function PlanGrid({ plans, periodLabel, mostPopularLabel }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {plans.map((plan, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Card
            className={`relative overflow-hidden h-full ${
              plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"
            } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-[10px] md:text-xs font-medium rounded-bl-lg">
                {mostPopularLabel}
              </div>
            )}
            <CardContent className="p-5 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold">{plan.name}</h3>

              <div className="flex items-baseline mt-3">
                <span className="text-2xl md:text-3xl font-semibold leading-none tracking-tight break-words">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-1 whitespace-nowrap text-xs md:text-sm">
                  {periodLabel}
                </span>
              </div>

              {plan.description && (
                <p className="text-muted-foreground mt-2 text-xs md:text-sm">
                  {plan.description}
                </p>
              )}

              <ul className="my-4 space-y-2">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <Check className="mr-2 h-3.5 w-3.5 mt-0.5 text-primary" />
                    <span className="text-xs md:text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full mt-auto rounded-full cursor-pointer py-4 text-sm md:text-base ${
                  plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default PricingSection;
