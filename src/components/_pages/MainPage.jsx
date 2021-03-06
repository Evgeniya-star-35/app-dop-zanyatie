import MainInfo from "../Main.info/MainInfo";
import StatisticsBtns from "../StatisticBtns/StatisticBtns";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../assets/Data/MainInfoOptions.json";

const MainPage = ({ handleOpenPage }) => {
  return (
    <section>
      <h1>Журнал расходов</h1>
      <MainInfo
        title={"Расходы"}
        options={mainInfoCosts}
        activePage="costs"
        handleOpenPage={handleOpenPage}
      />
      <MainInfo
        title={"Доходы"}
        options={mainInfoIncomes}
        activePage="incomes"
        handleOpenPage={handleOpenPage}
      />
      <MainInfo
        title={"Баланс"}
        options={mainInfoBalance}
        activePage="balance"
        handleOpenPage={handleOpenPage}
      />
      <StatisticsBtns />
    </section>
  );
};

export default MainPage;