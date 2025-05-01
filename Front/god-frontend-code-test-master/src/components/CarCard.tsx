import { Block, Card, CardContent, Flex, Row, Spacer, Text } from "vcc-ui";
import { Car } from "../types/car.interface";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  car: Car;
}

export function CarCard({ car }: CardProps) {
  return (
    <Card href={"/learn/" + car?.id}>
      <CardContent>
        <Text variant="bates" subStyle="emphasis">
          {car?.modelType}
        </Text>
        <Flex>
          <Row>
            <Text variant="amundsen">{car?.modelName}</Text>
            <Text variant="bates" subStyle="inline-link">
              {car?.modelType}
            </Text>
          </Row>
        </Flex>
        <Spacer />
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          width="200"
          height="150"
        />
        <Spacer />

        <Flex>
          <Row>
            <Link href="https://www.volvocars.com/" arrow="right">
              Visit Shop
            </Link>
            <Link href="https://www.volvocars.com/">Learn</Link>
          </Row>
        </Flex>
      </CardContent>
    </Card>
  );
}
