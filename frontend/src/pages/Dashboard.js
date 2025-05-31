import React from 'react';
import ChartCard from '../components/ChartCard';
import MapView from '../components/MapView';
import { useRealtimeParking } from '../hooks/useRealtimeParking';

const Dashboard = () => {
  const { parkingLots } = useRealtimeParking();
  const totalLots = parkingLots.length;
  const totalAvailableSlots = parkingLots.reduce((sum, lot) => sum + (lot.availableSlots || 0), 0);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h2>Dashboard</h2>
      {/* Thống kê nhanh */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          marginBottom: 24,
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <ChartCard title="Tổng số bãi đỗ">
          <div>{totalLots}</div>
        </ChartCard>
        <ChartCard title="Số chỗ trống còn lại">
          <div>{totalAvailableSlots}</div>
        </ChartCard>
        <ChartCard title="Xe đang gửi">
          <div>...</div>
        </ChartCard>
        <ChartCard title="Thiết bị online">
          <div>...</div>
        </ChartCard>
        <ChartCard title="Doanh thu hôm nay">
          <div>...</div>
        </ChartCard>
      </div>
      {/* Đảm bảo các nội dung phía dưới xuống dưới và không tràn ngang */}
    </div>
  );
};

export default Dashboard;
