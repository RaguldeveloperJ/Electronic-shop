import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-12 text-white md:grid-cols-[1.3fr,1fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold tracking-wide text-slate-200">
            New season · Smart electronics
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            Upgrade your world with the latest{' '}
            <span className="text-primary">electronics</span>.
          </h1>
          <p className="max-w-xl text-sm text-slate-200 md:text-base">
            Shop curated laptops, smartphones, headphones, and accessories —
            all in one beautiful, fast experience. Built with React and
            Tailwind.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Start shopping
            </Link>
            <a
              href="#featured"
              className="inline-flex items-center rounded-lg border border-slate-500/60 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-white/80"
            >
              View featured deals
            </a>
          </div>
        </div>

        <div className="relative grid gap-3 text-xs md:text-sm">
          <div className="rounded-xl bg-slate-800/80 p-4 shadow-md">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Laptops
            </p>
            <p className="text-sm font-medium">Performance for work & play</p>
            <p className="mt-1 text-xs text-slate-300">
              Ultrabooks, gaming laptops, and creator machines.
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-4 shadow-md">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Smartphones
            </p>
            <p className="text-sm font-medium">Flagships & budget heroes</p>
            <p className="mt-1 text-xs text-slate-300">
              Latest cameras, fast charging, and 5G ready.
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-4 shadow-md">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Audio
            </p>
            <p className="text-sm font-medium">Immersive sound experience</p>
            <p className="mt-1 text-xs text-slate-300">
              Wireless earphones, ANC headphones, and speakers.
            </p>
          </div>
        </div>
      </section>

      <section id="featured" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Featured collections
          </h2>
          <Link
            to="/products"
            className="text-sm font-medium text-primary hover:text-blue-700"
          >
            View all products
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-primary">Laptops</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              Power for creators & gamers
            </p>
            <p className="mt-2 text-xs text-slate-500">
              High-refresh displays, powerful GPUs, and fast SSDs.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-primary">Smartphones</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              Capture every moment
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Stunning photos, all-day battery, and smooth performance.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-primary">Accessories</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              Complete your setup
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Keyboards, mice, monitors, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

