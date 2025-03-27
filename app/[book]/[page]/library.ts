import { StaticImageData } from "next/image";

// Bunny images
import BunnyThumbnail from "./images/bunny/thumbnail.png";
import Bunny1 from "./images/bunny/panel1.png";
import Bunny2 from "./images/bunny/panel2.png";
import Bunny3 from "./images/bunny/panel3.png";
import Bunny4 from "./images/bunny/panel4.png";
import Bunny5 from "./images/bunny/panel5.png";
import Bunny6 from "./images/bunny/panel6.png";
import Bunny7 from "./images/bunny/panel7.png";
import Bunny8 from "./images/bunny/panel8.png";
import Bunny9 from "./images/bunny/panel9.png";
import Bunny10 from "./images/bunny/panel10.png";

// Animal Friends images
import AnimalFriendsThumbnail from "./images/animal-friends/thumbnail.png";
import AnimalFriends1 from "./images/animal-friends/panel1.png";
import AnimalFriends2 from "./images/animal-friends/panel2.png";
import AnimalFriends3 from "./images/animal-friends/panel3.png";
import AnimalFriends4 from "./images/animal-friends/panel4.png";
import AnimalFriends5 from "./images/animal-friends/panel5.png";
import AnimalFriends6 from "./images/animal-friends/panel6.png";
import AnimalFriends7 from "./images/animal-friends/panel7.png";
import AnimalFriends8 from "./images/animal-friends/panel8.png";
import AnimalFriends9 from "./images/animal-friends/panel9.png";
import AnimalFriends10 from "./images/animal-friends/panel10.png";

interface Page {
  text: string;
  image: StaticImageData;
}
interface Book {
  title: string;
  cover: StaticImageData;
  pages: Page[];
}
type BookID = string;
type Library = Record<BookID, Book>;

export const library: Library = {
  bunny: {
    title: "Baby Bunny's Big Adventure",
    cover: BunnyThumbnail,
    pages: [
      {
        text: `Baby Bunny wakes up in his cozy burrow. "Good morning, world!" he says with a yawn.`,
        image: Bunny1,
      },
      {
        text: `Baby Bunny hops outside into the sunny meadow. The flowers wave hello. "What will I see today?"`,
        image: Bunny2,
      },
      {
        text: `He meets a buzzing bee. "Buzzzzz!" says Bee. Baby Bunny giggles, "Nice to meet you!"`,
        image: Bunny3,
      },
      {
        text: `Baby Bunny sees a sparkling stream. "Splish splash!" says the stream. He dips his paws in, "That's cold!"`,
        image: Bunny4,
      },
      {
        text: `Next, Baby Bunny meets a butterfly. It gently lands on his nose. "You're so soft!" he whispers.`,
        image: Bunny5,
      },
      {
        text: `Feeling hungry, Baby Bunny finds crunchy carrots. "Yummy!" he munches happily.`,
        image: Bunny6,
      },
      {
        text: `Clouds gather, and raindrops start to fall. "Time to go home!" says Baby Bunny, hopping quickly.`,
        image: Bunny7,
      },
      {
        text: `Safe inside his burrow, Baby Bunny cuddles up. "Adventures are fun, but home is best," he says softly.`,
        image: Bunny8,
      },
      {
        text: `Mama Bunny tucks him in snugly. "Goodnight, Baby Bunny," she whispers.`,
        image: Bunny9,
      },
      {
        text: `Baby Bunny smiles sleepily, dreaming of tomorrow’s big adventure.`,
        image: Bunny10,
      },
    ],
  },

  ["animal-friends"]: {
    title: "Animal Friends Forest Fun",
    cover: AnimalFriendsThumbnail,
    pages: [
      {
        text: `Little Bear wakes up, stretching wide, "Time for adventure!" he says with pride.`,
        image: AnimalFriends1
      },
      {
        text: `In hops Bunny with a giggle and grin, "Let’s find our friends! Let’s begin!"`,
        image: AnimalFriends2
      },
      {
        text: `They meet tiny Mouse, nibbling some cheese, "Wait for me!" Mouse squeaks, "Adventure please!"`,
        image: AnimalFriends3
      },
      {
        text: `They splash with Frog, who croaks so loud, Jumping on lily pads, feeling proud.`,
        image: AnimalFriends4
      },
      {
        text: `Wise Owl waves from a branch up high, "Careful friends, the day will fly by!"`,
        image: AnimalFriends5
      },
      {
        text: `They climb and swing with Squirrel so spry, "Come up!" he calls, "It’s fun to fly!"`,
        image: AnimalFriends6
      },
      {
        text: `Suddenly, clouds begin to pour, "Oh no!" cries Mouse, "Let’s dash indoors!"`,
        image: AnimalFriends7
      },
      {
        text: `Inside Bear's cave, cozy and dry, Friends cuddle close, rain falling by.`,
        image: AnimalFriends8
      },
      {
        text: `Bear yawns big as stars fill the sky, "Goodnight dear friends," whispers Owl nearby.`,
        image: AnimalFriends9
      },
      {
        text: `As dreams take hold, soft and sweet, Friends together, adventure complete.`,
        image: AnimalFriends10
      },
    ],
  },
};