import React from 'react';

const JOBS = [
  {
    id: 'indeed',
    icon: '/Social_Job/indeed.svg',
    from: 'from-pink-500/60',
    to: 'to-green-500/40',
    border: 'border-white/10',
    hoverBorder: 'hover:border-white/30',
    hoverFrom: 'hover:from-white/10',
    hoverTo: 'hover:to-black/40',
    shadow: 'hover:shadow-blue-500/30',
    shine: 'via-white/60',
    rotate: 'hover:rotate-3',
  },
  {
    id: 'linkedin',
    icon: '/Social_Job/linkedin.svg',
    from: 'from-black/60',
    to: 'to-black/40',
    border: 'border-green-500/20',
    hoverBorder: 'hover:border-green-500/50',
    hoverFrom: 'hover:from-green-500/10',
    hoverTo: 'hover:to-black/40',
    shadow: 'hover:shadow-green-500/30',
    shine: 'via-green-400/60',
    rotate: 'hover:rotate-2',
  },
  {
    id: 'jobicy',
    icon: '/Social_Job/jobicy.svg',
    from: 'from-black/60',
    to: 'to-black/40',
    border: 'border-indigo-500/20',
    hoverBorder: 'hover:border-indigo-500/50',
    hoverFrom: 'hover:from-indigo-500/10',
    hoverTo: 'hover:to-black/40',
    shadow: 'hover:shadow-indigo-500/30',
    shine: 'via-indigo-400/60',
    rotate: 'hover:-rotate-2',
  },
  {
    id: 'infojobs',
    icon: '/Social_Job/infojobs-logo.svg',
    from: 'from-black/60',
    to: 'to-black/40',
    border: 'border-red-500/20',
    hoverBorder: 'hover:border-red-500/50',
    hoverFrom: 'hover:from-red-500/10',
    hoverTo: 'hover:to-black/40',
    shadow: 'hover:shadow-red-500/30',
    shine: 'via-red-400/60',
    rotate: 'hover:rotate-2',
  },
];

const JobButton = () => {
  return (
    <div className="max-w-md mx-auto z-20 flex">
      {JOBS.map((job) => (
        <button
          key={job.id}
          type="button"
          className={`relative flex w-20 h-20 items-center justify-center rounded-full
            backdrop-blur-lg border ${job.border} bg-linear-to-tr ${job.from} ${job.to}
            shadow-lg hover:shadow-2xl ${job.shadow}
            hover:scale-110 ${job.rotate} active:scale-95 active:rotate-0
            transition-all duration-300 ease-out cursor-pointer
            ${job.hoverBorder} ${job.hoverFrom} ${job.hoverTo}
            group overflow-hidden m-3`}
        >
          {/* Brillo: el padre necesita `relative` para que este `absolute inset-0` se mida
              respecto al botón y no respecto al viewport/otro ancestro posicionado */}
          <div
            className={`absolute inset-0 bg-linear-to-r from-transparent ${job.shine} to-transparent
              left-full group-hover:left-full transition-[left] duration-700 ease-out`}
          />
          <div className="relative z-10 flex items-center justify-center">
            <img
              src={job.icon}
              alt={job.id}
              className="w-7 h-7 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default JobButton;