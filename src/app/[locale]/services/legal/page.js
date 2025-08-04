"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const legalServices = [
    { title: "Регистрация ООО/ЧП и семейного предприятия", price: "3 000 000 сум" },
    { title: "Регистрация ООО с участием иностранных граждан", price: "5 000 000 сум" },
    { title: "Регистрация ИП ООО/СП ООО с участием иностранных юридических лиц", price: "7 000 000 сум" },
    { title: "Сопровождение нерезидентов в получении ПИНФЛ", price: "1 000 000 сум" },
    { title: "Регистрация Индивидуального Предпринимателя (ЯТТ)", price: "2 000 000 сум" },
    { title: "Смена юридического адреса/наименования предприятий", price: "2 000 000 сум" },
    { title: "Изменение состава учредителей ввод/вывод/продажа долей ООО/СП ООО", price: "5 000 000 сум" },
    { title: "Реорганизация в форме присоединения/слияния", price: "7 000 000 сум" },
    { title: "Сопровождение сделок в нотариусе (документов)", price: "2 000 000 сум" },
    { title: "Претензионная работа", price: "1 500 000 сум" },
    { title: "Содействие в получении разрешения на работу", price: "2 000 000 сум" },
    { title: "Сопровождение кредитных кейсов", price: "2 000 000 сум" },
    { title: "Содействие в получении разрешительных документов (лицензии, сертификаты и т.д.)", price: "3 000 000 сум" },
    { title: "Подготовка и содействие в подаче документов по ликвидации", price: "6 000 000 сум" },
    { title: "Подготовка Решений/протоколов по различным вопросам хоз. деятельности", price: "2 000 000 сум" },
    { title: "Подготовка кадровой документации (трудовой договор, ПВТР, положение о ЗП, штатка)", price: "2 000 000 сум" },
];

export default function LegalServicesPage() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold">Юридические услуги</h2>
                <p className="text-muted-foreground mt-4">
                    Полный спектр юридических услуг для физических и юридических лиц.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
                {legalServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                        <Card className="relative overflow-hidden h-full border border-border/40 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-b from-background to-muted/10 backdrop-blur rounded-xl">
                            <CardHeader>
                                <CardTitle>
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col space-y-4 h-full">
                                <p className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-xl w-fit mt-auto">
                                    {service.price}
                                </p>

                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 text-center"
            >
                <h3 className="text-2xl font-bold">Оставьте заявку и мы свяжемся с вами</h3>
                <p className="text-muted-foreground mt-2">
                    Мы проконсультируем вас и предложим оптимальное решение под вашу ситуацию.
                </p>
                <Button
                    className="mt-4 px-8 py-4 text-lg rounded-lg shadow-lg cursor-pointer"
                    onClick={() => (window.location.href = "/contact-us")}
                >
                    Связаться с нами
                </Button>
            </motion.div>
        </section>
    );
}
