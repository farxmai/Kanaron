import React from "react";
import DiceGenerator from "../../components/dices/DiceGenerator";

const HomePage = () => {
  return (
    <div>
      {/* <DiceGenerator /> */}
      <h1>Приветствуем на нашем сайте</h1>
      <p>
        Я пока что не придумал что здесь будет, какой-то слайдер, наверно.
        Наверное стоит добавить ссылки на основные страницы или рассказать
        немного о мире игры.
      </p>
      <DiceGenerator sides={100} />
      <DiceGenerator sides={20} />
      <DiceGenerator sides={12} />
      <DiceGenerator sides={10} />
      <DiceGenerator sides={8} />
      <DiceGenerator sides={6} />
      <DiceGenerator sides={4} />
    </div>
  );
};

export default HomePage;
