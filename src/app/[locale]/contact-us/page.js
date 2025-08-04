"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 bg-muted/30 dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Подберём специалиста под ваш запрос
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Заполните форму — наш менеджер свяжется с вами и уточнит детали. Или напишите нам напрямую.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-muted p-8 rounded-xl shadow-md border"
        >
          <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Ваше имя"
              className="p-3 rounded-lg h-12"
            />
            <Input
              type="email"
              placeholder="Email или мессенджер"
              className="p-3 rounded-lg h-12"
            />
            <Textarea
              placeholder="Опишите, кого ищете или какая задача стоит"
              className="p-3 rounded-lg h-28"
              rows={12}
              cols={20}
            />
            <Button className="w-full flex py-6 text-base items-center gap-2 cursor-pointer">
              <Send size={20} /> Отправить заявку
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border dark:bg-neutral-800 p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6">Контакты</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="size-6" />
              <p>apg-company@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-6" />
              <p>+998 99 615 08 08</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-6" />
              <p>Ташкент, IT-парк</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
