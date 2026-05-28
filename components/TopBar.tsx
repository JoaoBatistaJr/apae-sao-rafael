import { MapPin, Phone, AtSign } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#0B77E5]" style={{paddingBlock: "2px"}}>
      <div className="container-site">
        <div className="flex flex-col items-center py-2 text-xs font-bold text-white sm:flex-row sm:justify-between sm:text-sm">
          {/* Só aparece no desktop */}
          <span className="hidden sm:block">
            Aberto de Terça à Quinta das 09:00 às 15:00
          </span>

          {/* Mobile: linha única centralizada com as infos principais */}
          <span className="flex items-center gap-4 sm:hidden">
            <span className="flex items-center gap-1">
              <Phone size={11} />
              (84) 9 9999-9999
            </span>
            <span className="flex items-center gap-1">
              <AtSign size={11} />
              ApaeSaoRafael
            </span>
          </span>

          {/* Desktop: todos os itens */}
          <div className="hidden items-center gap-4 sm:flex">
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              Rua José Bezerra de Araújo, nº 200
            </span>
            <span className="flex items-center gap-1">
              <Phone size={11} />
              (84) 9 9999-9999
            </span>
            <span className="flex items-center gap-1">
              <AtSign size={11} />
              ApaeSaoRafael
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
