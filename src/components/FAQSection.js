"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
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
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Найдите ответы на популярные вопросы о нашей платформе.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Как начать работу с платформой?",
                answer:
                  "Просто оставьте заявку, выбрав нужную услугу. Мы подберем специалиста и оформим договор в течение одного рабочего дня. Никаких предварительных платежей не требуется.",
              },
              {
                question: "Могу ли я поменять специалиста?",
                answer:
                  "Да, если специалист вас не устроит, мы оперативно подберем другого профессионала, подходящего под ваши задачи, без дополнительных затрат.",
              },
              {
                question: "Сколько специалистов я могу нанять?",
                answer:
                  "Вы можете нанять столько специалистов, сколько нужно для вашего проекта. Мы предлагаем как разовые услуги, так и долгосрочное сотрудничество без ограничений.",
              },
              {
                question: "Есть ли скидки для малого бизнеса?",
                answer:
                  "Да, мы предоставляем специальные условия для малого бизнеса и стартапов. Свяжитесь с нашей командой для получения подробной информации.",
              },
              {
                question: "Как обеспечивается качество услуг?",
                answer:
                  "Мы работаем только с проверенными специалистами, прошедшими нашу верификацию. Также мы контролируем выполнение задач и предоставляем гарантию на результат.",
              },
              {
                question: "Какую поддержку вы предоставляете?",
                answer:
                  "Мы предлагаем поддержку 24/7 по электронной почте и телефону для всех клиентов. Также у нас есть база знаний и чат для оперативной помощи на любом этапе.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem value={`item-${i}`} className="">
                  <AccordionTrigger className="text-left font-medium text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;