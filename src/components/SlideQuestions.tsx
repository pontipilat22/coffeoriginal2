import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Database, CreditCard, MessageSquare, ShieldAlert, AppWindow, ArrowRight } from "lucide-react";

interface QuestionItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  impact: "cost" | "timeline" | "critical";
  impactText: string;
  shortDesc: string;
  fullDetails: string;
  options: string[];
}

export default function SlideQuestions() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const questions: QuestionItem[] = [
    {
      id: 1,
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      title: "Интеграция с учетными кассовыми системами (например, IIKO / r_keeper)",
      impact: "cost",
      impactText: "Влияет на стоимость (+15-20%)",
      shortDesc: "Необходим ли автоматический обмен данными с учетной системой (iiko, r_keeper и др.)?",
      fullDetails: "В текущем ТКП заложена автономная панель управления франчайзи и планшет бариста. Прямая интеграция с кассовыми системами (например, IIKO или r_keeper) потребует разработки кастомного API-коннектора для синхронизации номенклатуры меню, стоп-листов и проведения транзакций. Это может скорректировать сметную стоимость и сроки реализации.",
      options: [
        "Автономная система (база Supabase + веб-панель бариста) — как заложено в ТКП",
        "Интеграция с учетной системой (например, IIKO)",
        "Интеграция с учетной системой (например, r_keeper)",
        "Интеграция с другой учетной системой по API заказчика"
      ]
    },
    {
      id: 2,
      icon: <CreditCard className="w-5 h-5 text-emerald-400" />,
      title: "Kaspi Pay и альтернативные эквайринги",
      impact: "critical",
      impactText: "Критично для архитектуры",
      shortDesc: "Наличие зарегистрированного мерчанта в Kaspi Pay для работы по Deep Links.",
      fullDetails: "Для интеграции оплаты через Kaspi Pay (переход по диплинку в приложение Kaspi.kz) требуется официальное одобрение от Kaspi и наличие юрлица в Казахстане с открытым API. Будет ли Kaspi основным методом оплаты, или необходимо подключить Freedom Pay / Cloudpayments для приема карт Visa/Mastercard других банков?",
      options: [
        "Kaspi Pay (Deep Links) как приоритетный способ оплаты",
        "Freedom Pay / Cloudpayments (эквайринг любых карт Visa/Mastercard)",
        "Комбинированный вариант (Kaspi Pay + Freedom Pay)",
        "Оплата только на кассе при получении (Kaspi QR / Наличные)"
      ]
    },
    {
      id: 3,
      icon: <MessageSquare className="w-5 h-5 text-amber-400" />,
      title: "Провайдер SMS-авторизации и уведомлений",
      impact: "timeline",
      impactText: "Влияет на сроки настройки",
      shortDesc: "Выбор СМС-шлюза для регистрации гостей и каналы отправки кодов.",
      fullDetails: "Для входа в приложение по номеру телефона отправляется 4-значный код безопасности. Нам нужно определить шлюз для Казахстана (например, SMS-Центр, Mobizon, или локальный телеком). Также важно решить, рассматривается ли вход через мессенджеры (WhatsApp / Telegram) для снижения стоимости одного сообщения.",
      options: [
        "Классический СМС-шлюз (SMS-Центр / Mobizon)",
        "Интеграция авторизации через WhatsApp Business API (дешевле при больших объемах)",
        "Авторизация через Telegram-бота (бесплатные сообщения)",
        "Двухфакторная авторизация через Firebase / Supabase Auth"
      ]
    },
    {
      id: 4,
      icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
      title: "Правила программы лояльности и антифрод подписок",
      impact: "critical",
      impactText: "Влияет на логику бэкенда",
      shortDesc: "Параметры ограничений для абонементов и списание бонусов.",
      fullDetails: "Для абонементов Standard/Silver/Gold заложен лимит повторного заказа (1 чашка в 45 минут) во избежание передачи одного аккаунта нескольким лицам. Необходимо утвердить этот интервал, а также правила: сгорает ли чашка, если заказ был оформлен, но клиент не пришел за ним в течение 30 минут?",
      options: [
        "45 минут интервал + автоматическое сгорание невостребованного заказа (ТКП)",
        "30 минут интервал, без жесткого сгорания лимита",
        "Без интервала контроля фрода (высокий риск злоупотреблений)",
        "Сгорание чашки только в случае неявки до закрытия смены"
      ]
    },
    {
      id: 5,
      icon: <AppWindow className="w-5 h-5 text-purple-400" />,
      title: "Аккаунты разработчиков для публикации в сторы",
      impact: "timeline",
      impactText: "Критично для даты релиза",
      shortDesc: "Регистрация корпоративных аккаунтов Apple Developer и Google Play.",
      fullDetails: "Для релиза приложения под брендом CoffeOriginal необходимо зарегистрировать учетные записи разработчика. Для Apple Developer Account юридическому лицу требуется международный идентификатор D-U-N-S, получение которого занимает от 5 до 14 рабочих дней. Будем ли мы готовить аккаунты параллельно старту разработки?",
      options: [
        "У нас есть готовые аккаунты разработчика Apple и Google",
        "Требуется помощь в регистрации и получении D-U-N-S кода для ТОО",
        "Публикация на аккаунте разработчика исполнителя (не рекомендуется для бренда)",
        "Планируем зарегистрировать самостоятельно в процессе разработки"
      ]
    }
  ];

  const getImpactBadgeClass = (impact: QuestionItem["impact"]) => {
    switch (impact) {
      case "cost":
        return "bg-indigo-950/50 text-indigo-300 border-indigo-900/60";
      case "timeline":
        return "bg-amber-950/50 text-amber-300 border-amber-900/60";
      case "critical":
        return "bg-rose-950/50 text-rose-300 border-rose-900/60";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-light text-white uppercase tracking-tight flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#D4A373]"></span>
          Вопросы заказчику для согласования ТЗ
        </h2>
        <p className="text-sm text-[#8A8A8E]">
          Для перехода к финальному договору и точной фиксации сметы, пожалуйста, ознакомьтесь с ключевыми техническими развилками.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left accordion list */}
        <div className="lg:col-span-8 space-y-3">
          {questions.map((q) => {
            const isExpanded = expandedId === q.id;
            return (
              <div
                key={q.id}
                className={`border rounded-2xl transition duration-200 text-left overflow-hidden ${
                  isExpanded 
                    ? "bg-[#141417] border-[#D4A373]" 
                    : "bg-[#101012] border-[#2A2A2E] hover:border-[#3A3A3E]"
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="w-full p-4 flex items-center justify-between gap-4 cursor-pointer text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-black/40 border border-[#2A2A2E]`}>
                      {q.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">{q.title}</h4>
                      <span className="text-[10px] text-[#8A8A8E] mt-0.5 block">{q.shortDesc}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${getImpactBadgeClass(q.impact)}`}>
                      {q.impactText.split(" ")[0]}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-[#8A8A8E]" /> : <ChevronDown className="w-4 h-4 text-[#8A8A8E]" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#2A2A2E]/50 bg-black/20 space-y-4">
                    <p className="text-xs text-[#8A8A8E] leading-relaxed">
                      {q.fullDetails}
                    </p>
                    
                    <div className="space-y-2">
                      <span className="block text-[9px] uppercase font-mono text-[#D4A373] tracking-wider font-bold">Варианты решений / Выбор:</span>
                      <div className="grid grid-cols-1 gap-2">
                        {q.options.map((opt, idx) => (
                          <div 
                            key={idx} 
                            className="p-2.5 rounded-xl border border-[#2A2A2E] bg-[#101012] text-xs text-[#E0E0E0] hover:border-[#D4A373]/40 transition flex items-center gap-2"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#1A1A1E] border border-[#2A2A2E] flex items-center justify-center text-[10px] text-[#D4A373] font-bold font-mono">
                              {idx + 1}
                            </span>
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4">
          <div className="bg-[#101012] border border-[#2A2A2E] p-5 rounded-3xl text-left space-y-4 shadow-sm flex-1">
            <div className="flex items-center gap-2 text-[#D4A373]">
              <HelpCircle className="w-5 h-5" />
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Значение выбора</h4>
            </div>
            
            <p className="text-xs text-[#8A8A8E] leading-relaxed">
              Ответы на данные вопросы позволят сформировать **Приложение №1 (Техническое задание)** к договору разработки.
            </p>
            <p className="text-xs text-[#8A8A8E] leading-relaxed">
              В случае выбора базовых вариантов (автономная панель управления, Kaspi диплинки, СМС-авторизация), бюджет остается в рамках озвученных **6 780 000 ₸**.
            </p>
            
            <div className="pt-3 border-t border-[#2A2A2E] space-y-2.5">
              <span className="text-[9px] text-[#D4A373] font-mono block uppercase tracking-wider font-bold">Что делать дальше?</span>
              <div className="text-[11px] text-[#8A8A8E] flex gap-2">
                <ArrowRight className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Обдумать эти вопросы для последующего обсуждения на встрече (если в целом условия ТКП устраивают).</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
