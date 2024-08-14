import { Background } from "../components/Background";

import "../components/background-sheet.css";
import randomPicture from "../pages/pictures/peakpx.jpg";
export function About() {
  return (
    <>
      <Background>
        <main>
          <img src={randomPicture} alt="random-picture" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            repellat quidem deleniti nisi explicabo voluptate dolorum doloribus
            fuga repellendus maxime, earum ipsum qui nostrum non, totam rerum
            reprehenderit atque saepe! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Optio repellat quidem deleniti nisi explicabo
            voluptate dolorum doloribus fuga repellendus maxime, earum ipsum qui
            nostrum non, totam rerum reprehenderit atque saepe! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Optio repellat quidem
            deleniti nisi explicabo voluptate dolorum doloribus fuga repellendus
            maxime, earum ipsum qui nostrum non, totam rerum reprehenderit atque
            saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio repellat quidem deleniti nisi explicabo voluptate dolorum
            doloribus fuga repellendus maxime, earum ipsum qui nostrum non,
            totam rerum reprehenderit atque saepe! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio repellat quidem deleniti nisi
            explicabo voluptate dolorum doloribus fuga repellendus maxime, earum
            ipsum qui nostrum non, totam rerum reprehenderit atque saepe! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Optio repellat
            quidem deleniti nisi explicabo voluptate dolorum doloribus fuga
            repellendus maxime, earum ipsum qui nostrum non, totam rerum
            reprehenderit atque saepe! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Optio repellat quidem deleniti nisi explicabo
            voluptate dolorum doloribus fuga repellendus maxime, earum ipsum qui
            nostrum non, totam rerum reprehenderit atque saepe!
          </p>
        </main>
      </Background>
    </>
  );
}
