import { Users } from "lucide-react";
import { Layers } from "lucide-react";
import { Star } from "lucide-react";
import { Shield } from "lucide-react";
import { BarChart } from "lucide-react";
import { Zap } from "lucide-react";

const features = [
  {
    title: "Быстрый подбор специалистов",
    description:
      "Найдите профессионалов для любой задачи — от бухгалтерии до разработки — за несколько минут.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Прозрачные договоры",
    description:
      "Все сделки оформляются через нашу платформу с четкими условиями и гарантиями.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Проверенные исполнители",
    description:
      "Работаем только с квалифицированными специалистами, прошедшими нашу проверку.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Контроль качества",
    description:
      "Следим за выполнением задач и обеспечиваем высокий уровень сервиса.",
    icon: <Star className="size-5" />,
  },
  {
    title: "Гибкие решения",
    description:
      "Выбирайте услуги под ваши задачи: разовые проекты или долгосрочное сотрудничество.",
    icon: <Layers className="size-5" />,
  },
  {
    title: "Поддержка 24/7",
    description:
      "Наша команда всегда на связи, чтобы помочь вам на любом этапе.",
    icon: <BarChart className="size-5" />,
  },
];

export default features;