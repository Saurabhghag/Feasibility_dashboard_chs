
/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */
import { faDashboard, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * An array of sidebar data objects.
 *
 * Each object represents a menu item in the sidebar and contains an icon and a heading.
 * The icon is a function that renders a FontAwesomeIcon component with a specific icon.
 * The heading represents the text to be displayed for the menu item.
 */
export const SidebarData = [
  { icon: () => <FontAwesomeIcon icon={faDashboard} />, heading: "Dashboard" },
  { icon: () => <FontAwesomeIcon icon={faFileAlt} />, heading: "Feasibility Form" },
];
