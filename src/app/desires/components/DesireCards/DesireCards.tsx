import * as mock from "mock.json";
import { Card, Flex } from "antd";
import s from "./index.module.css";
import desireDefaultImg from "assets/desireDefaultImg.png";

export const DesireCards = () => {
  const desires = mock.desires;
  return (
    <Flex
      justify="space-around"
      autoCapitalize="words"
      gap="large"
      wrap
      className={s.cardContainer}
    >
      {desires.map((desire, index) => (
        <Card
          key={`${desire.url}${index}`}
          className={s.card}
          hoverable
          cover={
            <img
              alt="desire"
              src={desire?.pictureUrl ?? desireDefaultImg.src}
            />
          }
        >
          <p>{desire.name}</p>
        </Card>
      ))}
    </Flex>
  );
};
