
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import Link from "next/link";

const specialists = [
  {
    name: "Анна Коваленко",
    role: "Бухгалтер, 10+ лет опыта",
    description:
      "Специалист по ведению бухгалтерского учета и налоговой отчетности для малого и среднего бизнеса.",
  },
  {
    name: "Дмитрий Соколов",
    role: "Веб-разработчик, Full-Stack",
    description:
      "Создает современные веб-приложения с использованием React, Node.js и других технологий.",
  },
  {
    name: "Екатерина Морозова",
    role: "Юрист по корпоративному праву",
    description:
      "Помогает с составлением договоров, регистрацией компаний и юридическим сопровождением.",
  },
  {
    name: "Иван Петров",
    role: "Маркетолог, Digital-стратег",
    description:
      "Разрабатывает эффективные маркетинговые кампании и стратегии продвижения в digital.",
  },
  {
    name: "Мария Лебедева",
    role: "Дизайнер UX/UI",
    description:
      "Создает интуитивно понятные интерфейсы и привлекательный дизайн для веб и мобильных приложений.",
  },
  {
    name: "Алексей Иванов",
    role: "ИТ-консультант",
    description:
      "Оптимизирует ИТ-процессы и помогает внедрять современные технологии в бизнес.",
  },
];

export default function SpecialistsPage() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Наши специалисты</h2>
        <p className="text-muted-foreground mt-4">
          Познакомьтесь с профессионалами, готовыми решить ваши задачи — от бухгалтерии до разработки.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {specialists.map((specialist, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between  border border-border/40 shadow-lg relative">
              <CardContent className="flex flex-col space-y-2">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback>{specialist.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-semibold flex items-center gap-1">
                      {specialist.name}
                      <BadgeCheckIcon className="text-blue-700 w-4 h-4" />
                    </h3>

                    <Badge variant="secondary" className="w-fit mt-2">
                      {specialist.role}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mt-2">{specialist.description}</p>
              </CardContent>

            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h3 className="text-2xl font-bold">Найдите своего специалиста</h3>
        <p className="text-muted-foreground mt-2">
          Начните работу с профессионалами уже сегодня!
        </p>
        <Link href="/contact-us" passHref>
          <Button className="mt-4 px-8 py-4 text-lg rounded-lg shadow-lg cursor-pointer">
            Подобрать специалиста
          </Button>
        </Link>

      </motion.div>
    </section>
  );
}
