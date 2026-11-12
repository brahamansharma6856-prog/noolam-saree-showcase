'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { BOUTIQUES } from '@/data/sarees';
import { X, MapPin, Calendar, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function StoreModal() {
  const { isStoreModalOpen, setIsStoreModalOpen } = useShop();
  const [selectedBoutique, setSelectedBoutique] = useState(BOUTIQUES[0].city);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-11-20');
  const [time, setTime] = useState('11:30 AM');
  const [submitted, setSubmitted] = useState(false);

  if (!isStoreModalOpen) return null;

  const currentBoutique = BOUTIQUES.find((b) => b.city === selectedBoutique) || BOUTIQUES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // keep message visible
    }, 500);
  };

  const handleClose = () => {
    setIsStoreModalOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="fixed inset-0" onClick={handleClose} />

      <div className="relative z-10 bg-[#FAF8F5] rounded-3xl max-w-2xl w-full shadow-2xl border border-amber-500/30 overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#6e1327]" />
            <h3 className="font-serif text-lg font-bold text-stone-900 tracking-wide">
              Reserve a Private Showroom Visit
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              VIP Appointment Confirmed
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              We look forward to welcoming you at our <strong>{currentBoutique.name}</strong> on <strong>{date}</strong> at <strong>{time}</strong>. A dedicated senior bridal draper has been allocated for your visit.
            </p>
            <div className="p-4 bg-white rounded-2xl border border-stone-200 max-w-md mx-auto text-xs text-left space-y-1">
              <p className="font-semibold text-stone-800">Address:</p>
              <p className="text-stone-600">{currentBoutique.address}</p>
              <p className="text-stone-500 pt-1">Direct Concierge: {currentBoutique.phone}</p>
            </div>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#6e1327] text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            {/* City Tabs */}
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400 block mb-2">
                Select Boutique Location:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BOUTIQUES.map((b) => (
                  <button
                    key={b.city}
                    onClick={() => setSelectedBoutique(b.city)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedBoutique === b.city
                        ? 'border-[#6e1327] bg-[#6e1327]/5 shadow-sm'
                        : 'border-stone-200 bg-white hover:border-stone-400'
                    }`}
                  >
                    <span className="text-xs font-bold text-stone-900 block">{b.city}</span>
                    <span className="text-[9px] text-stone-500 truncate block">Flagship</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Boutique Details */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1 text-xs">
              <h4 className="font-serif font-bold text-stone-900 text-sm">
                {currentBoutique.name}
              </h4>
              <p className="text-stone-600 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6e1327] flex-shrink-0 mt-0.5" />
                <span>{currentBoutique.address}</span>
              </p>
              <p className="text-[11px] text-stone-500 pl-5">
                Hours: {currentBoutique.hours} · Phone: {currentBoutique.phone}
              </p>
              <p className="text-[10px] text-amber-700 font-semibold pl-5 pt-1 uppercase">
                ✦ {currentBoutique.stylists}
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sundaram"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#6e1327]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98400 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#6e1327]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#6e1327]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#6e1327]"
                  >
                    <option>10:30 AM (Morning Drape)</option>
                    <option>11:30 AM (Muhurtham Suite)</option>
                    <option>02:30 PM (Private Bridal Consult)</option>
                    <option>04:30 PM (Jewelry Pairing Session)</option>
                    <option>06:30 PM (Evening Trousseau)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#6e1327] via-[#85162f] to-[#540d1c] text-white hover:brightness-110 active:scale-95 transition-all shadow-lg"
              >
                Confirm Private Appointment
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

