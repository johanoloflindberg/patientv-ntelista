export const DashboardNavigationSidebarSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-60 h-[1000px] items-start gap-2 pt-6 pb-5 px-5 relative bg-white border border-solid border-slate-200">
      <div className="flex flex-col w-[200px] h-14 items-start gap-0.5 relative mr-[-1.00px] bg-white">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#0f162a] text-lg tracking-[0] leading-[normal]">
          PhysioQueue
        </div>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-slate-500 text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          Patientväntelista
        </div>
      </div>
      <div className="flex w-[200px] h-10 items-center gap-2.5 px-3 py-0 relative mr-[-1.00px] bg-[#eef6ff] rounded-lg overflow-hidden">
        <div className="relative w-2 h-2 bg-blue-600 rounded" />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-blue-600 text-[13px] tracking-[0] leading-[normal]">
          Dashboard
        </div>
      </div>
      <div className="flex w-[200px] h-10 items-center gap-2.5 px-3 py-0 relative mr-[-1.00px] rounded-lg overflow-hidden">
        <div className="relative w-2 h-2 bg-slate-500 rounded" />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-slate-700 text-[13px] tracking-[0] leading-[normal]">
          Väntelista
        </div>
      </div>
      <div className="flex w-[200px] h-10 items-center gap-2.5 px-3 py-0 relative mr-[-1.00px] rounded-lg overflow-hidden">
        <div className="relative w-2 h-2 bg-slate-500 rounded" />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-slate-700 text-[13px] tracking-[0] leading-[normal]">
          Patienter
        </div>
      </div>
      <div className="flex w-[200px] h-10 items-center gap-2.5 px-3 py-0 relative mr-[-1.00px] rounded-lg overflow-hidden">
        <div className="relative w-2 h-2 bg-slate-500 rounded" />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-slate-700 text-[13px] tracking-[0] leading-[normal]">
          Påminnelser
        </div>
      </div>
      <div className="flex w-[200px] h-10 items-center gap-2.5 px-3 py-0 relative mr-[-1.00px] rounded-lg overflow-hidden">
        <div className="relative w-2 h-2 bg-slate-500 rounded" />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-slate-700 text-[13px] tracking-[0] leading-[normal]">
          Import
        </div>
      </div>
      <div className="relative w-px h-[520px]" />
      <div className="flex w-[200px] h-10 items-center gap-2.5 px-3 py-0 relative mr-[-1.00px] rounded-lg overflow-hidden">
        <div className="relative w-2 h-2 bg-slate-500 rounded" />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-slate-700 text-[13px] tracking-[0] leading-[normal]">
          Inställningar
        </div>
      </div>
    </div>
  );
};
