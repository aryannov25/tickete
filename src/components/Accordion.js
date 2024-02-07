import React, { useState } from "react";

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const questions = [
    {
      title: "What should I do on my first trip to Rome?",
      answer:
        "Rome is a historic city with so much to see and do! For your first trip, I recommend visiting some of the most iconic landmarks, such as the Colosseum, the Trevi Fountain, and the Spanish Steps. You can also explore the Vatican Museums and St. Peter's Square. If you have time, take a walk through Trastevere, a charming neighborhood with narrow streets and hidden piazzas.",
    },
    {
      title: "What are some hidden gems to see in Rome?",
      answer:
        "Rome is packed with hidden gems! If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
    {
      title: "How much time should I spend in Rome?",
      answer:
        "The amount of time you need to spend in Rome really depends on your interests and how much you want to see. If you just want to hit the highlights, you could see most of the major attractions in 3-4 days. However, if you want to delve deeper into the city's history and culture, you could easily spend a week or more. Ultimately, the best way to decide how much time to spend in Rome is to figure out what you want to see and do, and then plan your trip accordingly.",
    },
    {
      title: "What food is Rome known for?",
      answer:
        "A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon.",
    },
    {
      title: "What is the best way to get around Rome?",
      answer:
        "A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon.",
    },
  ];

  return (
    <div className="container mx-auto ml-8">
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className="rounded-2xl border border-grayscale-g7 px-5"
          >
            <button
              onClick={() => toggleItem(index)}
              className={`flex items-center justify-between w-full px-5 py-3 text-left ${
                openItem === index
                  ? "bg-white rounded-t-2xl"
                  : "bg-white rounded-2xl"
              } focus:outline-none`}
            >
              <span className="flex-grow-0 text-lg font-semibold">
                {openItem === index ? "−" : "+"}
              </span>
              <h3 className="flex-grow text-black text-left font-medium pl-4">
                {question.title}
              </h3>
            </button>
            {openItem === index && (
              <div className={`px-5 pt-2 pb-4 bg-white rounded-b-2xl `}>
                <p className="text-black text-base">{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
