import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [dailyCount, setDailyCount] = useState(0);
  const [monthlyCount, setMonthlyCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get("/api/url-stats");
        if (response.data.success) {
          setDailyCount(response.data.dailyCount);
          setMonthlyCount(response.data.monthlyCount);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        alert("Error fetching statistics");
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>URLs Created Today</h3>
        <p>{dailyCount}</p>
      </div>
      <div>
        <h3>URLs Created This Month</h3>
        <p>{monthlyCount}</p>
      </div>
    </div>
  );
}

export default Dashboard;
