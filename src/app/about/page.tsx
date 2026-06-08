import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О проекте",
  description:
    "Информация о проекте «Архангельск · наследие» — цифровом каталоге культурного наследия города.",
};

export default function AboutPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          О проекте
        </p>
        <h1 className="mt-4 font-serif text-4xl text-neutral-900">
          Архангельск · наследие
        </h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-neutral-700">
          <p>
            «Архангельск · наследие» — учебный веб-проект, созданный для
            систематизации сведений об архитектурных памятниках и
            достопримечательностях Архангельска и области.
          </p>
          <p>
            Сайт объединяет сведения о годе постройки, архитектурном стиле,
            назначении, правовом статусе и историческом значении объектов
            культурного наследия. Каталог предназначен для студентов,
            исследователей и всех, кто интересуется историей Северной столицы
            России.
          </p>
          <p>
            Данные хранятся в централизованной базе и обновляются через
            административную панель. Публичная часть сайта предоставляет
            удобный доступ к информации без регистрации.
          </p>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-8">
          <h2 className="font-serif text-2xl text-neutral-900">Источники данных</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
            <li>Открытые сведения об объектах культурного наследия</li>
            <li>Материалы музеев и краеведческих изданий</li>
            <li>Архивные описания архитектурных памятников Архангельска</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
