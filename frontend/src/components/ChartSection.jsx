import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Card } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartSection() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Mensagens suspeitas',
        data: [2, 3, 4, 5, 6, 8, 10],
        backgroundColor: '#1e355e',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-sm">
        <Bar data={data} options={options} />
      </Card>
    </Container>
  );
}
