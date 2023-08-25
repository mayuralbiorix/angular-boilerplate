export interface SideNavMenu {
    string?: string;
    icon?: string;
    link?: string;
    expanded?: boolean;
    subItems?: SideNavMenu[];
}
