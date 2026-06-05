'use client'

import { useState, useEffect } from 'react'

const schedule = [
  { day: 'Lunes',     morning: '9:00 – 14:00', afternoon: '17:30 – 20:30', dayIndex: 1 },
  { day: 'Martes',    morning: '9:00 – 14:00', afternoon: '17:30 – 20:30', dayIndex: 2 },
  { day: 'Miércoles', morning: '9:00 – 14:00', afternoon: '17:30 – 20:30', dayIndex: 3 },
  { day: 'Jueves',    morning: '9:00 – 14:00', afternoon: '17:30 – 20:30', dayIndex: 4 },
  { day: 'Viernes',   morning: '9:00 – 14:00', afternoon: '17:30 – 20:30', dayIndex: 5 },
  { day: 'Sábado',    morning: '9:00 – 14:00', afternoon: null,             dayIndex: 6 },
  { day: 'Domingo',   morning: null,            afternoon: null,             dayIndex: 0, closed: true },
]

export default function Hours() {
  const [today, setToday] = useState<number | null>(null)

  useEffect(() => {
    setToday(new Date().getDay())
  }, [])

  return (
    <section id="horarios" className="py-24 bg-cream-100">
      <div className="max-w-2xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="section-tag">Cuándo Encontrarnos</p>
          <h2 className="section-title mb-4">Horario de Apertura</h2>
          <div className="h-px w-16 bg-wood-400 mx-auto" />
        </div>

        <div className="border border-cream-400 overflow-hidden">
          {schedule.map((item, index) => {
            const isToday = today === item.dayIndex
            return (
              <div
                key={item.day}
                className={`flex items-center justify-between px-6 py-4 transition-colors ${
                  index !== schedule.length - 1 ? 'border-b border-cream-400' : ''
                } ${
                  isToday
                    ? 'bg-wood-700'
                    : item.closed
                    ? 'bg-cream-200'
                    : 'hover:bg-cream-200'
                }`}
              >
                {/* Día */}
                <div className="flex items-center gap-3 min-w-[120px]">
                  {isToday && (
                    <span className="w-2 h-2 bg-[#25D366] rounded-full flex-shrink-0" />
                  )}
                  <span
                    className={`font-lato font-semibold tracking-wide ${
                      isToday ? 'text-cream-100' : item.closed ? 'text-wood-400' : 'text-wood-800'
                    }`}
                  >
                    {item.day}
                    {isToday && (
                      <span className="ml-2 font-lato text-[10px] tracking-widest uppercase text-wood-300">
                        Hoy
                      </span>
                    )}
                  </span>
                </div>

                {/* Horas */}
                <div className="text-right">
                  {item.closed ? (
                    <span className={`font-lato text-sm italic ${isToday ? 'text-cream-400' : 'text-wood-400'}`}>
                      Cerrado
                    </span>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-end sm:items-center">
                      <span className={`font-lato text-sm ${isToday ? 'text-cream-300' : 'text-wood-600'}`}>
                        {item.morning}
                      </span>
                      {item.afternoon && (
                        <>
                          <span className={`hidden sm:inline font-lato text-xs ${isToday ? 'text-wood-400' : 'text-wood-400'}`}>·</span>
                          <span className={`font-lato text-sm ${isToday ? 'text-cream-300' : 'text-wood-600'}`}>
                            {item.afternoon}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <p className="font-lato text-wood-500 text-sm text-center mt-8">
          También puedes hacer tu pedido por WhatsApp en cualquier momento —{' '}
          <a
            href="https://wa.me/34675628688"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wood-700 font-semibold hover:text-wood-600 transition-colors"
          >
            675 62 86 88
          </a>
        </p>

      </div>
    </section>
  )
}
