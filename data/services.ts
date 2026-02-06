export type Service = {
  title: string;
  desc: string;
  image: string;
};

export const services: Service[] = [
  {
    title: 'Underwater Civil Engineering',
    desc:
      'We deliver specialised underwater construction and repair solutions, including foundations, inspections, and structural maintenance. Our team ensures precision, safety, and durability in challenging marine environments.',
    image: '/images/subsea4.png',
  },
  {
    title: 'Marine Salvage',
    desc:
      'We provide efficient marine salvage operations, from wreck removal to asset recovery. With proven expertise and advanced equipment, we minimise environmental impact and operational downtime.',
    image: '/images/subsea2.png',
  },
  {
    title: 'Diving Services',
    desc:
      'Our pipeline services cover installation, inspection, and maintenance for subsea infrastructure. We ensure reliable performance through meticulous planning, skilled execution, and ongoing support.',
    image: '/images/subsea3.png',
  },
  {
    title: 'Pipeline Installation & Maintenance',
    desc:
      'We offer professional commercial diving services for inspection, repair, and maintenance tasks. Our certified divers operate to the highest safety and industry standards across a wide range of marine projects.',
    image: '/images/subsea1.png',
  },
];
