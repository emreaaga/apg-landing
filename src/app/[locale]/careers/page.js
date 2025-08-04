"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Rocket, Lightbulb } from "lucide-react";
import FAQSection from "@/components/FAQSection";

const jobs = [
  {
    title: "Senior Full-Stack Developer",
    description:
      "Ищем опытного разработчика React для создания мощных APG-продуктов.",
    location: "Удалённо",
    type: "Частичная занятость",
  },
  {
    title: "Бухгалтер",
    description:
      "Присоединяйся к фин-команде, и принимай заказы.",
    location: "Удалённо",
    type: "Частичная занятость",
  },
  {
    title: "UI/UX Designer",
    description:
      "Создавай удобные интерфейсы и улучшай пользовательский опыт.",
    location: "Гибрид",
    type: "Частичная занятость",
  },
];

const benefits = [
  {
    icon: <Rocket className="size-10 text-primary" />,
    title: "Быстрый рост",
    description: "Работаем в темпе — быстро запускаем, быстро учимся, быстро растём.",
  },
  {
    icon: <Lightbulb className="size-10 text-yellow-400" />,
    title: "Культура идей",
    description: "Поддерживаем инициативу и любим нестандартные решения.",
  },
  {
    icon: <Users className="size-10 text-blue-500" />,
    title: "Командная работа",
    description: "Вместе думаем, вместе делаем, вместе побеждаем.",
  },
  {
    icon: <Briefcase className="size-10 text-green-500" />,
    title: "Карьерный рост",
    description: "Менторство, обучение, прокачка — всё включено.",
  },
];

const CareersPage = () => {
  return (
    <>
      <section className="w-full py-20 px-6 md:px-10 bg-muted/30 dark:bg-black relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Вакансии
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Присоединяйся к нашей APG-команде
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Хочешь менять будущее цифровых продуктов? Мы ищем таких, как ты.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden rounded-xl shadow-lg bg-background dark:bg-muted/10 hover:shadow-xl transition-all">
                <CardContent>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Briefcase className="size-5 text-primary" /> {job.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {job.description}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="size-4" /> {job.location}
                    </span>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-4 w-full cursor-pointer"
                  >
                    Откликнуться
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-20 px-6 md:px-10 dark:from-muted/50 dark:to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Почему стоит работать с нами?
          </h2>
          <p className="mt-3">
            Мы создаём среду, где ценится рост, поддерживается инициатива и важна команда.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-muted/20 p-6 rounded-xl shadow-md border backdrop-blur-md text-center"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-2">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CareersPage;
