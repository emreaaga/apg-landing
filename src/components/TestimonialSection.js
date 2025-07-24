"use client";
import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
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
            Отзывы
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Нам доверяют клиенты
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Узнайте, что говорят наши клиенты о работе с нашей платформой и специалистами.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "Платформа помогла нам найти отличного бухгалтера за день. Договор заключили быстро, все прозрачно и без лишних хлопот.",
              author: "Анна Смирнова",
              role: "Финансовый директор, TechTrend",
              rating: 5,
            },
            {
              quote:
                "Благодаря платформе мы наняли разработчика для нашего сайта. Качество работы превзошло ожидания, а поддержка была на высоте.",
              author: "Иван Петров",
              role: "Маркетолог, StartUpNow",
              rating: 5,
            },
            {
              quote:
                "Служба поддержки отвечает моментально, а процесс подбора специалистов очень удобный. Теперь все наши задачи решают профессионалы.",
              author: "Екатерина Лебедева",
              role: "Руководитель проектов, GrowthPoint",
              rating: 5,
            },
            {
              quote:
                "Мы пробовали работать напрямую с фрилансерами, но эта платформа упростила все: от подбора до договора. Рекомендую!",
              author: "Дмитрий Козлов",
              role: "Генеральный директор, InnovateRus",
              rating: 5,
            },
            {
              quote:
                "Платформа позволила нам сосредоточиться на бизнесе, а не на поиске специалистов. Все процессы четкие и прозрачные.",
              author: "Мария Иванова",
              role: "HR-директор, RemoteWorks",
              rating: 5,
            },
            {
              quote:
                "Сократили расходы на аутсорсинг на 25% благодаря быстрому подбору специалистов и прозрачным условиям работы.",
              author: "Алексей Соколов",
              role: "Операционный директор, ScaleRus",
              rating: 5,
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, j) => (
                        <Star
                          key={j}
                          className="size-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                  </div>
                  <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                    <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;