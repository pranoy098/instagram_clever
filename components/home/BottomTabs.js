import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/material/24/home--v5.png",
    inactive: "https://img.icons8.com/material/24/000000/home--v5.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/material/24/search--v1.png",
    inactive: "https://img.icons8.com/material/24/000000/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/material/24/cinema---v2.png",
    inactive: "https://img.icons8.com/material/24/000000/cinema---v2.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/material/24/shopping-mall.png",
    inactive: "https://img.icons8.com/material/24/000000/shopping-mall.png",
  },
  {
    name: "Profile",
    active: "https://img.icons8.com/material/24/user-male-circle--v1.png",
    inactive:
      "https://img.icons8.com/material/24/000000/user-male-circle--v1.png",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0.1%",
    zIndex: 999,
    backgroundColor: "grey",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
