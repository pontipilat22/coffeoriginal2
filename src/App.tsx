/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import SlideIntro from "./components/SlideIntro";
import SlidePricing from "./components/SlidePricing";
import SlideSpecs from "./components/SlideSpecs";
import SlideQuestions from "./components/SlideQuestions";
import { 
  Coffee, ChevronLeft, ChevronRight, DollarSign, ListTodo, 
  BookOpen, Clock, HardDrive, HelpCircle
} from "lucide-react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    { title: "Введение", icon: <BookOpen className="w-4 h-4" /> },
    { title: "Смета и Сроки", icon: <DollarSign className="w-4 h-4" /> },
    { title: "Техника / Стек", icon: <HardDrive className="w-4 h-4" /> },
    { title: "Вопросы заказчику", icon: <HelpCircle className="w-4 h-4 text-[#D4A373]" /> }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="h-screen max-h-screen bg-[#0A0A0B] text-[#E0E0E0] flex flex-col justify-between p-3 sm:p-4 md:p-6 font-sans overflow-hidden">
      
      {/* Upper Brand / Navigation Header */}
      <header className="w-full max-w-7xl mx-auto mb-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-[#141417] border border-[#2A2A2E] p-4 rounded-3xl shadow-sm shrink-0">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#1A1A1E] text-[#D4A373] flex items-center justify-center font-bold text-lg border border-[#2A2A2E] shadow-md">
            CO
          </div>
          <div>
            <h1 className="text-base font-light tracking-tight text-white uppercase font-display">
              COFFEORIGINAL <span className="text-[#D4A373] text-xs font-semibold uppercase tracking-widest ml-1 font-sans">ТКП</span>
            </h1>
            <span className="block text-[10px] text-[#8A8A8E] font-medium uppercase tracking-wider">
              Разработчик: Заруцкий Е.О. • Версия: 1.0D
            </span>
          </div>
        </div>

        {/* Deck/Progress Menu Indicator */}
        <nav className="flex flex-wrap gap-1.5 p-1 bg-[#0A0A0B] rounded-xl border border-[#2A2A2E]">
          {slides.map((slide, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition cursor-pointer ${
                  isActive 
                    ? "bg-[#D4A373] text-black shadow-sm font-bold transform scale-102" 
                    : "text-[#8A8A8E] hover:bg-[#1A1A1E] hover:text-white"
                }`}
              >
                {slide.icon}
                <span>{slide.title}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* Primary Slide Display Sandbox Grid */}
      <main className="flex-1 min-h-0 w-full max-w-7xl mx-auto flex flex-col py-1">
        <div className="flex-1 min-h-0 bg-[#141417] rounded-[32px] p-5 sm:p-6 md:p-8 shadow-lg border border-[#2A2A2E] flex flex-col justify-between relative">
          
          {/* Active component load - scrollable internally if content overflows */}
          <div className="flex-1 min-h-0 overflow-y-auto pr-1">
            {currentSlide === 0 && <SlideIntro onNext={handleNext} />}
            {currentSlide === 1 && <SlidePricing />}
            {currentSlide === 2 && <SlideSpecs />}
            {currentSlide === 3 && <SlideQuestions />}
          </div>

          {/* Lower Slider Buttons Controls */}
          <div className="mt-4 pt-4 border-t border-[#2A2A2E] flex items-center justify-between gap-4 shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold border transition cursor-pointer select-none ${
                currentSlide === 0 
                  ? "border-[#1A1A1E] text-[#4A4A4E] opacity-30 pointer-events-none" 
                  : "border-[#2A2A2E] text-[#8A8A8E] bg-[#101012] hover:bg-[#1A1A1E] hover:text-white"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Предыдущий
            </button>
            
            <div className="text-[11px] font-bold text-[#8A8A8E] font-mono tracking-wider">
              {currentSlide + 1} / {slides.length}
            </div>

            <button
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition cursor-pointer select-none ${
                currentSlide === slides.length - 1
                  ? "bg-[#1A1A1E] border border-[#2A2A2E] text-[#4A4A4E] pointer-events-none"
                  : "bg-[#D4A373] hover:bg-[#c29262] text-black font-semibold"
              }`}
            >
              Следующий
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>

      {/* Corporate Tender Page Footer */}
      <footer className="w-full max-w-7xl mx-auto mt-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase font-semibold text-[#8A8A8E] text-center sm:text-left tracking-wider shrink-0">
        <div className="flex items-center gap-1.5 justify-center sm:justify-start">
          <Coffee className="w-4 h-4 text-[#D4A373]" />
          <span>Мобильное приложение CoffeOriginal ТКП • © Zarutskiy E.O. 2026</span>
        </div>
        <div className="flex gap-4">
          <span>Статус: <strong className="text-white font-bold ml-1">Черновик</strong></span>
        </div>
      </footer>
    </div>
  );
}
