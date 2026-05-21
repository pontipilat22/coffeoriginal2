import React from "react";
import { INITIAL_PHASES } from "../types";
import { Clock, Award, ShieldCheck, AlertCircle } from "lucide-react";

export default function SlidePricing() {
  // Helper to format currency
  const formatKZT = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "KZT",
      maximumFractionDigits: 0
    }).format(amount).replace("KZT", "₸");
  };

  // Fixed static values matching the proposal
  const totalCostText = "6 780 000 ₸";

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-light text-white uppercase tracking-tight flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#D4A373]"></span>
            Стоимость и Сметный План
          </h2>
          <p className="text-sm text-[#8A8A8E]">
            Оценка стоимости и оптимизированный график под сжатые сроки в 10 недель (параллельная разработка по запросу заказчика).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Main Phases List */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="overflow-hidden bg-[#101012] border border-[#2A2A2E] rounded-2xl shadow-sm">
            <div className="p-4 bg-[#1A1A1E] border-b border-[#2A2A2E] hidden sm:grid grid-cols-12 gap-2 text-xs font-mono font-bold text-[#8A8A8E] uppercase">
              <span className="col-span-6 md:col-span-7">Этап работ</span>
              <span className="col-span-3 md:col-span-2 text-center">Сроки</span>
              <span className="col-span-3 md:col-span-3 text-right">Стоимость</span>
            </div>
            
            <div className="divide-y divide-[#2A2A2E]">
              {INITIAL_PHASES.map((p) => {
                // Formatting custom duration text ranges since it's static now
                let durationText = `${p.durationWeeks} нед.`;
                let isParallel = false;
                if (p.id === 2) durationText = "8–9 нед.";
                if (p.id === 3) {
                  durationText = "7–8 нед.";
                  isParallel = true;
                }
                if (p.id === 4) {
                  durationText = "2–3 нед.";
                  isParallel = true;
                }

                return (
                  <div key={p.id} className="p-4 flex flex-col gap-2.5 sm:grid sm:grid-cols-12 sm:gap-2 sm:items-center hover:bg-[#1A1A1E]/20 transition text-left">
                    {/* Phase details */}
                    <div className="sm:col-span-6 md:col-span-7 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-[#D4A373] bg-[#D4A373]/10 rounded-full shrink-0">
                          {p.id}
                        </span>
                        <h4 className="text-sm font-semibold text-white leading-tight">
                          {p.title}
                        </h4>
                        {isParallel && (
                          <span className="inline-flex items-center bg-[#D4A373]/10 border border-[#D4A373]/20 text-[#D4A373] text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider font-semibold">
                            Параллельный этап
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#8A8A8E] leading-relaxed">
                        Конечный результат: <span className="text-[#E0E0E0]">{p.result}</span>
                      </p>
                    </div>

                    {/* Duration & Cost inline on mobile */}
                    <div className="flex justify-between items-center sm:contents border-t border-[#2A2A2E]/30 pt-2 sm:pt-0 mt-1 sm:mt-0">
                      {/* Duration */}
                      <div className="sm:col-span-3 md:col-span-2 sm:text-center flex sm:block items-center gap-1.5">
                        <span className="text-[10px] text-[#8A8A8E] font-mono uppercase sm:hidden">Срок:</span>
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {durationText}
                        </span>
                      </div>

                      {/* Cost */}
                      <div className="sm:col-span-3 md:col-span-3 sm:text-right flex sm:block items-center gap-1.5">
                        <span className="text-[10px] text-[#8A8A8E] font-mono uppercase sm:hidden">Стоимость:</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-[#D4A373] sm:text-white">
                          {formatKZT(p.costTenge)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Explanatory Terms Tip */}
          <div className="bg-[#101012] border border-[#2A2A2E] rounded-xl p-4 flex gap-3 items-start text-left">
            <AlertCircle className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
            <div className="text-xs text-[#8A8A8E]">
              <span className="font-bold text-white block mb-1 uppercase tracking-wide">Примечание к смете</span>
              Все работы выполняются последовательно-параллельно в соответствии с согласованным техническим заданием.
            </div>
          </div>
        </div>

        {/* Dynamic Recalculator Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#101012] text-[#E0E0E0] p-6 border border-[#2A2A2E] rounded-3xl space-y-6 shadow-sm relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A373] opacity-5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono border-b border-[#2A2A2E] pb-3 text-left">
                Итоговый расчет ТКП
              </h3>

              {/* Calculations metrics */}
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#8A8A8E] flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Общий срок разработки
                  </span>
                  <div className="text-right">
                    <span className="line-through text-[#8A8A8E] text-xs mr-2">17–19 нед.</span>
                    <span className="font-bold text-[#D4A373]">10 недель (2.5 мес.)*</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#8A8A8E] flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Готовое приложение
                  </span>
                  <span className="font-semibold text-emerald-400">ПОД КЛЮЧ</span>
                </div>

                <hr className="border-[#2A2A2E]" />

                {/* Total display */}
                <div>
                  <span className="text-xs text-[#8A8A8E] uppercase block font-mono">Общая стоимость внедрения</span>
                  <div className="text-3xl font-bold font-mono text-[#D4A373] mt-1">
                    {totalCostText}
                  </div>
                  <p className="text-[10px] text-[#8A8A8E] mt-2 leading-snug">
                    *Включает в себя проектирование, дизайн, программирование бэкенда и фронтенда, отладку и публикацию в App Store и Google Play.
                  </p>
                  <p className="text-[10px] text-amber-400/90 mt-1.5 leading-snug">
                    *Срок сокращен до 10 недель (2.5 мес.) за счет параллельного ведения дизайна, бэкенда и мобильной разработки по запросу заказчика.
                  </p>
                </div>
              </div>
            </div>
            

          </div>
        </div>

      </div>
    </div>
  );
}
