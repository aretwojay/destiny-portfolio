import { useEffect, useState } from "react";
import { ContactPage } from "./pages/Contact/ContactPage";
import { HomePage } from "./pages/Home/HomePage";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { PageKey } from "./types";

const getPageFromHash = (): PageKey | null => {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace("#", "").toUpperCase();
  if (
    hash === "PROJETS" ||
    hash === "PROFIL" ||
    hash === "CONTACT" ||
    hash === "ACCUEIL"
  ) {
    return hash as PageKey;
  }
  return null;
};

export function App() {
  const [active, setActive] = useState<PageKey>(
    () => getPageFromHash() || "ACCUEIL",
  );

  useEffect(() => {
    const onHashChange = () => {
      const page = getPageFromHash();
      if (page) {
        setActive(page);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleSetActive = (page: PageKey) => {
    setActive(page);
    if (typeof window !== "undefined") {
      window.location.hash = page.toLowerCase();
    }
  };

  if (active === "PROJETS") {
    return <ProjectsPage active={active} setActive={handleSetActive} />;
  }
  if (active === "PROFIL") {
    return <ProfilePage active={active} setActive={handleSetActive} />;
  }
  if (active === "CONTACT") {
    return <ContactPage active={active} setActive={handleSetActive} />;
  }
  return <HomePage active={active} setActive={handleSetActive} />;
}
