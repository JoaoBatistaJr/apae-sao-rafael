import Link from "next/link";

const items = [
  {
    emoji: "❤️",
    title: "Seja um doador, ajude essa causa",
    desc: "Sua contribuição ajuda a manter projetos sociais, educacionais e de saúde para centenas de famílias.",
    btn: "Doe agora",
    btnColor: "#e8447a",
    btnTextColor: "#fff",
    href: "/doacoes",
  },
  {
    emoji: "🤝",
    title: "Participe das nossas ações",
    desc: "Fique por dentro dos eventos, campanhas e atividades promovidas pela APAE em nossa comunidade.",
    btn: "Confira",
    btnColor: "#facc15",
    btnTextColor: "#1f2937",
    href: "/atividades",
  },
  {
    emoji: "🙌",
    title: "Seja um voluntário",
    desc: "Doe seu tempo e talento para transformar vidas. Conheça nossas comunidades de voluntários.",
    btn: "Inscreva-se",
    btnColor: "#a855f7",
    btnTextColor: "#fff",
    href: "/voluntario",
  },
];

export default function HowToHelp() {
  return (
    <section className="w-full" style={{ background: '#f9fafb', paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container-site">

        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 800, color: '#111827', marginBottom: '60px' }}>
          🧩 Como você pode ajudar 🧩
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {items.map((item) => (
            <div
              key={item.href}
              style={{
                display: 'flex', flexDirection: 'column',
                borderRadius: '24px', border: '1px solid #e5e7eb',
                overflow: 'hidden', background: '#fff',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ height: '220px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '72px' }}>{item.emoji}</span>
              </div>

              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.8, flex: 1 }}>
                  {item.desc}
                </p>
                <div style={{ marginTop: '8px' }}>
                  <Link
                    href={item.href}
                    style={{
                      display: 'inline-block', padding: '12px 28px',
                      borderRadius: '100px', background: item.btnColor,
                      color: item.btnTextColor, fontSize: '14px',
                      fontWeight: 700, textDecoration: 'none',
                    }}
                  >
                    {item.btn}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
