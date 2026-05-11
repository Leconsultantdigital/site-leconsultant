'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect } from 'react';

const FAQ_ITEMS = [
  // ===== SECTION 1: IA GÉNÉRATIVE - CONCEPTS =====
  {
    section: 'IA Générative - Concepts',
    items: [
      { q: 'Qu\'est-ce que l\'IA générative ?', a: 'L\'IA générative est une technologie capable de créer du contenu nouveau (texte, code, images, vidéo) à partir de patterns appris. ChatGPT et Claude en sont les exemples les plus connus.' },
      { q: 'ChatGPT vs Claude : quelles différences ?', a: 'ChatGPT (OpenAI) = plus créatif, conversationnel, polyvalent. Claude (Anthropic) = plus analytique, factuel, meilleur sur contenu long et nuancé. Les deux sont excellents, juste pour usages différents.' },
      { q: 'Qu\'est-ce qu\'un "prompt" ?', a: 'Un prompt = instruction donnée à une IA. Exemple : "Écris 500 mots sur...", "Analyse ce texte et propose 3 améliorations", etc. Un bon prompt = résultat 10x meilleur.' },
      { q: 'L\'IA générative va-t-elle remplacer mon métier ?', a: 'Non, l\'IA ne remplace pas les gens. Elle amplifie ceux qui l\'apprennent. Les entrepreneurs qui maîtrisent l\'IA dès maintenant auront un avantage compétitif de 6-12 mois.' },
      { q: 'Comment fonctionne un LLM (grand modèle de langage) ?', a: 'Un LLM prédit le mot suivant en fonction des mots précédents, basé sur des patterns de milliards de textes. Il n\'a pas de "cerveau", c\'est une math complexity : statistiques + patterns.' },
      { q: 'L\'IA générative peut-elle "penser" ?', a: 'Non, l\'IA générative n\'a pas de conscience. Elle reconnaît des patterns et répond statistiquement. Utile ? Oui. Consciente ? Non.' },
      { q: 'Quels sont les meilleurs outils d\'IA en 2025 ?', a: 'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft). À niveau égal en performance. Choisir selon vos préférences + budget.' },
    ]
  },

  // ===== SECTION 2: FORMATIONS IA =====
  {
    section: 'Formations IA',
    items: [
      { q: 'Combien de temps dure une formation IA ?', a: '2-4 heures selon le sujet. Suffisant pour maîtriser les bases et cas d\'usage. Flexible selon vos disponibilités (journée, demi-journée, sessions étalées).' },
      { q: 'Est-ce vraiment du sur-mesure ?', a: 'Oui 100%. Phase 1 : audit diagnostic de vos besoins. Puis la formation s\'adapte à votre métier (ex : formation différente pour marketeur vs développeur).' },
      { q: 'Quel est le ROI d\'une formation IA ?', a: 'En moyenne 3-6x en 30-90 jours. Concret : +10h productivité/semaine, contenu 3x plus rapide, moins d\'erreurs, plus de leads. Dépend du secteur.' },
      { q: 'Vous formez aussi les équipes ?', a: 'Oui, en petits groupes de 2-8 personnes max. Plus efficace : chacun pose ses questions, apprend en pratiquant sur ses cas réels. Tarif dégressif à partir de 5 personnes.' },
      { q: 'Qu\'est-ce que j\'apprends en formation ChatGPT ?', a: '50 prompts essentiels, cas d\'usage marketing/contenu/productivité, limitations à connaître, comment l\'intégrer à votre workflow, bonnes pratiques (données sensibles, copyright).' },
      { q: 'Quelle différence entre formation ChatGPT et Claude ?', a: 'Formation ChatGPT = outils gratuit/Pro, cas généraux. Formation Claude = plus avancée, API, use-cases B2B, meilleur sur analyse longue. Recommandé : les deux progressivement.' },
      { q: 'Y a-t-il un niveau pré-requis ?', a: 'Non. Du complet débutant (jamais utilisé ChatGPT) au avancé (utilisation quotidienne). Chacun repart avec des nouvelles techniques.' },
      { q: 'Recevez-je un certificat ?', a: 'Oui, attestation de suivi + ressources écrites. Pas équivalent RS6776, mais preuve de formation professionnelle.' },
      { q: 'Puis-je revoir la formation en vidéo après ?', a: 'Non vidéo recording, mais vous avez : documentation complète, prompts templates, accès 30j post-formation pour questions.' },
      { q: 'Comment ça fonctionne après la formation ?', a: 'Phase 3 = suivi 30 jours : questions par Slack, itération sur vos workflows, ajustements. Puis option : passer à Directeur Marketing pour du soutien récurrent.' },
    ]
  },

  // ===== SECTION 3: DIRECTEUR MARKETING IA-POWERED =====
  {
    section: 'Directeur Marketing IA-Powered',
    items: [
      { q: 'C\'est quoi exactement le Directeur Marketing IA-powered ?', a: 'Une prestation récurrente (€1500-5000/mois) : stratégie marketing mensuelle + exécution quotidienne (contenu, LinkedIn, SEO, leads). IA intégrée (ChatGPT, Claude, Make.com) pour 3x plus d\'output.' },
      { q: 'Pourquoi "IA-powered" et pas juste marketing ?', a: 'Différence clé : je ne travaille pas 40h/semaine. J\'utilise l\'IA (ChatGPT, Claude) pour générer contenu/idées rapidement, vous permet d\'avoir une qualité CMO sans le coût CMO.' },
      { q: 'Engagement minimum ?', a: 'Non. Mois par mois. Annulation possible avec 1 mois de préavis. Zéro surprises.' },
      { q: 'Quel type de stratégie ?', a: 'Personalisée selon votre business. Peut être : LinkedIn B2B, SEO + blog, e-mail + nurture, contenu + réseaux, lead generation, upsell. Défini ensemble en mois 1.' },
      { q: 'Combien de temps vous travaillez sur mon projet ?', a: 'Starter : 10h/mois. Standard : 20h/mois. Premium : 30h/mois. Transparent : vous voyez exactement les heures utilisées.' },
      { q: '100% remote ou on-site possible ?', a: '100% remote de base. Slack, docs partagés, vidéos régulières. Réunions on-site = possible (frais déplacement déductibles).' },
      { q: 'Comment se passent les réunions ?', a: 'Starter : 2/mois. Standard : 4/mois. Premium : hebdo. 30-60 min chacune. Fixées à l\'avance ou ad-hoc selon besoin.' },
      { q: 'Qu\'est-ce qui garantit les résultats ?', a: 'Pas de "garantie miracle". Mais résultats mesurés mensuellement. Si rien ne fonctionne après 30j = on pivote stratégie. Transparence totale.' },
      { q: 'Quelle est votre expérience ?', a: '15+ années marketing, 500+ entrepreneurs formés à l\'IA, cas clients +300% leads, €150k revenue additionnelle. Partenaires : CréActifs, Mill Forma, Eneko, Gedaf.' },
      { q: 'Puis-je commencer par une formation IA avant ?', a: 'Oui, c\'est même recommandé ! Beaucoup commencent par Formation IA (découverte), puis passent à Directeur Marketing (exécution). Transition naturelle.' },
    ]
  },

  // ===== SECTION 4: TARIFS & PRICING =====
  {
    section: 'Tarifs & Pricing',
    items: [
      { q: 'Quelle est la tarification des formations ?', a: 'Formation seule : €500-1500 (2-4h). Consulting + Formation : €2000-5000 (audit + 2-3 sessions + plan d\'action). Sur devis pour équipes.' },
      { q: 'Quel est le prix du Directeur Marketing ?', a: 'Starter : €1500/mois (10h). Standard : €3000/mois (20h, RECOMMANDÉ). Premium : €5000+/mois (30h). Peut être ajusté selon scope.' },
      { q: 'Peut-on négocier les tarifs ?', a: 'Tarifs fixes pour formations. Pour Directeur Marketing : tarif dégressif possible si engagement 6+ mois ou volume horaire élevé.' },
      { q: 'Acceptez-vous les paiements échelonnés ?', a: 'Oui. Formations : paiement intégral ou 2 versements. Directeur Marketing : facture mensuelle (échéance 15 jours).' },
      { q: 'Quelle est votre minimum viable ?', a: 'Formation = €500. Directeur Marketing = €1500/mois. Pas de petit montant imposé au-delà.' },
      { q: 'Peut-on tester avant de s\'engager ?', a: 'Oui, audit gratuit 30 min. Entretien diagnostic, réponses à vos questions, pas d\'obligation. Puis vous décidez si formation ou Directeur Marketing.' },
    ]
  },

  // ===== SECTION 5: OUTILS & TECHNOLOGIE =====
  {
    section: 'Outils & Technologie',
    items: [
      { q: 'Qu\'est-ce que Make.com ?', a: 'Plateforme no-code pour automatiser workflows. Relie vos outils (CRM, email, Slack, Notion) sans code. Ex : nouveau lead → auto-assigné à équipe + email envoyé automatiquement.' },
      { q: 'Avez-vous besoin d\'API ou coding ?', a: 'Non pour Make.com (no-code). ChatGPT/Claude = pas besoin de coding. Si API = sujet avancé, adressé en formation Claude optionnelle.' },
      { q: 'Quel est l\'équivalent gratuit de ChatGPT Pro ?', a: 'ChatGPT Free (gratuit) = suffit pour débuter. Pro (€20/mois) = meilleur pour contenu long. Gemini Free (Google) = alternatif. Claude Free = très bon aussi.' },
      { q: 'Données personnelles : sécurisé dans ChatGPT ?', a: 'ChatGPT stocke vos données (sauf Business plan). Pour données sensibles : utiliser "Anonymous mode" ou demander suppression. À discuter en formation.' },
      { q: 'Quels sont les outils que vous utilisez vous-même ?', a: 'Claude (Anthropic) pour analyse/long-form. ChatGPT pour créativité/brainstorm. Make.com pour automatisation. Notebooklm pour synthèse. Canva pour visuals.' },
    ]
  },

  // ===== SECTION 6: LOGISTIQUE & PROCESS =====
  {
    section: 'Logistique & Processus',
    items: [
      { q: 'Comment on démarre ? Première étape ?', a: '1) Audit gratuit 30 min (formulaire contact) 2) Débrief de vos besoins 3) Proposition service (Formation ou Directeur Marketing) 4) Signature accord + planning.' },
      { q: 'Où sont les formations ? On-site ou online ?', a: 'Préférence : online (Zoom). Plus flexible, pas déplacement, enregistrement possible. On-site possible (groupe minimum 5 pers, frais déplacement).' },
      { q: 'Quelle plateforme pour les formations ?', a: 'Zoom pour sessions live. Notion pour ressources. Slack pour questions post-formation. Documents Google Sheets/Docs pour collaborative work.' },
      { q: 'Puis-je participer à plusieurs sessions ?', a: 'Oui ! Beaucoup font : Formation ChatGPT (semaine 1) → Make.com (semaine 3) → Claude Avancée (semaine 5). Tarif forfait possible si cumul.' },
      { q: 'Y a-t-il une limite d\'une personne par formation ?', a: 'Non. Groupes de 2-8 personnes max. Plus = moins personnalisé. On peut faire plusieurs sessions parallèles si besoin.' },
      { q: 'Peut-on programmer une formation 6 mois à l\'avance ?', a: 'Oui ! Idéal pour planifier. Vous gardez spot garanti, on ajuste date 2 semaines avant.' },
      { q: 'Quels sont les horaires de travail ?', a: 'Préférence : 9h-18h lundi-vendredi (heure France). Flexible : weekend/soirée possible si accordé d\'avance.' },
      { q: 'Travaillez-vous pendant les vacances ?', a: 'Pause officielle fin juin-début juillet (Crète). Sinon disponible. Dire à l\'avance si vous avez besoin.' },
    ]
  },

  // ===== SECTION 7: CAS RÉELS & RÉSULTATS =====
  {
    section: 'Cas Réels & Résultats',
    items: [
      { q: 'Vous avez des cas clients concrets ?', a: 'Oui : PME Marketing (15 pers) +300% leads en 3 mois via IA + Make.com. Agence (8 pers) productivité +40% ChatGPT + Claude. Freelancer (solo) +€50k revenue an 1 via LinkedIn IA.' },
      { q: 'Combien de temps avant de voir des résultats ?', a: '30-90 jours selon le service. Formation = gains immédiats (productivité). Directeur Marketing = changements visibles mois 1, résultats importants mois 3.' },
      { q: 'Quel est le ROI typique ?', a: 'Formation : 3-6x en 90j. Directeur Marketing : 4x moyenne (ex : €3k investissement → €12k revenue). Dépend du secteur.' },
      { q: 'Les résultats sont-ils garantis ?', a: 'Non. Dépend de votre marché, budget, concurrence. Mais processus éprouvé sur 500+ clients. Garantie : effort maximum, transparence sur résultats.' },
    ]
  },

  // ===== SECTION 8: LEGAL & COMPLIANCE =====
  {
    section: 'Legal & Compliance',
    items: [
      { q: 'Vous êtes auto-entrepreneur ou SARL ?', a: 'Auto-entrepreneur. SIRET visible sur devis/factures. TVA 20%. Numéro Urssaf en fichier.' },
      { q: 'Factures officielles ?', a: 'Oui, factures officielles numérotées. Déductibles en frais pro/formation. Conservées 6 ans.' },
      { q: 'Puis-je utiliser les formations en interne pour reseller ?', a: 'Non, usage personnel uniquement. Si resale intention = discuter partenariat.' },
      { q: 'Les données de nos clients restent confidentielles ?', a: 'Oui 100%. NDA possible à signer. Aucune donnée partagée ailleurs (sauf anonymisé dans cas d\'étude).' },
    ]
  },

  // ===== SECTION 9: CERTIFICATION IA =====
  {
    section: 'Certification IA (Bonus)',
    items: [
      { q: 'Vous faites de la certification IA ?', a: 'Oui, je suis jury/évaluateur officiel certification RS6776 (RNCP). C\'est une prestation à part, pas intégrée. Contacter pour détails.' },
      { q: 'Qu\'est-ce que la certification RS6776 ?', a: 'Certification nationale en IA générative. Reconnaissance officielle. Durée : 80h formation + 20h projet. Dépend d\'organisme (Educademy par exemple).' },
      { q: 'Combien ça coûte ?', a: 'Rs6776 = €2000-3500 via organisme agréé. J\'interviens comme évaluateur (inclus) pas prix séparé.' },
    ]
  },

  // ===== SECTION 10: QUESTIONS DE BUSINESS =====
  {
    section: 'Questions de Business',
    items: [
      { q: 'Êtes-vous partenaire Educademy ?', a: 'Oui, partenaire + évaluateur certifié RS6776.' },
      { q: 'Avez-vous des partenaires ?', a: 'Oui : CréActifs (formation), Mill Forma (corporate), Eneko (consulting), Gedaf (secteur public). Recommandations mutuelles.' },
      { q: 'Vous avez votre certification IA ?', a: 'Oui, RS6776 (certification IA générative). Plus 15+ années marketing/business.' },
      { q: 'Pouvez-vous m\'aider à lever des fonds avec IA ?', a: 'Non expertise directe. Mais peux vous aider à présenter votre plan AI-powered mieux (stratégie marketing IA). Conseil limité.' },
      { q: 'Vous coachez aussi ?', a: 'Oui, inclus dans Directeur Marketing ou formation. Questions business/stratégie = addressées régulièrement. Coaching pur = horaire séparé.' },
    ]
  },
];

export default function FAQ() {
  useEffect(() => {
    // Add FAQPage Schema.org JSON-LD
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.flatMap(section =>
        section.items.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        }))
      ),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4">50+ Questions Fréquentes</h1>
            <p className="text-xl text-gray-600">
              Tout sur l'IA générative, formations, Directeur Marketing, pricing, et plus.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="container max-w-3xl">
            {FAQ_ITEMS.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-200 pb-3">
                  {section.section}
                </h2>

                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <details
                      key={itemIdx}
                      className="bg-white border border-gray-200 p-6 rounded-lg cursor-pointer hover:border-blue-300 hover:shadow-md transition group"
                    >
                      <summary className="font-bold text-blue-700 text-base group-hover:text-blue-900 transition">
                        {item.q}
                      </summary>
                      <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border-l-4 border-blue-600 text-center">
              <h2 className="text-2xl font-bold mb-4">Votre Question N'Est Pas Listée ?</h2>
              <p className="text-gray-700 mb-6">
                Contactez-moi directement. Je vous répondrai personnellement en 24h.
              </p>
              <Link href="/contact" className="btn-primary">
                Poser une Question
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
