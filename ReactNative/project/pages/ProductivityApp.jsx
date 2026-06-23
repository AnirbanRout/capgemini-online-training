import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import SummaryCard from "../components/SummaryCard";
import ActivityItem from "../components/ActivityItem";
import QuoteSection from "../components/QuoteSection";

const ProductivityApp = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 900;

  const summaryData = {
    total: 45,
    completed: 32,
    rewardPoints: 1200,
  };

  const activitiesData = [
    {
      id: 1,
      activity: "Project Alpha Completed",
      timestamp: "Today, 10:30 AM",
      status: "Completed",
    },
    {
      id: 2,
      activity: "New Task Added",
      timestamp: "Today, 11:00 AM",
      status: "Pending",
    },
    {
      id: 3,
      activity: "Design Review Done",
      timestamp: "Yesterday, 03:15 PM",
      status: "Completed",
    },
    {
      id: 4,
      activity: "Meeting with Team",
      timestamp: "Yesterday, 05:00 PM",
      status: "Scheduled",
    },
    {
      id: 5,
      activity: "Bug Fixed",
      timestamp: "2 days ago",
      status: "Done",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      {isTablet ? (
        <>
          <View style={styles.rowContainer}>
            <View style={styles.leftSection}>
              <ProfileCard />
              <SummaryCard summary={summaryData} />
            </View>

            <View style={styles.rightSection}>
              <ActivityItem activity={activitiesData} />
            </View>
          </View>

          <QuoteSection />
        </>
      ) : (
        <>
          <ProfileCard />
          <SummaryCard summary={summaryData} />
          <ActivityItem activity={activitiesData} />
          <QuoteSection />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
  },

  rowContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },

  leftSection: {
    flex: 1,
  },

  rightSection: {
    flex: 1,
  },
});

export default ProductivityApp;
