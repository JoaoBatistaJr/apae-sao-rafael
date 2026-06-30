import { MapPin, Phone, AtSign } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#045AB5]" style={{paddingBlock: "2px"}}>
      <div className="container-site">
        <div className="flex flex-col items-center gap-1 py-2 text-xs font-bold text-white lg:flex-row lg:justify-between lg:gap-0 lg:text-sm">
          {/* Só aparece no desktop */}
          <span className="hidden sm:block">
            Aberto de Segunda à Sexta das 08:00 às 15:00
          </span>

          {/* Mobile: linha única centralizada com as infos principais */}
          <span className="flex items-center gap-4 lg:hidden">
            <span className="flex items-center gap-1">
              <Phone size={11} />
              (84) 9 9612-4672
            </span>
            <span className="flex items-center gap-1">
              <AtSign size={11} />
              ApaeSaoRafael
            </span>
          </span>

          {/* Desktop: todos os itens */}
          <div className="hidden items-center gap-4 lg:flex">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              Rua José Bezerra de Araújo, nº 200
            </span>
            <span className="flex items-center gap-1">
              <Phone size={14} />
              (84) 9 9612-4672
            </span>
            <span className="flex items-center gap-1">
              <AtSign size={14} />
              ApaeSaoRafael
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
