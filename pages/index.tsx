import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

type Day = {
  day: number;
  maker: string;
  bar: string;
  type?: string;
  notes?: string;
};

const DaysConfig: Day[] = [
  { day: 1, maker: "Solstice", bar: "Bolivia", type: "Dark Milk 56%", notes: "" },
  {
    day: 2,
    maker: "Monsoon",
    bar: "Uganda Semiliki Forest 73%",
    notes: "Monsoon is a chocolate maker from Tucson, Ariz.",
  },
  {
    day: 3,
    maker: "Dandelion Chocolate",
    bar: "Cahabón, Guatemala 70%",
  },
  {
    day: 4,
    maker: "Idilio Origins 70%",
    bar: "Amazonas",
  },
  {
    day: 5,
    maker: "Areté",
    bar: "Sour Mash Whiskey",
    type: "Inclusion",
    notes:
      'Areté Fine Chocolate is currently on hiatus — they say they\'ll "be back as soon as we possibly can!"',
  },
  {
    day: 6,
    maker: "Mirzam",
    bar: "White Chocolate Aseeda",
    type: "White Chocolate Inclusion",
    notes: "This bar is a roasted white chocolate bar with cardamom",
  },
  {
    day: 7,
    maker: "Pump Street",
    bar: "Peru Marñon Milk 64%",
    type: "Dark Milk",
  },
  {
    day: 8,
    maker: "Soma Chocolatemaker",
    bar: "Green Tangerine 70%",
    type: "Inclusion",
    notes:
      "Soma is one of our favorite brands; they're based in Toronto, Canada",
  },
  {
    day: 9,
    maker: "Cuna de Piedra",
    bar: "Comalcalco, Tabasco, Mexico 73%",
    notes: "They also make several variants of this bar with mezcal",
  },
  {
    day: 10,
    maker: "Patric",
    bar: "Blood Orange & Cream",
    type: "Milk Chocolate Inclusion",
    notes:
      "Patric Chocolate releases only a few bars every month. Signing up for their newsletter is the best way to find out when they're dropping a new release.",
  },
  {
    day: 11,
    maker: "Fresco",
    bar: "Madagascar 74%",
    notes:
      "Fresco talks a lot about the technical details in their process. This is a light roast, medium conche bar. They have it available in several different roasts and conches.",
  },
  {
    day: 12,
    maker: "Green Bean to Bar",
    bar: "Alpaca Marañon Canyon, Peru 75%",
    notes:
      "Green Bean to Bar is a Japanese chocolate maker, and they're one of the highlights of the Northwest Chocolate Festival for us.",
  },
  {
    day: 13,
    maker: "White Label Chocolate",
    bar: "Bolivia Wild Harvest 72%",
    notes:
      "White Label is based in Santa Cruz, Calif., and is run by a very nice gentleman who gives a great factory tour.",
  },
  {
    day: 14,
    maker: "Dick Taylor",
    bar: "Madagascar Milk 58%",
    type: "Dark Milk"
  },
  {
    day: 15,
    maker: "Cacao Review",
    bar: "La Reunion Estate, Trinidad 70%",
    notes:
      "This bar is made by some of our friends in the Salt Lake area. It's a collaboration with rum producer Ten to One.",
  },
  {
    day: 16,
    maker: "Monsoon",
    bar: "Esmereldas, Ecuador 75%",
  },
  {
    day: 17,
    maker: "Soma Chocolatemaker",
    bar: "Abstract Chocolate Science 75%",
    type: "Inclusion",
    notes: "This inclusion goes wild with nibs",
  },
  {
    day: 18,
    maker: "Green Bean to Bar",
    bar: "Green Yuzu, Venezuela 70%",
    type: "Inclusion",
    notes: "Another inclusion bar, the Green Yuzu has a great citrus zing.",
  },
  {
    day: 19,
    maker: "Dandelion Chocolate",
    bar: "Hacienda Azul, Costa Rica 70%",
  },
  {
    day: 20,
    maker: "White Label Chocolate",
    bar: "Samuliki Forest, Uganda 72%",
  },
  {
    day: 21,
    maker: "Marou",
    bar: "Mrs. Tam's Dak Nong, Vietnam",
    notes:
      "This is an exclusive collaboration Marou did with our friends at Cacao Review.",
  },
  {
    day: 22,
    maker: "Patric",
    bar: "Salty Cow 58%",
    notes: "A nice milk chocolate",
  },
  {
    day: 23,
    maker: "Fresco",
    bar: "Polochic Valley, Guatemala 70%",
    notes: "Medium roast, long conche",
  },
  {
    day: 24,
    maker: "Hogarth",
    bar: "Sarsparilla and Orange",
    type: "Inclusion",
    notes:
      "This New Zealand company makes some awesome inclusions. This is a fun one.",
  },
  {
    day: 25,
    maker: "Solstice",
    bar: "Wasatch 70%",
    notes:
      "This blend includes several origins, and it's Solstice's signature bar.",
  },
];

const Card = ({ day, maker, bar, type, notes }: Day) => {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setVisible(Boolean(localStorage.getItem(`advent:${day}`)));
  }, []);
  useEffect(() => {
    localStorage.setItem(`advent:${day}`, visible ? "true" : "");
  }, [visible]);

  return (
    <div
      className={visible ? styles.day : styles.dayHidden}
      onClick={() => setVisible(!visible)}
    >
      <div className={styles.dayNumber}>{day}</div>
      <div className={styles.dayText}>
        <div className={styles.dayMaker}>{maker}</div>
        <div className={styles.dayBar}>{bar}</div>
        <div className={styles.dayType}>{type}</div>
        <div className={styles.dayNotes}>{notes}</div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>2020 Advent Calendar</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>2020 Advent Calendar</h1>

        <p className={styles.description}>
          Click the day to reveal the chocolate inside.
        </p>

        <div className={styles.grid}>
          {DaysConfig.map((day) => (
            <Card {...day} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        i guess a copyright goes here, if you want
      </footer>
    </div>
  );
}
