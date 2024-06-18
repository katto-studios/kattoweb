import Image from "next/image";
import { servicesData } from "./services-data";
import { CardContainer, CardItem } from "./3d-card";
import { Card } from "./card";

export type ServicesProps = {};

export default function Services(props: ServicesProps) {
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl text-slate-600">about our services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((serviceData, i) => (
          <Card key={i}>
            <CardItem
              translateZ="100"
              rotateX={10}
              rotateZ={-5}
              className="relative w-full h-56"
            >
              <Image
                className="object-contain"
                src={serviceData.img}
                fill
                alt="game"
              />
            </CardItem>
            <CardItem className="space-y-2" translateZ="30">
              <h2 className="text-2xl text-slate-600">{serviceData.header}</h2>
              <p className="text-slate-700 font-medium">{serviceData.body}</p>
            </CardItem>
          </Card>
        ))}
      </div>
    </div>
  );
}
