export interface SideNavMenu {
    string?: string;
    icon?: string;
    link?: string;
    selected?: boolean;
    expanded?: boolean;
    subItems?: SideNavMenu[];
}
