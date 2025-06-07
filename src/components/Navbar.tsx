import { Home, HelpCircle, BookImage, Music, Mail, User, FileText, Lock, GalleryHorizontalEnd } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/ExpandableTabs";

function Navbar() {
  const tabs = [
    { title: "Início", icon: Home },
    { title: "Galeria", icon: GalleryHorizontalEnd },
    { type: "separator" as const },
    { title: "Playlists", icon: Music },
    { title: "Fotinhas", icon: BookImage },
    { title: "Texto", icon: HelpCircle },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs tabs={tabs} />
    </div>
  );
}

function CustomColorDemo() {
  const tabs = [
    { title: "Profile", icon: User },
    { title: "Messages", icon: Mail },
    { type: "separator" as const },
    { title: "Documents", icon: FileText },
    { title: "Privacy", icon: Lock },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs 
        tabs={tabs} 
        activeColor="text-blue-500"
        className="border-blue-200 dark:border-blue-800" 
      />
    </div>
  );
}

export { Navbar, CustomColorDemo };