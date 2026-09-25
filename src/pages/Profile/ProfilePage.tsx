import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import { profileAssets } from "../../constants/assets";
import { PageProps } from "../../types";
import { SkillsPanel } from "./components/SkillsPanel";

export function ProfilePage({ active, setActive }: PageProps) {
  return (
    <main className="profile-page">
      <section className="profile-shell">
        <div className="profile-background" />
        <Header active={active} setActive={setActive} />
        <section className="profile-content">
          <div className="profile-left">
            <div className="profile-title">
              <h1>PROFIL</h1>
            </div>
            <div className="profile-photo">
              <img src={profileAssets.portrait} alt="Portrait" />
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-copy">
              <p>
                Développeur full-stack basé en région parisienne, j’adore créer
                et découvrir de nouvelles choses. Avec 3 ans d’expérience, j’ai
                travaillé sur de nombreux projets, actuellement en Bachelor à
                Décode, je souhaite consolider mes connaissances en
                développement.
              </p>
              <p className="profile-cta">
                Une idée, un besoin en tête ? On en parle ensemble !
              </p>
            </div>
            <SkillsPanel />
          </div>
        </section>
        <Footer variant="profile" setActive={setActive} />
      </section>
    </main>
  );
}
