import { StaticImageData } from "next/image"
import BunnyThumbnail from "./images/bunny/thumbnail.png"
import Bunny1 from "./images/bunny/panel1.png"
import Bunny2 from "./images/bunny/panel2.png"
import Bunny3 from "./images/bunny/panel3.png"
import Bunny4 from "./images/bunny/panel4.png"
import Bunny5 from "./images/bunny/panel5.png"
import Bunny6 from "./images/bunny/panel6.png"
import Bunny7 from "./images/bunny/panel7.png"
import Bunny8 from "./images/bunny/panel8.png"
import Bunny9 from "./images/bunny/panel9.png"
import Bunny10 from "./images/bunny/panel10.png"

interface Page {
    text: string
    image: StaticImageData
}
interface Book {
  title: string
    cover: StaticImageData
    pages: Page[]
}
type BookID = string
type Library = Record<BookID, Book>

// Title: Baby Bunny's Big Adventure

// Panel 1:Baby Bunny wakes up in his cozy burrow. "Good morning, world!" he says with a yawn.

// Panel 2:Baby Bunny hops outside into the sunny meadow. The flowers wave hello. "What will I see today?"

// Panel 3:He meets a buzzing bee. "Buzzzzz!" says Bee. Baby Bunny giggles, "Nice to meet you!"

// Panel 4:Baby Bunny sees a sparkling stream. "Splish splash!" says the stream. He dips his paws in, "That's cold!"

// Panel 5:Next, Baby Bunny meets a butterfly. It gently lands on his nose. "You're so soft!" he whispers.

// Panel 6:Feeling hungry, Baby Bunny finds crunchy carrots. "Yummy!" he munches happily.

// Panel 7:Clouds gather, and raindrops start to fall. "Time to go home!" says Baby Bunny, hopping quickly.

// Panel 8:Safe inside his burrow, Baby Bunny cuddles up. "Adventures are fun, but home is best," he says softly.

// Panel 9:Mama Bunny tucks him in snugly. "Goodnight, Baby Bunny," she whispers.

// Panel 10:Baby Bunny smiles sleepily, dreaming of tomorrow’s big adventure.


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
          image: Bunny6
        },
        {
          text: `Clouds gather, and raindrops start to fall. "Time to go home!" says Baby Bunny, hopping quickly.`,
          image: Bunny7
        },
        {
          text: `Safe inside his burrow, Baby Bunny cuddles up. "Adventures are fun, but home is best," he says softly.`,
          image: Bunny8
        },
        {
          text: `Mama Bunny tucks him in snugly. "Goodnight, Baby Bunny," she whispers.`,
          image: Bunny9
        },
        {
          text: `Baby Bunny smiles sleepily, dreaming of tomorrow’s big adventure.`,
          image: Bunny10
        }
    ]}
}