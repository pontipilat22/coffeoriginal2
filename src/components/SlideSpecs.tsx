import React, { useState } from "react";
import { Smartphone, Database, MapPin, CreditCard, Send, Check } from "lucide-react";

export default function SlideSpecs() {
  const [activeTab, setActiveTab] = useState<"client" | "backend" | "maps" | "payments">("client");

  const techStack = {
    client: {
      title: "Клиентский софт: React Native (Expo)",
      subtitle: "Единая кодовая база для быстрого развертывания",
      icon: <Smartphone className="w-5 h-5 text-amber-600" />,
      bullets: [
        "Expo Application Framework: Бесшовная компиляция нативных модулей Swift/Kotlin.",
        "Кроссплатформенность: Экономия бюджета в 1.8–2 раза по сравнению с раздельной нативной Swift/Kotlin разработкой.",
        "Горячее обновление пакетов (OTA updates): Исправление мелких опечаток в меню или интерфейсе в обход недельной модерации App Store/Google Play.",
        "Expo Push Notifications: Встроенная шина для пуш-уведомлений бариста и клиентов на кассе (трансляция смены статуса 'Готовится ➔ Готов')."
      ],
      details: "Для CoffeOriginal это означает молниеносную реакцию приложения и плавную нативную прокрутку каруселей кофе с десертами даже на бюджетных Android смартфонах."
    },
    backend: {
      title: "Бессерверный Бэкенд: Supabase (PostgreSQL)",
      subtitle: "100% Serverless архитектура без платных VPS/Railway серверов",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      bullets: [
        "Управляемый PostgreSQL: Надежные ACID-транзакции оплаты, безопасность заказов.",
        "Real-time subscriptions: Мгновенное обновление заказов у бариста по WebSocket без написания своего сокет-сервера.",
        "Row Level Security (RLS): Безопасность на уровне БД. Бариста видит только заказы своего филиала.",
        "Supabase Edge Functions: Бессерверные функции на TypeScript для приема платежных коллбэков от эквайринга.",
        "Хостинг веб-панели на Vercel: Абсолютно бесплатное и масштабируемое размещение статического фронтенда админки."
      ],
      details: "Supabase позволяет развернуть полноценный защищенный бэкенд без аренды серверов на Railway. Вся бизнес-логика выполняется в базе данных и легковесных Edge Functions."
    },
    maps: {
      title: "Картография и Локатор: 2ГИС Mobile SDK",
      subtitle: "Максимальная точность карт для рынка Казахстана",
      icon: <MapPin className="w-5 h-5 text-indigo-600" />,
      bullets: [
        "Оптимальный выбор для РК: Детализация адресов и подъездов в Бишкеке, Алматы, Астане на уровне выше зарубежных аналогов.",
        "Ближайший филиал по GPS: Автоматический пеленг геопозиции клиента, расчет дистанции до близлежащей кофейни CoffeOriginal.",
        "Ручной выбор филиала: Удобная интерактивная карта с фильтрами по времени работы и наличию парковки.",
        "Динамические цены: Перестроение прайс-листа и стоп-листов ингредиентов в корзине в зависимости от выбранного филиала."
      ],
      details: "Интеграция 2ГИС Mobile SDK дает нативный плавный скроллинг карты внутри приложения без урезания графических ядер, в отличие от простых webview-карт."
    },
    payments: {
      title: "Платёжные Шлюзы и Авторизация",
      subtitle: "Deep-linking в Kaspi и поддержка эквайрингов Visa/MC",
      icon: <CreditCard className="w-5 h-5 text-purple-600" />,
      bullets: [
        "Kaspi Pay Integration: Специфический Deep Link переход в Kaspi.kz по уникальной платежной сигнатуре. Клиент оплачивает в родном приложении Kaspi и возвращается обратно.",
        "Freedom Pay / Cloudpayments: Агрегированные шлюзы приема Visa/Mastercard (Apple Pay, Google Pay) со встроенным подтверждением 3D Secure.",
        "Оплата на кассе / Списание подписки: Мгновенное гашение лимитов абонемента с проверкой антифрода (1 раз в 45 минут на напиток).",
        "SMS-Gate RK: Стыковка с СМС-центром Казахстана для авторизации. Код верификации передается в защищенном HTTPS-пакете за доли секунды."
      ],
      details: "Бесшовный Kaspi эквайринг по ссылкам позволяет экономить до 1.5% комиссии на транзакциях по сравнению со стандартными картами."
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-light text-white uppercase tracking-tight flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#D4A373]"></span>
          Технологический Стек и Архитектура ТЗ
        </h2>
        <p className="text-sm text-[#8A8A8E]">
          Спецификация технических решений, разработанных под высокую нагрузку и быструю адаптацию. Выберите вкладку для детального анализа модуля.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Navigation Tabs (Grid on mobile, vertical list on desktop) */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-2 py-1">
          <button
            onClick={() => setActiveTab("client")}
            className={`p-3 rounded-xl text-left border transition flex items-center gap-3 cursor-pointer ${
              activeTab === "client"
                ? "bg-[#D4A373] border-[#D4A373] text-black shadow-sm font-bold"
                : "bg-[#101012] border-[#2A2A2E] text-[#8A8A8E] hover:bg-[#1A1A1E] hover:text-white"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeTab === "client" ? "bg-black/20 text-[#D4A373]" : "bg-[#1A1A1E] text-[#8A8A8E]"}`}>
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-semibold">Мобильный Клиент</span>
              <span className="text-[9px] opacity-80 font-mono">React Native / Expo</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("backend")}
            className={`p-3 rounded-xl text-left border transition flex items-center gap-3 cursor-pointer ${
              activeTab === "backend"
                ? "bg-[#D4A373] border-[#D4A373] text-black shadow-sm font-bold"
                : "bg-[#101012] border-[#2A2A2E] text-[#8A8A8E] hover:bg-[#1A1A1E] hover:text-white"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeTab === "backend" ? "bg-black/20 text-[#D4A373]" : "bg-[#1A1A1E] text-[#8A8A8E]"}`}>
              <Database className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-semibold">Бэкенд & Сервер</span>
              <span className="text-[9px] opacity-80 font-mono">Supabase / PostgreSQL</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("maps")}
            className={`p-3 rounded-xl text-left border transition flex items-center gap-3 cursor-pointer ${
              activeTab === "maps"
                ? "bg-[#D4A373] border-[#D4A373] text-black shadow-sm font-bold"
                : "bg-[#101012] border-[#2A2A2E] text-[#8A8A8E] hover:bg-[#1A1A1E] hover:text-white"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeTab === "maps" ? "bg-black/20 text-[#D4A373]" : "bg-[#1A1A1E] text-[#8A8A8E]"}`}>
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-semibold">Карты и Геолокация</span>
              <span className="text-[9px] opacity-80 font-mono">2ГИС Mobile SDK</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("payments")}
            className={`p-3 rounded-xl text-left border transition flex items-center gap-3 cursor-pointer ${
              activeTab === "payments"
                ? "bg-[#D4A373] border-[#D4A373] text-black shadow-sm font-bold"
                : "bg-[#101012] border-[#2A2A2E] text-[#8A8A8E] hover:bg-[#1A1A1E] hover:text-white"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeTab === "payments" ? "bg-black/20 text-[#D4A373]" : "bg-[#1A1A1E] text-[#8A8A8E]"}`}>
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-semibold">Каспи / Freedom Pay</span>
              <span className="text-[9px] opacity-80 font-mono">СМС, Deep Links, Эквайринг</span>
            </div>
          </button>

          <div className="p-3 bg-amber-950/20 border border-amber-900/30 rounded-xl text-left space-y-1">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">⚠️ Гибкость стека</span>
            <p className="text-[10px] text-[#8A8A8E] leading-normal">
              Архитектура и состав технологий являются предварительными. Отдельные инструменты могут быть скорректированы по результатам обсуждения ТЗ (например, выбор СМС-шлюза, интеграции с IIKO или r_keeper).
            </p>
          </div>
        </div>

        {/* Tab content panel */}
        <div className="lg:col-span-8 bg-[#101012] border border-[#2A2A2E] p-5 sm:p-6 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#2A2A2E]">
              {techStack[activeTab].icon}
              <div>
                <h3 className="text-base font-semibold text-white">
                  {techStack[activeTab].title}
                </h3>
                <span className="text-[11px] text-[#8A8A8E]">
                  {techStack[activeTab].subtitle}
                </span>
              </div>
            </div>

            {/* Bullets matrix */}
            <div className="space-y-2.5">
              {techStack[activeTab].bullets.map((bullet, idx) => {
                const [title, desc] = bullet.split(": ");
                return (
                  <div key={idx} className="flex gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#1A1A1E] border border-[#D4A373]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#D4A373]" />
                    </div>
                    <div className="text-[11px] leading-relaxed text-[#8A8A8E]">
                      <strong className="text-white font-semibold">{title}:</strong> {desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description highlight */}
          <div className="mt-4 pt-3 border-t border-[#2A2A2E] text-[11px] text-[#8A8A8E] bg-[#1A1A1E]/50 -mx-5 -mb-5 p-4 sm:-mx-6 sm:-mb-6">
            <span className="font-bold text-white block mb-0.5 uppercase tracking-wider text-[10px]">Фокус преимущества:</span>
            {techStack[activeTab].details}
          </div>
        </div>

      </div>
    </div>
  );
}
