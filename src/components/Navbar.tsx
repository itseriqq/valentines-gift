import { Home, Music, Mail, User, FileText, Lock, BookImage } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/ExpandableTabs";

function Navbar() {
  const tabs = [
    { title: "Início", icon: Home },
    { type: "separator" as const },
    { title: "Galeria", icon: BookImage },
    { title: "Playlists", icon: Music },
    { title: "Texto", icon: Mail },
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