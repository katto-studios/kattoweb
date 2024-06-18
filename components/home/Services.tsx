import Image from "next/image";
import { servicesData } from "./services-data";

export type ServicesProps = {};

export default function Services(props: ServicesProps) {
  return (
    <div>
      <h1>About our services</h1>
      <div>
        {servicesData.map((serviceData, i) => (
          <div key={i}>
            <div>
              <div>
                <Image
                  src={serviceData.img}
                  width={200}
                  height={200}
                  alt="game"
                />
              </div>
            </div>
            <div>
              <h1>{serviceData.header}</h1>
              <p>{serviceData.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
