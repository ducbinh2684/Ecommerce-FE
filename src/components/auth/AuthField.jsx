export function AuthField({ label, type = "text", placeholder, icon, helper }) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-luxe-mutedText">{label}</span>
        {helper ? <span className="text-xs font-semibold text-luxe-gold">{helper}</span> : null}
      </div>
      <div className="flex h-12 items-center border border-luxe-line bg-white px-4 transition focus-within:border-luxe-gold">
        <input className="min-w-0 flex-1 bg-transparent text-sm text-luxe-ink outline-none placeholder:text-luxe-line" type={type} placeholder={placeholder} />
        {icon ? <span className="ml-3 text-luxe-mutedText">{icon}</span> : null}
      </div>
    </label>
  );
}
