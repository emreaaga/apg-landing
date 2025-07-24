"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl text-center"
      >
        <h2 className="text-4xl font-bold">Кто мы такие</h2>
        <p className="text-lg text-muted-foreground mt-4">
          Мы — команда разработчиков и дизайнеров, создающая масштабируемые и
          эффективные цифровые решения.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
        {/* Mission */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold">🌍 Наша миссия</h3>
            <p className="text-muted-foreground mt-2">
              Помогаем бизнесам расти с помощью современных технологий и
              удобных цифровых продуктов.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold">🚀 Наше видение</h3>
            <p className="text-muted-foreground mt-2">
              Строим будущее, где бизнес растёт за счёт инноваций и автоматизации.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Values */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
        {[
          {
            title: "✨ Инновации",
            text: "Мы двигаемся вперёд за счёт новых идей и подходов.",
          },
          {
            title: "🛠️ Качество",
            text: "Делаем всё чётко, стабильно и по уму.",
          },
          {
            title: "🤝 Сотрудничество",
            text: "Крутые проекты рождаются в команде.",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-2">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="text-center mt-12 w-full max-w-5xl">
        <h3 className="text-3xl font-bold">💻 Наш стек</h3>
        <p className="text-muted-foreground mt-2">
          Используем проверенные и современные технологии.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Next.js",
            "TailwindCSS",
            "Node.js",
            "MongoDB",
            "TypeScript",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-muted rounded-lg text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="flex flex-col items-center mt-12">
        <h3 className="text-3xl font-bold">🚀 Давайте делать вместе</h3>
        <p className="text-muted-foreground mt-2">
          Свяжитесь с нами — обсудим вашу идею и воплотим её в жизнь.
        </p>
        <Button className="mt-6 rounded-full px-8 py-5 text-lg cursor-pointer group">
          Связаться с нами{" "}
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-all ease-in-out duration-300" />
        </Button>
      </div>
    </section>
  );
}
