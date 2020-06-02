import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
// import  { Redirect } from 'react-router-dom'
import history from './history';
function onClick(e, item) {

  history.push(item.name);
  // if(item.name==="/"){
  //   window.location.replace(window.location.origin+"/scrapelist");
  // }
  // else{
  //   window.location.replace(window.location.origin+"/"+item.name);
  // }
}

export const SideBarItems = [
  { name: "/", label: "Home", Icon: HomeIcon, onClick },
  "divider",
  {
    name: "tweets",
    label: "Tweets",
    Icon: ReceiptIcon,
    items: [
      { name: "/scrapelist", label: "Scrapelist", onClick },
      { name: "/tweetslist", label: "Tweetslist", onClick },
    ],
  },
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [
      // { name: "profile", label: "Profile" },
      // { name: "insurance", label: "Insurance", onClick },
      // "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { name: "email", label: "Email", onClick },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" },
            ],
          },
          { name: "sms", label: "SMS" },
        ],
      },
    ],
  },
];

// module.exports = {
//   SideBarItems: items,
// };
