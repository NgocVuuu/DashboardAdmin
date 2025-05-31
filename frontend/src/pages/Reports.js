import React from 'react';
import ChartCard from '../components/ChartCard';

const Reports = () => (
  <div>
    <h2>Báo cáo & Thống kê</h2>
    <div style={{ display: 'flex', gap: 16 }}>
      <ChartCard title="Lượt xe vào/ra (theo ngày)">
        {/* Biểu đồ lượt xe vào/ra */}
        <div>Biểu đồ lượt xe vào/ra</div>
      </ChartCard>
      <ChartCard title="Doanh thu (theo ngày)">
        {/* Biểu đồ doanh thu */}
        <div>Biểu đồ doanh thu</div>
      </ChartCard>
    </div>
    {/* Có thể bổ sung thêm bảng lịch sử xe, doanh thu chi tiết... */}
  </div>
);

export default Reports;
