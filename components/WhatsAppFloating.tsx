'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  const whatsappUrl =
    'https://wa.me/923191004680?text=' +
    encodeURIComponent('Hello Tailor Studio, I would like to schedule a doorstep pickup for my stitching order.');

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group focus:outline-none"
      aria-label="Chat with Tailor Studio on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-white stroke-none" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping" />
        </span>
      </div>
      <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
        WhatsApp Us
      </span>
    </a>
  );
}
