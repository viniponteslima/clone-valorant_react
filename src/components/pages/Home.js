import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Valorant from '../../API/Valorant'
import Menu from './Home/Menu';
import Banner from './Home/Banner';


export default function Home() {

  const [season, setSeason] = useState();
  const [act, setAct] = useState();

  useEffect(() => {
    async function fetchSeason() {
      const seasonData = await Valorant('seasons');
      const acts = seasonData.filter((act) => act.type === "EAresSeasonType::Act")
      const seasons = seasonData.filter((act) => act.type !== "EAresSeasonType::Act")

      const currentAct = acts.find(act => {
        const currentDate = new Date();
        const endTime = new Date(act.endTime);
        return currentDate < endTime;
      });
      const currentSeason = seasons.find(season => {
        const currentDate = new Date();
        const endTime = new Date(season.endTime);
        return currentDate < endTime;
      });
      setAct(currentAct || seasonData[seasonData.length - 1]); // Caso não encontre, pega a última
      setSeason(currentSeason || seasonData[seasonData.length - 1]); // Caso não encontre, pega a última
    }
  
    fetchSeason();
  }, []);


  return (
    <div className={styles.home}>

      <div className={styles.season}>
        <div className={styles.logoContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 238" fill="white">
            <path d="M1.54136 0.311101C3.31779 -0.748029 4.44976 1.39265 5.40803 2.51902C67.0674 79.6562 128.8 156.737 190.453 233.875C191.72 234.973 190.761 237.321 189.052 237.069C159.531 237.102 130.004 237.08 100.483 237.08C98.1184 237.108 95.8544 235.931 94.403 234.088C63.7723 195.819 33.1584 157.533 2.52764 119.259C1.22754 117.712 0.555082 115.711 0.63914 113.7C0.63914 76.7254 0.650345 39.7455 0.62793 2.7712C0.644741 1.89699 0.611121 0.765014 1.54136 0.311101Z"/>
            <path d="M286.711 0.131757C287.972 -0.344572 289.362 0.821032 289.177 2.14354C289.222 39.1347 289.171 76.1258 289.199 113.117C289.283 115.213 288.824 117.381 287.462 119.029C278.154 130.674 268.835 142.313 259.527 153.952C257.974 155.97 255.436 157.085 252.897 156.956C223.572 156.928 194.242 156.973 164.917 156.934C163.185 157.202 162.199 154.866 163.476 153.739C204.144 102.862 244.845 52.0011 285.534 1.13485C285.842 0.697747 286.235 0.361515 286.711 0.131757Z"/>
          </svg>
        </div>
        {(season && act) && (
          <div className={styles.seasonName}>
            <h3>{season ? season.title : 'Season'}</h3>
            <h4>{act ? act.title : 'Act'}</h4>
          </div>
      )}

      </div>
      
      <div className={styles.homeScreen}>

        <Menu />

        <Banner />
        
      </div>

    </div>
  );
}