import { Sidebar } from "./Sidebar.jsx";
import { Topbar } from "./Topbar.jsx";
import { ProjectTable } from "./ProjectTable.jsx";
import { AssistantPanel } from "./AssistantPanel.jsx";

export function DashboardShell(){
  return <div className="dash"><Sidebar/><main><Topbar/><section className="grid"><ProjectTable/><AssistantPanel/></section></main></div>;
}
